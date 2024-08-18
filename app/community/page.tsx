import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import CommunityHero from "./Sections/Hero/CommunityHero";
import CommunityBenefits from "./Sections/Benefits/CommunityBenefits";
import PremiumAccess from "./Sections/PremiumAccess/PremiumAccess";
import CommunityTestimonial from "./Sections/Testimonials/CommunityTestimonial";
import Footer from "@/components/Footer/Footer";
import TradingChallengeCarousel from "./Sections/TradingChallengeCarousel/TradingChallengeCarousel";

function page() {
  return (
    <main className="bg-radialGradient4 flex flex-col items-center px-[0.625rem] w-dvw tablet:p-[1.875rem] tablet:pb-0">
      <Navbar
        bgColor="bg-[#0E0124]/20"
        text="Join Community"
        btnTextStyle="capitalize"
        btnTextColor="text-[#582D9F]"
        url="https://t.me/DensityExchangeOfficial"
      />
      <CommunityHero />
      {/* <TradingChallengeCarousel /> */}
      <CommunityBenefits />
      <PremiumAccess />
      <CommunityTestimonial />
      <div className="w-dvw">
        <Footer bgColor="bg-community3" />
      </div>
    </main>
  );
}

export default page;
