import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  heading: string;
  info: string;
}

function WhyDensityContentPart(props: Props): JSX.Element {
  return (
    <section className="flex flex-col gap-2.5 h-auto w-[80%] tablet:h-dvh items-center justify-center text-white text-center tablet:w-full tablet:items-start tablet:text-left">
      <Image
        src={props.image}
        alt={props.alt}
        width={80}
        height={80}
        className="tablet:h-[12.5rem] tablet:w-[12.5rem]"
      />
      <h3 className="text-[1.75rem] leading-tight desktop:text-[2.5rem] tablet:w-[50%]">
        {props.heading}
      </h3>
      <p className="text-lightGray2 font-thin desktop:text-xl w-[90%] tablet:w-[70%]">
        {props.info}
      </p>
    </section>
  );
}

export default WhyDensityContentPart;
