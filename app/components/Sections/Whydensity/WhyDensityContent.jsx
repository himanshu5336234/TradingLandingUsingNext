"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import WhyDensityContentPart from "./WhyDensityContentPart";
import { getImageUrl } from "@/helpers/GetImagesUrl";

const data = [
  {
    id: "why0",
    image: `${getImageUrl("whydensity/125x.svg")}`,
    heading: "125x your Leverage.",
    info: "Maximize Your Trading Potential with upto 125x Leverage. Always ensure you use leverage with proper risk management.",
  },
  {
    id: "why1",
    image: `${getImageUrl("whydensity/rupees.svg")}`,
    heading: "Deposit Funds in INR.",
    info: "Deposit Funds in INR seamlessly and start your crypto futures journey within 5 minutes",
  },
  {
    id: "why2",
    image: `${getImageUrl("whydensity/safety.svg")}`,
    heading: "Safety First, Security Always.",
    info: "Density uses 256 SHA encryption & backed by leading KYC and AML analytics providers like Chainanalysis and Onfido.",
  },
  {
    id: "why3",
    image: `${getImageUrl("whydensity/cash.svg")}`,
    heading: "Deep Liquidity.",
    info: "Our assets liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.",
  },
  {
    id: "why4",
    image: `${getImageUrl("whydensity/profeatures.svg")}`,
    heading: "Pro Features at your Fingertips",
    info: "Discover Multilevel TP/SL, OTOCO, Cross wallet only on the Density Platform",
  },
];

function WhyDensityContent() {
  const variant1Ref = useRef(null);
  const variant2Ref = useRef(null);
  const variant3Ref = useRef(null);
  const variant4Ref = useRef(null);
  const variant5Ref = useRef(null);
  const phoneImage = useRef(null);

  const variant1isInView = useInView(variant1Ref, {
    root: variant1Ref.current,
    margin: "-500px 0px 0px 0px",
  });
  const variant2isInView = useInView(variant2Ref, {
    root: variant2Ref.current,
    margin: "-500px 0px 0px 0px",
  });
  const variant3isInView = useInView(variant3Ref, {
    root: variant3Ref.current,
    margin: "-500px 0px 0px 0px",
  });
  const variant4isInView = useInView(variant4Ref, {
    root: variant4Ref.current,
    margin: "-500px 0px 0px 0px",
  });
  const variant5isInView = useInView(variant5Ref, {
    root: variant5Ref.current,
    margin: "-500px 0px 0px 0px",
  });

  useEffect(() => {
    if (variant1isInView) {
      phoneImage.current.src = `${getImageUrl("whydensity/variant1.svg")}`;
    } else if (variant2isInView) {
      phoneImage.current.src = `${getImageUrl("whydensity/variant2.svg")}`;
    } else if (variant3isInView) {
      phoneImage.current.src = `${getImageUrl("whydensity/variant3.svg")}`;
    } else if (variant4isInView) {
      phoneImage.current.src = `${getImageUrl("whydensity/variant4.svg")}`;
    } else if (variant5isInView) {
      phoneImage.current.src = `${getImageUrl("whydensity/variant5.svg")}`;
    }
  }, [
    variant1isInView,
    variant2isInView,
    variant3isInView,
    variant4isInView,
    variant5isInView,
  ]);

  return (
    <section className="h-auto w-full grid grid-cols-1 justify-items-center gap-10 tablet:grid-cols-2">
      <figure className="bg-black top-0 h-auto tablet:top-0 tablet:h-dvh tablet:w-[450px] justify-center items-center px-[80px] hidden tablet:flex tablet:sticky ">
        <Image
          ref={phoneImage}
          src={`${getImageUrl("whydensity/variant1.svg")}`}
          alt="Variant of Mobile"
          width={230}
          height={230}
        />
      </figure>
      <div className="h-auto flex flex-col gap-40 tablet:gap-0">
        <section
          ref={variant1Ref}
          className="flex flex-col items-center justify-center gap-10 tablet:flex-row"
        >
          <Image
            src={`${getImageUrl("whydensity/variant1.svg")}`}
            alt="Variant of Mobile"
            width={230}
            height={230}
            className="tablet:hidden"
          />
          <WhyDensityContentPart
            image={data[0].image}
            alt={data[0].heading}
            heading={data[0].heading}
            info={data[0].info}
          />
        </section>
        <section
          ref={variant2Ref}
          className="flex flex-col items-center justify-center gap-10 tablet:flex-row"
        >
          <Image
            src={`${getImageUrl("whydensity/variant2.svg")}`}
            alt="Variant of Mobile"
            width={230}
            height={230}
            className="tablet:hidden"
          />
          <WhyDensityContentPart
            image={data[1].image}
            alt={data[1].heading}
            heading={data[1].heading}
            info={data[1].info}
          />
        </section>
        <section
          ref={variant3Ref}
          className="flex flex-col items-center justify-center gap-10 tablet:flex-row"
        >
          <Image
            src={`${getImageUrl("whydensity/variant3.svg")}`}
            alt="Variant of Mobile"
            width={230}
            height={230}
            className="tablet:hidden"
          />
          <WhyDensityContentPart
            image={data[2].image}
            alt={data[2].heading}
            heading={data[2].heading}
            info={data[2].info}
          />
        </section>
        <section
          ref={variant4Ref}
          className="flex flex-col items-center justify-center gap-10 tablet:flex-row"
        >
          <Image
            src={`${getImageUrl("whydensity/variant4.svg")}`}
            alt="Variant of Mobile"
            width={230}
            height={230}
            className="tablet:hidden"
          />
          <WhyDensityContentPart
            image={data[3].image}
            alt={data[3].heading}
            heading={data[3].heading}
            info={data[3].info}
          />
        </section>
        <section
          ref={variant5Ref}
          className="flex flex-col items-center justify-center gap-10 tablet:flex-row"
        >
          <Image
            src={`${getImageUrl("whydensity/variant5.svg")}`}
            alt="Variant of Mobile"
            width={230}
            height={230}
            className="tablet:hidden"
          />
          <WhyDensityContentPart
            image={data[4].image}
            alt={data[4].heading}
            heading={data[4].heading}
            info={data[4].info}
          />
        </section>
      </div>
    </section>
  );
}

export default WhyDensityContent;
