import CallToAction from "@/components/Buttons/CallToAction";
import React from "react";
import CommunityTestimonialCards from "./CommunityTestimonialCards";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function CommunityTestimonial() {
  return (
    <article className=" w-dvw py-[6.25rem] px-5 tablet:px-10">
      <section className="maxScreenSize flex flex-col items-center justify-center gap-[3.75rem]">
        <h2 className="heading !font-normal">
          See what the community has to say!
        </h2>
        <div className="testimonials-container flex flex-col gap-5 tablet:flex-row">
          <CommunityTestimonialCards
            src={`${getImageUrl("community/5star.png")}`}
            alt="5 star"
            text="The trading master guide provided by the Density Community has proven to be incredibly useful in helping traders become profitable. I would strongly recommend everyone to join and grab a free copy."
            personImage={`${getImageUrl("community/arihant.webp")}`}
            personName="Arihant Singh"
            personStatus="professional Trader"
          />
          <CommunityTestimonialCards
            src={`${getImageUrl("community/4halfstar.png")}`}
            alt="4 half star"
            text="I would recommend every trader to join this community; it's the ideal place for learning and personal growth."
            personImage={`${getImageUrl("community/swati.webp")}`}
            personName="Swati Madhwani"
            personStatus="Business Enthusiast"
          />
          <CommunityTestimonialCards
            src={`${getImageUrl("community/4halfstar.png")}`}
            alt="4 half star"
            text="Daily real-time trade calls by expert traders and live trading sessions have significantly improved my trading skills. Invaluable insights for consistent growth and success"
            personImage={`${getImageUrl("community/akash.webp")}`}
            personName="Akash Sinha"
            personStatus="Market Analyst"
          />
        </div>
        <div className="w-[10.5rem]">
          <CallToAction
            text="Join Community"
            btnTextColor="text-[#582D9F]"
            btnTextStyle="capitalize"
            subtext1=""
            subtext2=""
            subtext3=""
            overwriteHeight=""
            url="https://t.me/DensityExchangeOfficial"
          />
        </div>
      </section>
    </article>
  );
}

export default CommunityTestimonial;
