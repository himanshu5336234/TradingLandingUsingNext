import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  text: string;
  personImage: string;
  personName: string;
  personStatus: string;
}

function CommunityTestimonialCards(props: Props): JSX.Element {
  const { src, alt, text, personImage, personName, personStatus } = props;
  return (
    <section className="bg-white/5 backdrop-blur-lg h-[25rem] w-[17.3125rem] p-[1.875rem] flex flex-col justify-between gap-6 border border-white/20 rounded-[1.25rem]">
      <div className="flex flex-col gap-6">
        <Image src={src} alt={alt} width={200} height={200} />
        <p className="text-white">{text}</p>
      </div>
      <div className="flex gap-[0.9375rem] items-center min-h-[3.75rem]">
        <div className="overflow-hidden rounded-full h-[50px] w-[3.125rem]">
          <Image src={personImage} alt={personName} width={80} height={80} />
        </div>
        <div className="person-info flex flex-col justify-center text-white/80 capitalize">
          <h3 className="text-[1.25rem] font-semibold tracking-wide capitalize leading-none text-white">
            {personName}
          </h3>
          <p className="text-[0.75rem]">{personStatus}</p>
        </div>
      </div>
    </section>
  );
}

export default CommunityTestimonialCards;
