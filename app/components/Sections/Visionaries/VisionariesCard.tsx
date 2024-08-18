import React from "react";
import Image from "next/image";
import { getImageUrl } from "@/helpers/GetImagesUrl";
import Link from "next/link";

interface Props {
  image: string;
  alt: string;
  firstName: string;
  lastName: string;
  status: string;
  url: string;
}

function VisionariesCard(props: Props): JSX.Element {
  return (
    <section className="card h-[22.5rem] bg-darkGray w-[15.625rem] before:bg-[url('https://density-uploads-dev.s3.ap-south-1.amazonaws.com/market-assets/Images/texture.svg')] flex flex-col justify-between py-[1.875rem] px-[1.875rem] overflow-hidden smallScreen:w-[20.1875rem]">
      <Image
        src={props.image}
        alt={props.alt}
        height={200}
        width={200}
        className="absolute bottom-0 right-0"
      />
      <div className="info flex flex-col gap-3 relative z-1">
        <h3 className="name font-bold leading-none text-[2rem] text-white text-left">
          {props.firstName}
          <br />
          {props.lastName}
        </h3>
        <p className="status font-thin text-lightGray7">{props.status}</p>
      </div>
      <Link href={props.url} target="_blank">
        <Image
          src={`${getImageUrl("linkedin.svg")}`}
          alt="LinkedIn Icon"
          className="relative z-1"
          width={30}
          height={30}
        />
      </Link>
    </section>
  );
}

export default VisionariesCard;
