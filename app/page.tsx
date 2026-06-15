import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Stats } from "@/components/sections/Stats";
import { Visibility } from "@/components/sections/Visibility";
import { Bento } from "@/components/sections/Bento";
import { Pricing } from "@/components/sections/Pricing";
import { AddOns } from "@/components/sections/AddOns";
import { Services } from "@/components/sections/Services";
import { Testimonial } from "@/components/sections/Testimonial";
import { CtaMarquee } from "@/components/sections/CtaMarquee";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <LogoMarquee />
        <div className="section-sep" />
        <Stats />
        <div className="section-sep" />
        <Visibility />
        <div className="section-sep" />
        <Bento />
        <div className="section-sep" />
        <Pricing />
        <div className="section-sep" />
        <AddOns />
        <div className="section-sep" />
        <Services />
        <div className="section-sep" />
        <Testimonial />
        <CtaMarquee />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
