"use client";

import React from "react";
import Image from "next/image";
import { getImageUrl } from "@/helpers/GetImagesUrl";

declare global {
  interface Window {
    gtag: any;
  }
}

function GetStartedPage() {
  return (
    <article className='maxScreenSize relative z-0 py-[160px] p-[30px] flex flex-col items-center justify-center bg-[url("https://density-uploads-dev.s3.ap-south-1.amazonaws.com/market-assets/Images/texture.svg")]'>
      <h1 className="bg-clip-text bg-gradient-to-b leading-none relative from-white from-40% to-black/30 text-transparent text-clampHeading2 font-bold text-center z-[1]">
        Get started now.
      </h1>
      <Image
        src={`${getImageUrl("getstartedPhone.svg")}`}
        alt="Phone Image"
        width={544}
        height={800}
        className="relative z-[2] tablet:top-[-35px]"
      />
      <button
        className="flex justify-center items-center relative top-[-150px] bg-gradient-to-r from-gradient2 from-10% to-gradient1 font-semibold shadow-gradientShadow/80 shadow-buttonActive text-black capitalize w-[100%] h-[60px] min-h-12 px-8 py-4 rounded-lg text-[20px] transition duration-200 ease-in-out hover:ease-in-out z-[3] tablet:text-[38px] tablet:w-[866px] tablet:h-[100px] tablet:top-[-250px]"
        onClick={() => {
          window.gtag("event", "Trade_Now");
          window.open("https://url.density.exchange/mWebRedirect");
        }}
      >
        Start Trading!
      </button>
    </article>
  );
}

export default GetStartedPage;
