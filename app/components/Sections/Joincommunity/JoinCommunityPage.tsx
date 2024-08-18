import React from "react";
import UspCards from "./UspCards";
import CallToAction from "../../Buttons/CallToAction";
import Image from "next/image";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function JoinCommunityPage() {
  return (
    <article className="maxScreenSize bg-radialGradient4 h-auto pt-[140px] px-[20px] flex flex-col justify-center items-center gap-[82px] tablet:px-[80px]">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="heading">
          Trade Together.
          <br />
          <span className="text-gradient5">Thrive Together.</span>
        </h2>
        <p className="font-thin leading-tight text-center text-clampSub text-lightGray w-full">
          Join the fun-filled community on our platform.
        </p>
      </div>
      <div className="h-auto flex flex-wrap justify-center gap-[10px]">
        <UspCards text1="Premium" text2="Trading Signals" />
        <UspCards text1="Instant" text2="Support" />
        <UspCards text1="Daily" text2="Cash Reward" />
        <UspCards text1="Exclusive" text2="Content" />
      </div>
      <section className="w-[90%] max-w-[18.875rem]">
        <CallToAction
          text="Join Community"
          btnTextStyle="uppercase"
          btnTextColor=""
          subtext1=""
          subtext2=""
          subtext3=""
          overwriteHeight=""
          url="https://densityexchange.scenes.social/community-login"
        />
      </section>
      <figure className="mt-[3.125rem]">
        <Image
          src={`${getImageUrl("joincommunity.png")}`}
          alt="Join Community"
          width={1000}
          height={1000}
        />
      </figure>
    </article>
  );
}

export default JoinCommunityPage;
