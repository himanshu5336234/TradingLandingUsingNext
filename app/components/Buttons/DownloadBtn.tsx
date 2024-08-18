"use client";

import React from "react";
import Image from "next/image";
import { m, LazyMotion } from "framer-motion";
import { getImageUrl } from "@/helpers/GetImagesUrl";

const loadFeatures = () =>
  import("../../framerFeatures").then((response) => response.default);

interface Props {
  text: string;
  btnTextStyle: string;
  bgColor: string;
  overwriteHeight: string;
  hideImage: string;
  border: string;
  url: string;
}

function DownloadBtn(props: Props): JSX.Element {
  const {
    text,
    btnTextStyle,
    bgColor,
    overwriteHeight,
    hideImage,
    border,
    url,
  } = props;
  return (
    <LazyMotion features={loadFeatures} strict>
      <m.button
        whileHover={{
          scale: 1.03,
          transition: {
            ease: "easeInOut",
          },
        }}
        className={`capitalize ${btnTextStyle} bg-downloadBtn ${bgColor} border border-white/20 ${border} flex justify-center items-center gap-2 font-medium text-white hover:shadow-white/50 hover:shadow-buttonActive w-full h-12 min-h-12 ${overwriteHeight} px-2 py-4 rounded-lg`}
        onClick={() => {
          window.open(`${url}`);
          // setScannerOpen(!scannerOpen)
        }}
      >
        <Image
          src={`${getImageUrl("qrcode.svg")}`}
          alt="Density mobile app download QR code"
          className={`h-8 w-8 ${hideImage}`}
          width={100}
          height={100}
        />
        <span>{text}</span>
      </m.button>
    </LazyMotion>
  );
}

export default DownloadBtn;
