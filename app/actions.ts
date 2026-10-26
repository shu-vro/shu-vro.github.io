"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const EMAIL = "official.shirshen@gmail.com";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD?.replace(/\s/g, ""),
    },
});

const TURNSTILE_HOSTNAMES = (process.env.TURNSTILE_HOSTNAMES ?? "")
    .split(",")
    .map((h) => h.trim())
    .filter(Boolean);

// fails closed: anything other than a clean, matching success is a rejection
async function verifyTurnstile(token: FormDataEntryValue | null) {
    if (typeof token !== "string" || !token || token.length > 2048)
        return false;

    const h = await headers();
    const ip =
        h.get("x-forwarded-for")?.split(",")[0].trim() || h.get("x-real-ip");

    try {
        const res = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                body: new URLSearchParams({
                    secret: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY ?? "",
                    response: token,
                    ...(ip && { remoteip: ip }),
                }),
                signal: AbortSignal.timeout(10_000),
            }
        );
        if (!res.ok) return false;
        const data = await res.json();
        return (
            data.success === true &&
            data.action === "contact" &&
            TURNSTILE_HOSTNAMES.includes(data.hostname)
        );
    } catch (err) {
        console.error("Turnstile verification failed:", err);
        return false;
    }
}

export async function sendContactEmail(_: string | null, form: FormData) {
    // honeypot filled = bot; pretend it worked
    if (form.get("_honey")) redirect("/thank-you");

    const name = String(form.get("name") ?? "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 100);
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (
        !name ||
        email.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        !message ||
        message.length > 5000
    ) {
        return "Please enter your name, a valid email and a message (max 5000 characters).";
    }

    if (!(await verifyTurnstile(form.get("cf-turnstile-response")))) {
        return "Verification failed. Please complete the check and try again.";
    }

    try {
        await transporter.sendMail({
            from: { name: `${name} (Portfolio)`, address: EMAIL },
            to: EMAIL,
            replyTo: { name, address: email },
            subject: `Portfolio message from ${name}`,
            text: `${message}\n\n— ${name} <${email}>`,
        });
    } catch (err) {
        console.error("Contact email failed:", err);
        return `Couldn't send right now. Please email me at ${EMAIL}.`;
    }

    redirect("/thank-you");
}
