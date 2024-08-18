import React from "react";
import AcademyFeatureCards from "./AcademyFeatureCards";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function AcademyFeatures() {
  return (
    <article className="bg-black py-20 px-3 tablet:py-[6.25rem] tablet:px-40">
      <section className="maxScreenSize flex flex-col gap-20 items-center justify-center">
        <section className="w-[80%] flex flex-col gap-[0.625rem]">
          <h2 className="heading !text-clampHeading5">
            Why be Part of the Academy
          </h2>
          <p className="text-clampSub text-white text-center font-thin">
            Whether your goal is to achieve financial freedom, earn some passive
            income or learn Crypto Derivatives trading, this is the platform for
            you!
          </p>
        </section>
        <section className="flex flex-col items-center gap-[6.25rem]">
          <AcademyFeatureCards
            src={`${getImageUrl("academy/communitysupport.webp")}`}
            alt="Community Support"
            title="Expert Guidance"
            info="Learn from seasoned traders with hands-on experience in the crypto market."
          />
          <AcademyFeatureCards
            src={`${getImageUrl("academy/expertguidance.webp")}`}
            alt="Expert Guidance"
            title="Practical Insights"
            info="Gain practical skills through real-time trading simulations and interactive sessions."
          />
          <AcademyFeatureCards
            src={`${getImageUrl("academy/practicalinsights.webp")}`}
            alt="Practical Insights"
            title="Community Support"
            info="Join a thriving community of learners, share insights, and grow together."
          />
        </section>
      </section>
    </article>
  );
}

export default AcademyFeatures;
