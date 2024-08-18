import React from "react";
import Hero from "./components/Sections/Hero/Hero";
import Metrics from "./components/Sections/Metrics/Metrics";
import Navbar from "./components/Navbar/Navbar";
import WhyDensityPage from "./components/Sections/Whydensity/WhyDensityPage";
import Charges from "./components/Sections/Charges/Charges";
import ExploreMarketPage from "./components/Sections/Exploremarket/ExploreMarketPage";
import NewFrontiersPage from "./components/Sections/Newfrontiers/NewFrontiersPage";
import TradingJourneyPage from "./components/Sections/Tradingjourney/TradingJourneyPage";
import BackedbyPage from "./components/Sections/Backedby/BackedbyPage";
import ReferralPage from "./components/Sections/Referral/ReferralPage";
import TestimonialPage from "./components/Sections/Testimonials/TestimonialPage";
import VisionariesPage from "./components/Sections/Visionaries/VisionariesPage";
import Faq from "./components/Sections/FAQ/Faq";
import GetStartedPage from "./components/Sections/Getstarted/GetStartedPage";
import JoinCommunityPage from "./components/Sections/Joincommunity/JoinCommunityPage";
import CallToAction from "./components/Buttons/CallToAction";
import Footer from "./components/Footer/Footer";
import { faqData } from "./data";

export const revalidate = 30; 

export default function Home() {
  return (
    <main className="bg-main h-auto relative w-dvw">
      <Navbar
        bgColor="bg-navBG"
        text="Trade Now"
        btnTextStyle="uppercase"
        btnTextColor="text-black"
        url="https://url.density.exchange/mWebRedirect"
      />
      <Hero />
      <Metrics />
      <WhyDensityPage />
      <Charges />
      <ExploreMarketPage />
      <NewFrontiersPage />
      <TradingJourneyPage />
      <BackedbyPage />
      <JoinCommunityPage />
      <ReferralPage />
      <TestimonialPage />
      <VisionariesPage />
      <Faq faqData={faqData} />
      <GetStartedPage />
      <div className="tradeNow backdrop-blur-lg bg-navBG bottom-0 fixed flex items-center justify-center h-[6rem] left-0 px-[48px] py-[40px] w-full desktop:hidden">
        <CallToAction
          text="Trade Now"
          btnTextStyle={""}
          btnTextColor={""}
          subtext1=""
          subtext2=""
          subtext3=""
          overwriteHeight=""
          url="https://url.density.exchange/mWebRedirect"
        />
      </div>
      <Footer bgColor="bg-densityGreen" />
    </main>
  );
}
