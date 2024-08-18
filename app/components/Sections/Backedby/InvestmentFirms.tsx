"use client";

import React from "react";
import Image from "next/image";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function InvestmentFirms() {
  return (
    <section className="flex flex-wrap gap-12 items-center justify-center mx-auto max-w-[59.625rem] w-[80%] tablet:gap-20">
      <Image
        src={`${getImageUrl("investor_companies/orios.svg")}`}
        alt="Orios Logo"
        height={30}
        width={100}
        className="w-auto tablet:w-[12.5rem]"
      />
      <Image
        src={`${getImageUrl("investor_companies/inflection.svg")}`}
        alt="Inflect  ion Logo"
        height={50}
        width={100}
        className="w-auto tablet:w-[6.25rem]"
      />
      <Image
        src={`${getImageUrl("investor_companies/iseed.svg")}`}
        alt="iSeed Logo"
        height={30}
        width={100}
        className="tablet:w-[9.375rem]"
      />
      <Image
        src={`${getImageUrl("investor_companies/pvp.svg")}`}
        alt="Perpetual Value Partners Logo"
        height={30}
        width={150}
        className="tablet:w-[9.375rem]"
      />
      <Image
        src={`${getImageUrl("investor_companies/1947Rise.svg")}`}
        alt="1947 Rise Logo"
        height={30}
        width={90}
        className="tablet:w-[6.25rem]"
      />
      <Image
        src={`${getImageUrl("investor_companies/tribeCapital.svg")}`}
        alt="Tribe Capital Logo"
        height={20}
        width={200}
        className="tablet:w-[18.75rem]"
      />
      <Image
        src={`${getImageUrl("investor_companies/polygonlabs.svg")}`}
        alt="Polygon Labs Logo"
        height={30}
        width={200}
        className="tablet:w-[18.75rem]"
      />
    </section>
  );
}

export default InvestmentFirms;
