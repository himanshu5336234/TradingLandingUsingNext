import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  height: number;
  width: number;
  status: string;
  text: string;
  firstname: string;
  lastname: string;
}

function TestimonialCards(props: Props): JSX.Element {
  return (
    <section className="card h-[409px] bg-lightGray5 flex flex-col justify-between relative overflow-hidden py-[47px] px-[30px]">
      <Image
        src={props.image}
        alt={props.alt}
        height={props.height}
        width={props.width}
        className="absolute bottom-0 right-[-20px]"
      />
      <p className="testimoialMessage font-thin leading-tight text-clampSub2 text-lightGray6 w-[90%] max-w-[431px]">
        {props.text}
      </p>
      <div className="personInfo flex flex-col gap-3">
        <h3 className="personInfo_name font-bold tracking-[-1px] leading-none text-[28px] text-left w-[50%]">
          {props.firstname} <br /> {props.lastname}
        </h3>
        <h4 className="personInfo_status font-thin text-lightGray6">
          {props.status}
        </h4>
      </div>
    </section>
  );
}

export default TestimonialCards;
