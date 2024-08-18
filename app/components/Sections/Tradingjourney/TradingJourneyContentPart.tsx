import React from "react";
import Image from "next/image";
import CallToAction from "../../Buttons/CallToAction";

interface Props {
  image: string;
  alt: string;
  heading: string;
  info: string;
}

function TradingJourneyContentPart(props: Props): JSX.Element {
  return (
    <section className="flex flex-col gap-2.5 h-auto w-[80%] tablet:h-dvh items-center justify-center text-white text-center tablet:w-full tablet:items-start tablet:text-left">
      <Image
        src={props.image}
        alt={props.alt}
        width={120}
        height={120}
        className="w-20 h-20tablet:h-[9.375rem] tablet:w-[7.5rem]"
      />
      <h3 className="text-[1.75rem] leading-tight desktop:text-[2.5rem] tablet:w-[60%]">
        {props.heading}
      </h3>
      <p className="text-lightGray2 font-thin desktop:text-xl w-[90%] tablet:w-[70%]">
        {props.info}
      </p>
      <section className="w-[11.25rem] pt-9">
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
    </section>
  );
}

export default TradingJourneyContentPart;
