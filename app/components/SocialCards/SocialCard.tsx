import Image from "next/image";
import React from "react";
import SocialBtn from "../Buttons/SocialBtn";

interface Props {
  src: string;
  alt: string;
  text: string;
  btnTextColor: string;
  bgColor: string;
  url: string;
}

function SocialCard(props: Props): JSX.Element {
  const { src, alt, text, btnTextColor, bgColor, url } = props;
  return (
    <section className="flex flex-col w-[80%] h-auto overflow-hidden rounded-[1.25rem] border border-[#fff]/20">
      <Image src={src} alt={alt} width={400} height={200} />
      <div className="px-[0.3125ren] py-[1.875rem] w-[80%] mx-auto">
        <SocialBtn
          text={text}
          btnTextColor={btnTextColor}
          bgColor={bgColor}
          url={url}
        />
      </div>
    </section>
  );
}

export default SocialCard;
