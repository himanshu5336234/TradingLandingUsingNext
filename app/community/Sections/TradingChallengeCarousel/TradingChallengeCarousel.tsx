"use client";

import { getImageUrl } from "@/helpers/GetImagesUrl";
import Image from "next/image";
import React from "react";

function TradingChallengeCarousel() {
  return (
    <article className="py-[3.75rem]">
      <section className="maxScreenSize flex gap-10 h-[13.125rem] pt-[0.625rem] pb-5 tablet:h-[25.3125rem] overflow-x-scroll">
        <Image
          src={`${getImageUrl("community/tradingchallenge1.webp")}`}
          alt="30 Days Trading Challenge"
          width={900}
          height={280}
          onClick={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSclcophc0fDnveC8ea--95DO1vuyZCVUVjfRiHsnmZShTpBBQ/viewform"
            );
          }}
        />
        <Image
          src={`${getImageUrl("community/tradingchallenge2.webp")}`}
          alt="30 Days Trading Challenge"
          width={900}
          height={280}
          onClick={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSclcophc0fDnveC8ea--95DO1vuyZCVUVjfRiHsnmZShTpBBQ/viewform"
            );
          }}
        />

      </section>
    </article>
  );
}

export default TradingChallengeCarousel;
