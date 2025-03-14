import FooterSection from "@/components/footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TimelineBase from "@/components/TimelineBase";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <TimelineBase />
            <Projects />
            <FooterSection />
        </div>
    );
}
