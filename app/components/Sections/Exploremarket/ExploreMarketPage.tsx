"use client";

import React from "react";
import Image from "next/image";
import CallToAction from "../../Buttons/CallToAction";
import Reveal from "../../Reveal";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function ExploreMarketPage() {
  return (
    <article className="maxScreenSize py-[8.75rem] flex flex-col gap-16 justify-center items-center">
      <div className="flex flex-col gap-4 items-center w-[90%]">
        <h2 className="heading">
          Explore the Markets <br /> like it is your{" "}
          <span className="text-gradient5">Playground.</span>
        </h2>
        <p className="subtext">
          Search for your favorite coins and stay ahead of the market
        </p>
      </div>
      <Reveal>
        <Image
          src={`${getImageUrl("section5Graph.svg")}`}
          alt="graph"
          className="mx-auto"
          width={900}
          height={500}
        />
      </Reveal>
      <section className="w-[16.75rem]">
        <CallToAction
          text="Explore Markets"
          btnTextStyle="uppercase"
          btnTextColor=""
          subtext1=""
          subtext2=""
          subtext3=""
          overwriteHeight=""
          url="https://app.density.exchange/market?_gl=1*jbkbbj*_ga*MTEwMTEyMTQ2Ni4xNzA0MjY1MjE1*_ga_8P8CR90ZHF*MTcwNjUxNDczOS43NC4wLjE3MDY1MTQ3NDcuNTIuMC4w"
        />
      </section>
    </article>
  );
}

export default ExploreMarketPage;
