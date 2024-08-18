import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  status: string;
  width: number;
  height: number;
}

function Investors(props: Props): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src={props.image}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-white text-center text-clamp5">
          {props.alt}
        </h3>
        <p className="font-thin text-lightGray4 text-center text-clampSub1">
          {props.status}
        </p>
      </div>
    </div>
  );
}

export default Investors;
