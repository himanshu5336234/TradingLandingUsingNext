import React from "react";
import AcademyHero from "./Sections/Hero/AcademyHero";
import AcademyFeatures from "./Sections/Features/AcademyFeatures";
import Footer from "@/components/Footer/Footer";
import Faq from "@/components/Sections/FAQ/Faq";
import { academyFaqData } from "@/data";
import LearningTopics from "./Sections/LearningTopics/LearningTopics";
import Eligibility from "./Sections/Eligibility/Eligibility";
import Opportunities from "./Sections/Opportunities/Opportunities";
import Syllabus from "./Sections/Syllabus/Syllabus";
import Navbar from "@/components/Navbar/Navbar";

function page() {
  return (
    <main className="bg-radialGradient2 w-dvw flex flex-col items-center">
      <Navbar
        bgColor="bg-navBG"
        text="Trade Now"
        btnTextStyle="uppercase"
        btnTextColor="text-black"
        url="https://url.density.exchange/mWebRedirect"
      />
      <AcademyHero />
      <AcademyFeatures />
      <LearningTopics />
      <Eligibility />
      <Opportunities />
      <Syllabus />
      <Faq faqData={academyFaqData} />
      <Footer bgColor="bg-densityGreen" />
    </main>
  );
}

export default page;
