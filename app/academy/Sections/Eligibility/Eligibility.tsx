import React from "react";
import { eligiblecandidates } from "@/data";
import CallToAction from "@/components/Buttons/CallToAction";

function Eligibility() {
  return (
    <article className="w-dvw bg-black py-[8.75rem]">
      <section className="maxScreenSize flex flex-col gap-20 items-center justify-center">
        <section className="flex flex-col gap-3 w-[60%]">
          <h2 className="text-clampHeading5 font-bold text-center leading-tight text-white">
            Who Can Join this Course?
          </h2>
          <p className="text-clampSub text-lightGray text-center font-thin">
            There&apos;s no bar for this course. We cater to everyone. Right
            from beginners to pros
          </p>
        </section>
        <section className="flex flex-col flex-wrap items-center justify-center w-[90%] gap-4 tablet:flex-row tablet:w-[700px] desktop:w-[900px]">
          {eligiblecandidates.map((el) => (
            <div
              key={el}
              className="card text-[1.5rem] text-white grid place-items-center font-bold w-full min-w-[15.625rem] p-5 text-center h-[6.25rem] capitalize bg-darkGray tablet:w-[236px] tablet:h-[16.5625rem] desktop:h-[20.1875rem]"
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
      </section>
    </article>
  );
}

export default Eligibility;
