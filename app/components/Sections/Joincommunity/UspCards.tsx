import React from "react";
import Image from "next/image";
import { getImageUrl } from "@/helpers/GetImagesUrl";

interface Props {
  text1: string;
  text2: string;
}

function UspCards(props: Props): JSX.Element {
  return (
    <section className="bg-white/15 flex w-[18.75rem] h-[12.5rem] flex-col justify-center items-center gap-2.5 text-white text-[1.5rem] font-thin text-center py-6 px-[1.25rem] rounded-xl border border-white/20 backdrop-blur-lg tablet:w-[250px]">
      <Image
        src={`${getImageUrl("joincommunityicon.svg")}`}
        alt="Design Icon"
        width={50}
        height={50}
      />
      <p>
        {props.text1}
        <br />
        {props.text2}
      </p>
    </section>
  );
}

export default UspCards;
