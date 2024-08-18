import Image from "next/image";
import React from "react";
import BenefitsCard from "./BenefitsCard";
import { getImageUrl } from "@/helpers/GetImagesUrl";
import { communitydata } from "../../../data";

function CommunityBenefits() {
  return (
    <article className=" pt-[6.25rem] px-10 flex flex-col items-center gap-16 tablet:py-[6.25rem]">
      <h2 className="heading !font-normal">
        <span className="text-neongreen">Benefits Of Joining</span>
        <br />
        Density Community
      </h2>
      <section className="benfits-container maxScreenSize flex flex-col tablet:flex-col-reverse w-full">
        <div className="grid grid-cols-1 gap-4 place-items-center tablet:grid-cols-2">
          {communitydata.map((el, idx) => (
            <div key={idx} className="w-full max-w-[500px]">
              <BenefitsCard text={el} />
            </div>
          ))}
        </div>
        <Image
          src={`${getImageUrl("joincommunity.png")}`}
          alt="Join Community"
          width={1000}
          height={800}
          className="mx-auto"
        />
      </section>
    </article>
  );
}

export default CommunityBenefits;
