import FeatureSection from "@/components/FeatureSection";
import FinalCTA from "@/components/FinalCTA";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import StrustedBy from "@/components/StrustedBy";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <section id="login" className="min-h-screen">
        <HeroSection />
      </section>

      <section id="trusted-by">
        <StrustedBy />
      </section>

      <section id="features">
        <FeatureSection />
      </section>

      <section id="works">
        <HowItWorks />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>

      <section id="Testimonials">
        <TestimonialSection />
      </section>

      <section id="contact"
        // className="min-h-screen"
      >
        <FinalCTA />
      </section>
    </>
  );
}
