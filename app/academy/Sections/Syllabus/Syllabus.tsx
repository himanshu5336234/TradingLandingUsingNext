import CallToAction from "@/components/Buttons/CallToAction";
import Image from "next/image";
import React from "react";
import { syllabusdata } from "@/data";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function Syllabus() {
  return (
    <article className="bg-white w-dvw flex flex-col gap-16 items-center py-[7.3125rem] px-4 tablet:px-6">
      <section className="maxScreenSize flex flex-col items-center gap-3">
        <figure>
          <Image
            src={`${getImageUrl("detaileddashboard.svg")}`}
            alt="Syllabus"
            width={300}
            height={300}
          />
        </figure>
        <h2 className="text-clampHeading5 font-bold text-center leading-tight">
          After Enrolling, You&apos;ll Be Able To
        </h2>
      </section>
      <section className="flex flex-col justify-start gap-6">
        {syllabusdata.map((el, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 items-center text-center justify-start text-[1.125rem] tablet:flex-row tablet:text-left"
          >
            <Image
              src={`${getImageUrl("syllabusbullet.png")}`}
              alt="Bullet point icon"
              width={30}
              height={30}
            />
            <p className="w-[60%] font-bold hover:!text-black tablet:w-full">
              {el}
            </p>
          </div>
        ))}
      </section>
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
    </article>
  );
}

export default Syllabus;
