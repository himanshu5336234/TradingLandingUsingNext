"use client";

import Image from "next/image";
import React from "react";
import CallToAction from "../../Buttons/CallToAction";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function NewFrontiersPage() {
  return (
    <article className="maxScreenSize bg-radialGradient1 flex flex-col gap-[3.75rem] py-[8.75rem]">
      <div className="flex flex-col gap-4 items-center w-full mx-auto">
        <h2 className="heading">
          <span className="text-gradient5">Unlock</span> New Frontiers.
        </h2>
        <p className="subtext text-lightGray">
          Are you a stock trader looking for new opportunities to make money? We
          got you covered!
        </p>
      </div>
      <figure className="w-[90%] mx-auto tablet:hidden">
        <video className="h-full w-full">
          <source src="/Videos/frontier.mp4" />
        </video>
      </figure>
      <div className="flex flex-col-reverse items-center justify-center tablet:flex-col">
        <figure className=" relative before:bg-[url('https://density-uploads-dev.s3.ap-south-1.amazonaws.com/market-assets/Images/frontierbg1.webp')] before:absolute before:w-full before:h-full before:z-[1]">
          <Image
            src={`${getImageUrl("frontierbg2.webp")}`}
            alt="Frontiers page background"
            width={1000}
            height={1000}
            className="object-contain relative z-[0] w-[80%] mx-auto tablet:w-[90%]"
          />
        </figure>
        <section className="featuresContainer flex flex-col justify-center gap-10 items-center p-6 w-[80%] uppercase text-center font-bold tablet:flex-row tablet:justify-evenly tablet:text-[20px] tablet:text-white">
          <p className="bg-gradient-to-b from-gradient1 to-gradient2 bg-clip-text text-transparent tablet:text-white">
            Same <br />
            Strategies
          </p>
          <p className="bg-gradient-to-b from-gradient1 to-gradient2 bg-clip-text text-transparent tablet:text-white">
            Same <br />
            Indicators
          </p>
          <p className="bg-gradient-to-b from-gradient1 to-gradient2 bg-clip-text text-transparent tablet:text-white">
            Better <br />
            Leverage
          </p>
          <p className="bg-gradient-to-b from-gradient1 to-gradient2 bg-clip-text text-transparent tablet:text-white">
            24x7 <br />
            Trading
          </p>
        </section>
      </div>
      <section className="w-[11.25rem] mx-auto hidden tablet:block">
        <CallToAction
          text="Trade Now"
          btnTextStyle="uppercase"
          btnTextColor="text-black"
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

export default NewFrontiersPage;
