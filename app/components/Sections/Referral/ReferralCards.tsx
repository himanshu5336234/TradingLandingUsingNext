import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  width: number;
  height: number;
  text: string;
}

function ReferralCards(props: Props): JSX.Element {
  return (
    <section className="card bg-darkGray h-[20.1875rem] flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center w-[50%]">
        <Image
          src={props.image}
          alt={props.alt}
          className="object-cover"
          width={props.width}
          height={props.height}
        />
        <h3 className="relative z-[2] text-clamp6 text-white text-center font-bold">
          {props.text}
        </h3>
      </div>
    </section>
  );
}

export default ReferralCards;
