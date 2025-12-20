import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <section id="features" className="min-h-screen">
        <HeroSection />
      </section>

      <section id="works" className="min-h-screen">
        About Section
      </section>

      <section id="pricing" className="min-h-screen">
        Services Section
      </section>

      <section id="login" className="min-h-screen">
        Contact Section
      </section>
    </>
  );
}
