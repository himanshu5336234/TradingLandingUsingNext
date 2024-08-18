import CallToAction from "@/components/Buttons/CallToAction";
import React from "react";

function Opportunities() {
  return (
    <article className="bg-black w-dvw flex flex-col gap-16 items-center py-[9.375rem] px-4 tablet:px-6">
      <section className="maxScreenSize flex flex-col items-center gap-3">
        <h2 className="text-clampHeading text-gradient5 capitalize font-bold leading-none text-center">
          Crypto Futures
          <br />
          <span className="text-white">Endless Opportunities!</span>
        </h2>
      </section>
      <div className="relative py-[4.8125rem] flex flex-col tablet:flex-row gap-6 text-white text-center text-[18px] before:h-[1px] before:w-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:from-black before:from-10% before:via-lightGray3 before:via-70% before:to-black before:to-90% after:h-[1px] after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-black after:from-10% after:via-lightGray3 after:via-70% after:to-black after:to-90%">
        <p className="w-[11.25rem]">Hedging and Risk Management</p>
        <p className="w-[11.25rem]">Lower Transaction Costs</p>
        <p className="w-[11.25rem]">Exposure to Global Markets</p>
        <p className="w-[11.25rem]">Trade both Long & Short</p>
      </div>
      <figure className="w-[60%] mx-auto">
        <video className="h-full w-full">
          <source src="/Videos/frontier.mp4" />
        </video>
      </figure>
      <div className="w-[15.625rem] h-[67px]">
        <CallToAction
          text="Enroll Now"
          subtext1="For just "
          subtext2="₹10,000"
          subtext3=" ₹1,999/-"
          btnTextStyle="uppercase"
          btnTextColor="text-black"
          overwriteHeight="!h-full"
          url="https://growthygavgt.rpy.club/courses/SNZPPIYZi1"
        />
      </div>
    </article>
  );
}

export default Opportunities;
