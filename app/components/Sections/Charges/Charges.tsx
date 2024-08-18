import React from "react";
import Image from "next/image";
import OtherCoCards from "./OtherCoCards";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function Charges() {
  return (
    <article className="maxScreenSize flex flex-col gap-[82px] py-[140px]">
      <div className="flex flex-col gap-4 items-center w-[60%] mx-auto">
        <h2 className="heading">
          Trade More. <span className="text-gradient5">Pay Less.</span>
        </h2>
        <p className="subtext">Our low Fees Supercharge Your Profits</p>
      </div>
      <div className="flex flex-col gap-4 w-[70%] mx-auto tablet:w-[50%] desktop:grid desktop:grid-cols-2 desktop:grid-rows-1 desktop:w-[60%]">
        <section className="cardBackground bg-gradient-to-b from-gradient1 to-gradient2 shadow-cardShadow shadow-cardActive after:h-[239px]">
          <Image
            src={`${getImageUrl("texture.svg")}`}
            alt="background texture"
            width={150}
            height={150}
            className="w-full h-full rounded-lg opacity-20 object-cover"
          />
          <div className="absolute top-[-20px] left-0 flex flex-col justify-evenly items-center w-full h-full text-black">
            <Image
              src={`${getImageUrl("density.svg")}`}
              alt="Density logo"
              width={230}
              height={95}
            />
            <div className=" flex flex-col gap-8">
              <div className="flex flex-col leading-tight">
                <h3 className="text-[32px] font-bold text-center">0.02%</h3>
                <p className="text-black/50 text-center">Maker Fees</p>
              </div>
              <div className="flex flex-col leading-tight">
                <h3 className="text-[32px] font-bold text-center">0.07%</h3>
                <p className="text-black/50 text-center">Taker Fees</p>
              </div>
              <div className="flex flex-col leading-tight">
                <h3 className="text-[32px] font-bold text-center">0%</h3>
                <p className="text-black/50 text-center">USDT/INR Spot Fee</p>
              </div>
            </div>
          </div>
        </section>
        <OtherCoCards
          image={`${getImageUrl("coindcx.svg")}`}
          alt="CoinDCX logo"
          width={150}
          height={30}
          makerFees="0.025%"
          takerFees="0.07%"
          spotFee="0.5%"
        />
      </div>
      <p className="subText text-darkGray2 mx-auto text-center">
        *Upto 50% Discount - using our best in class referral and rebate program
      </p>
    </article>
  );
}

export default Charges;
