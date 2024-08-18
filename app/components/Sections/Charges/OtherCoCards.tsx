import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  width: number;
  height: number;
  makerFees: string;
  takerFees: string;
  spotFee: string;
}

function OtherCoCards(props: Props): JSX.Element {
  return (
    <section className="cardBackground bg-darkGray flex flex-col justify-evenly items-center after:h-[14.94rem] text-white">
      <Image
        src={props.image}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
      <div className=" flex flex-col gap-8">
        <div className="flex flex-col">
          <h3 className="text-[24px] font-bold text-center">
            {props.makerFees}
          </h3>
          <p className="text-white/50 text-center">Maker Fees</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[24px] font-bold text-center">
            {props.takerFees}
          </h3>
          <p className="text-white/50 text-center">Taker Fees</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[24px] font-bold text-center">{props.spotFee}</h3>
          <p className="text-white/50 text-center">USDT/INR Spot Fee</p>
        </div>
      </div>
    </section>
  );
}

export default OtherCoCards;
