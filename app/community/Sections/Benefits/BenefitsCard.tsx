import { getImageUrl } from "@/helpers/GetImagesUrl";
import Image from "next/image";
import React from "react";

interface Props {
  text: string;
}

function BenefitsCard(props: Props): JSX.Element {
  return (
    <section className="bg-white/15 flex items-center gap-2.5 tablet:h-[140px] desktop:h-[121px] text-white text-[1.5rem] font-thin text-center py-6 px-[1.75rem] rounded-xl border border-white/20 backdrop-blur-lg ">
      <Image
        src={`${getImageUrl("joincommunityicon.svg")}`}
        alt="Design Icon"
        width={30}
        height={30}
      />
      <p className="!text-[1rem] text-left tablet:!text-[1.5rem]">
        {props.text}
      </p>
    </section>
  );
}

export default BenefitsCard;
