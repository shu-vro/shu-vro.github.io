"use server";

import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

const EMAIL = "official.shirshen@gmail.com";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD?.replace(/\s/g, ""),
    },
});

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
