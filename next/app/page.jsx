import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import BrandPartners from "@/components/BrandPartners";
import Section2 from "@/components/Section2";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import { getSocialsData } from "@/lib/fetchSocials";
import { getFAQData } from "@/lib/fetchFAQ";
export default async function Home() {
  const SocialData = await getSocialsData();
  const FAQs = await getFAQData();

  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <Navbar SocialData={SocialData} />
      <div className="flex flex-col  space-y-12 md:space-y-8 w-full">
        <Hero id="hero" />
        <BrandPartners />
        <Section1 id="services" />
        <Section2 id="features" />
        <FAQ FAQs={FAQs} />
        <Contact SocialData={SocialData} id="contact" />
      </div>

      <Footer />
    </div>
  );
}
