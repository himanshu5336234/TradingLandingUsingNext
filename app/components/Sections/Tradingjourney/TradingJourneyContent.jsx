"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import TradingJourneyContentPart from "./TradingJourneyContentPart";
import { getImageUrl } from "@/helpers/GetImagesUrl";

const data = [
  {
    id: "journey1",
    image: `${getImageUrl("tradingjourney/createaccount.svg")}`,
    heading: "Create an Account",
    info: "Register & Complete your Verification in less than 2 minutes",
  },
  {
    id: "journey2",
    image: `${getImageUrl("tradingjourney/depositfunds.svg")}`,
    heading: "Add Funds Seamlessly",
    info: "Add funds quickly using a variety of payment methods",
  },
  {
    id: "journey3",
    image: `${getImageUrl("tradingjourney/becometrader.svg")}`,
    heading: "Start your Trading Journey",
    info: "Choose Your Trading Pair & Trade Seamlessly",
  },
];

function TradingJourneyContent() {
  const trading1Ref = useRef(null);
  const trading2Ref = useRef(null);
  const trading3Ref = useRef(null);
  const tradingPhone = useRef(null);

  const trading1isInView = useInView(trading1Ref, {
    root: trading1Ref.current,
    margin: "-500px 0px 0px 0px",
  });
  const trading2isInView = useInView(trading2Ref, {
    root: trading2Ref.current,
    margin: "-500px 0px 0px 0px",
  });
  const trading3isInView = useInView(trading3Ref, {
    root: trading3Ref.current,
    margin: "-500px 0px 0px 0px",
  });

  useEffect(() => {
    if (trading1isInView) {
      tradingPhone.current.src = `${getImageUrl(
        "tradingjourney/variant1.svg"
      )}`;
    } else if (trading2isInView) {
      tradingPhone.current.src = `${getImageUrl(
        "tradingjourney/variant2.svg"
      )}`;
    } else if (trading3isInView) {
      tradingPhone.current.src = `${getImageUrl(
        "tradingjourney/variant3.svg"
      )}`;
    }
  }, [trading1isInView, trading2isInView, trading3isInView]);

  return (
    <section className="h-auto w-full grid grid-cols-1 justify-items-center gap-10 tablet:grid-cols-2">
      <figure className="phoneImage-container bg-[url('https://density-uploads-dev.s3.ap-south-1.amazonaws.com/market-assets/Images/tradingjourneybgGradient.svg')] bg-no-repeat bg-center top-0 h-auto justify-center items-center px-[80px] hidden tablet:flex tablet:sticky tablet:top-0 tablet:h-dvh tablet:w-[450px]">
        <Image
          ref={tradingPhone}
          src={`${getImageUrl("tradingjourney/variant1.svg")}`}
          alt="Variant of Mobile"
          width={230}
          height={230}
        />
      </figure>
      <div className="h-auto flex flex-col gap-40 tablet:gap-0">
        <section
          ref={trading1Ref}
          className="flex flex-col items-center justify-center gap-10 tablet:flex-row"
        >
          <Image
            src={`${getImageUrl("tradingjourney/variant1.svg")}`}
            alt="Variant of Mobile"
            width={230}
            height={230}
            className="tablet:hidden"
          />
          <TradingJourneyContentPart
            image={data[0].image}
            alt={data[0].heading}
            heading={data[0].heading}
            info={data[0].info}
          />
        </section>
        <section
          ref={trading2Ref}
          className="flex flex-col items-center justify-center gap-10 tablet:flex-row"
        >
          <Image
            src={`${getImageUrl("tradingjourney/variant2.svg")}`}
            alt="Variant of Mobile"
            width={230}
            height={230}
            className="tablet:hidden"
          />
          <TradingJourneyContentPart
            image={data[1].image}
            alt={data[1].heading}
            heading={data[1].heading}
            info={data[1].info}
          />
        </section>
        <section
          ref={trading3Ref}
          className="flex flex-col items-center justify-center gap-10 tablet:flex-row"
        >
          <Image
            src={`${getImageUrl("tradingjourney/variant3.svg")}`}
            alt="Variant of Mobile"
            width={230}
            height={230}
            className="tablet:hidden"
          />
          <TradingJourneyContentPart
            image={data[2].image}
            alt={data[2].heading}
            heading={data[2].heading}
            info={data[2].info}
            className="tablet:hidden"
          />
        </section>
      </div>
    </section>
  );
}

export default TradingJourneyContent;
