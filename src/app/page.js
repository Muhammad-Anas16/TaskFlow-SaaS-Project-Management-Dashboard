'use client';

import FeatureSection from "@/components/FeatureSection";
import FinalCTA from "@/components/FinalCTA";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import StrustedBy from "@/components/StrustedBy";
import TestimonialSection from "@/components/TestimonialSection";
import { authClient } from "@/lib/auth-client.";
import { useEffect } from "react";

export default function Home() {

  const { data: session, isPending, error } = authClient.useSession();

  useEffect(() => {
    if (session) {
      console.log("User in useSession:", session)
      console.log("User data in useSession:", session.user)
      console.log("Session data in useSession:", session.session)
    } else {
      console.log("No active session from useSession")
    }
  }, [session])

  return (
    <>
      <section id="login">
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

      <section id="contact">
        <FinalCTA />
      </section>
    </>
  );
}
