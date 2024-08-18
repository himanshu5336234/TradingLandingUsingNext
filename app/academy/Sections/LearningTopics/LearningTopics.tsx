import Image from "next/image";
import React from "react";
import { learningcontents } from "@/data";
import CallToAction from "@/components/Buttons/CallToAction";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function LearningTopics() {
  return (
    <article className="bg-white w-dvw flex flex-col gap-16 items-center py-[7.3125rem] px-4 tablet:px-6">
      <section className="maxScreenSize flex flex-col items-center gap-3">
        <figure>
          <Image
            src={`${getImageUrl("detaileddashboard.svg")}`}
            alt="learning topics"
            width={300}
            height={300}
          />
        </figure>
        <h2 className="text-clampHeading5 font-bold text-center leading-tight">
          What will you learn?
        </h2>
      </section>
      <section className="flex flex-col flex-wrap items-center justify-center w-[90%] gap-4 tablet:flex-row tablet:w-[700px] desktop:w-[900px]">
        {learningcontents.map((el) => (
          <div
            key={el}
            className="card text-[1.5rem] grid place-items-center font-bold w-full min-w-[15.625rem] h-[7.75rem] p-5 text-center bg-[#F3F3F3] tablet:w-[15.625rem]"
          >
            {el}
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

export default LearningTopics;
