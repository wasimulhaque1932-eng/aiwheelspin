import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import WheelSection from "@/components/WheelSection";
import AISection from "@/components/AISection";
import ToolsGrid from "@/components/ToolsGrid";
import Categories from "@/components/Categories";
import Pricing from "@/components/Pricing";
import ViralSection from "@/components/ViralSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Ticker />
      <Hero />
      <WheelSection />
      <AISection />
      <ToolsGrid />
      <Categories />
      <Pricing />
      <ViralSection />
      <CtaSection />
      <Footer />
    </>
  );
}
