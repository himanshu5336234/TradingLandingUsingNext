import CallToAction from "@/components/Buttons/CallToAction";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  info: string;
  src: string;
  alt: string;
}

function AcademyFeatureCards(props: Props): JSX.Element {
  const { title, info, src, alt } = props;
  return (
    <section className="flex flex-col items-center justify-center gap-10 w-[90%] tablet:flex-row tablet:gap-20">
      <figure>
        <Image src={src} alt={alt} width={220} height={220} />
      </figure>
      <div className="flex flex-col items-center justify-center gap-5 tablet:items-start">
        <h3 className="text-[2rem] text-white capitalize text-center tablet:text-left">
          {title}
        </h3>
        <p className="text-[1.25rem] text-center text-white/40 w-[80%] tablet:text-left">
          {info}
        </p>
        <div className="w-[15.625rem]">
          <CallToAction
            text="Enroll Now"
            btnTextStyle="uppercase"
            btnTextColor="text-black"
            subtext1=""
            subtext2=""
            subtext3=""
            overwriteHeight=""
            url="https://growthygavgt.rpy.club/courses/SNZPPIYZi1"
          />
        </div>
      </div>
    </section>
  );
}

export default AcademyFeatureCards;
