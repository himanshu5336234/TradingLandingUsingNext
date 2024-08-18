import React from "react";
import TestimonialCards from "./TestimonialCards";
import CallToAction from "../../Buttons/CallToAction";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function TestimonialPage() {
  return (
    <article className="maxScreenSize bg-white py-[117px] flex flex-col gap-16">
      <div className="flex flex-col gap-3 w-[70%] mx-auto">
        <h2 className="leading-[1.1] text-clampHeading tracking-[-1px] text-center font-bold text-black">
          Don’t take our word for it.
        </h2>
        <p className="font-thin leading-tight text-center text-clampSub text-darkGray3 w-[70%] mx-auto">
          Hear it from our expert community of traders who have made insane
          amounts in a short amount of time
        </p>
      </div>
      <div className="cardContainer grid grid-cols-1 desktop:grid-cols-3 mx-auto gap-4 w-[85%] min-w-[250px] tablet:max-w-[600px] desktop:max-w-none">
        <TestimonialCards
          image={`${getImageUrl("testimonials/Prakash.svg")}`}
          alt="Prakash Jamatia"
          height={200}
          width={170}
          firstname="Prakash"
          lastname="Jamatia"
          status="Founder, Tradeshala"
          text="As someone who's always looking for the next big thing, I was really
          excited to try out Density’s crypto futures trading platform. And I have
          to say, it definitely lived up to my expectations."
        />
        <TestimonialCards
          image={`${getImageUrl("testimonials/Soumen.svg")}`}
          alt="Soumen Das"
          height={200}
          width={200}
          firstname="Soumen"
          lastname="Das"
          status="Crypto Trader"
          text="I'm not a seasoned trader, but this website has made it easy for me to get started with crypto futures trading. Their KYC was very fast and the educational resources were really helpful."
        />
        <TestimonialCards
          image={`${getImageUrl("testimonials/Arjun.svg")}`}
          alt="Arjun Naik"
          height={200}
          width={200}
          firstname="Arjun"
          lastname="Naik"
          status="Equity Trader"
          text="I've been using this platform for a few months now and it's been a great experience. I was delighted to see all the major crypto coins listed on Density Exchange."
        />
      </div>
      <section className="w-[11.25rem] mx-auto">
        <CallToAction
          text="Trade Now"
          btnTextStyle="uppercase"
          btnTextColor=""
          subtext1=""
          subtext2=""
          subtext3=""
          overwriteHeight=""
          url="https://url.density.exchange/mWebRedirect"
        />
      </section>
    </article>
  );
}

export default TestimonialPage;
