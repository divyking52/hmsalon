import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhatWeDo from "@/components/sections/WhatWeDo";
import SignatureCategories from "@/components/sections/SignatureCategories";
import WorksPortfolio from "@/components/sections/WorksPortfolio";
import Feedback from "@/components/sections/Feedback";
import FranchiseBanner from "@/components/sections/FranchiseBanner";
import HMNews from "@/components/sections/HMNews";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <SignatureCategories />
        <WorksPortfolio />
        <Feedback />
        <FranchiseBanner />
        <HMNews />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
