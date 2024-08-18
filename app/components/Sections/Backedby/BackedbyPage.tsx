"use client";

import React from "react";
import InvestmentFirms from "./InvestmentFirms";
import Investors from "./Investors";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function BackedbyPage() {
  return (
    <article className="maxScreenSize flex flex-col gap-16 py-[8.75rem] px-5">
      <div className="relative py-[4.8125rem] before:h-[1px] before:w-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:from-black before:from-10% before:via-lightGray3 before:via-70% before:to-black before:to-90% after:h-[1px] after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-black after:from-10% after:via-lightGray3 after:via-70% after:to-black after:to-90%">
        <h2 className="bg-clip-text bg-gradient-to-b from-white from-40% to-black/30 font-bold text-transparent text-center text-5xl tablet:text-7xl">
          Backed by the Best.
        </h2>
      </div>
      <InvestmentFirms />
      <section className="grid grid-cols-2 gap-8 mx-auto tablet:gap-8 desktop:grid-cols-4 w-[70%] desktop:min-w-[21.875rem]">
        <Investors
          image={`${getImageUrl("investors/Utsav.svg")}`}
          alt="Ustav Somani"
          status="Ex-partner, AngelList India"
          width={120}
          height={120}
        />
        <Investors
          image={`${getImageUrl("investors/Aditya.svg")}`}
          alt="Aditya Nagarsheth"
          status="Partner, Perpetual Value Partners"
          width={120}
          height={120}
        />
        <Investors
          image={`${getImageUrl("investors/Gokul.svg")}`}
          alt="Gokul Rajaram"
          status="Ex-board director, Coinbase | Ex-Google"
          width={120}
          height={120}
        />
        <Investors
          image={`${getImageUrl("investors/Sajid.svg")}`}
          alt="Sajid Rehman"
          status="Managing Partner, My Asia VC"
          width={120}
          height={120}
        />
        <Investors
          image={`${getImageUrl("investors/Arjun.svg")}`}
          alt="Arjun Sethi"
          status="Cofounder, Tribe Capital"
          width={120}
          height={120}
        />
        <Investors
          image={`${getImageUrl("investors/Kunal.svg")}`}
          alt="Kunal Shah"
          status="Founder, Cred"
          width={120}
          height={120}
        />
        <Investors
          image={`${getImageUrl("investors/Sandeep.svg")}`}
          alt="Sandeep Nailawal"
          status="Cofounder, Polygon Labs"
          width={120}
          height={120}
        />
        <Investors
          image={`${getImageUrl("investors/Karn.svg")}`}
          alt="Karn Vivek Nagpal"
          status="Investor at CoinDCX, Dealshare, Oye Rickshaw!"
          width={120}
          height={120}
        />
      </section>
    </article>
  );
}

export default BackedbyPage;
