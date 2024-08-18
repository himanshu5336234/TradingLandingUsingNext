import React from "react";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/Buttons/CallToAction";
import DownloadBtn from "@/components/Buttons/DownloadBtn";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function AcademyHero() {
  return (
    <article className="flex flex-col items-center pt-5 pb-10 gap-10 mt-20">
      <Link href="/" className="pt-10">
        <Image
          src={`${getImageUrl("densitylogo.svg")}`}
          alt="Density Logo"
          width={180}
          height={200}
        />
      </Link>
      <section className="w-[60%] flex flex-col items-center gap-8">
        <h1 className="heading">Learn Crypto Trading from Basic to Advance </h1>
        <p className="subtext !text-[#FBFBFB] !text-[1.25rem]">
          Enrol now for an additional {"  "}
          <span className="font-bold">₹2000 Trading Bonus!</span>
        </p>
      </section>
      <section className="CTA-container flex flex-col gap-6 tablet:flex-row">
        <div className="w-[15.625rem] h-[67px]">
          <CallToAction
            text="Enroll Now"
            subtext1="For just "
            subtext2="₹10,000"
            subtext3=" ₹1,999/-"
            btnTextStyle="uppercase"
            btnTextColor="text-black"
            overwriteHeight="!h-full"
            url="https://growthygavgt.rpy.club/courses/SNZPPIYZi1"
          />
        </div>
        <div className="w-[15.625rem] h-[4.1875rem]">
          <DownloadBtn
            text="Join Community"
            btnTextStyle="!uppercase"
            bgColor="!bg-transparent"
            overwriteHeight="!h-full"
            hideImage="hidden"
            border="!border-white"
            url="https://densityexchange.scenes.social/community-login"
          />
        </div>
      </section>
      <figure className="overflow-hidden rounded-2xl mx-auto w-[90%] h-[300px] tablet:w-[60%] tablet:h-[500px]">
        <iframe
          width="100%"
          height="100%"
          src={"https://www.youtube.com/embed/gfxtEPh42rk?autoplay=1&mute=1"}
          title="Crypto Trading Course by Density Exchange - Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </figure>
    </article>
  );
}

export default AcademyHero;
