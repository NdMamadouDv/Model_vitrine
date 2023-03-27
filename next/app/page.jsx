import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import { getHeroData } from "@/lib/fetchHero";
import BrandPartners from "@/components/BrandPartners";
import { getBrandsData } from "@/lib/fetchBrands";
import { getSection1Data } from "@/lib/fetchSection1";
import { getSection2Data } from "@/lib/fetchSection2";
import Section2 from "@/components/Section2";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { getSocialsData } from "@/lib/fetchSocials";
import FAQ from "@/components/FAQ";
import { getFAQData } from "@/lib/fetchFAQ";

export default async function Home() {
  const HeroData = await getHeroData();
  const BrandData = await getBrandsData();
  const Section1Data = await getSection1Data();
  const Section2Data = await getSection2Data();
  const SocialsData = await getSocialsData();
  const FAQs = await getFAQData();

  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <Navbar />
      <div className="flex flex-col  space-y-12 md:space-y-8 w-full">
        <Hero HeroData={HeroData} id="hero" />
        <BrandPartners BrandData={BrandData} />
        <Section1 Section1Data={Section1Data} id="services" />
        <Section2 Section2Data={Section2Data} id="features" />
        <FAQ FAQs={FAQs} />
        <Contact id="contact" SocialData={SocialsData} />
      </div>
      <Footer />
    </div>
  );
}
