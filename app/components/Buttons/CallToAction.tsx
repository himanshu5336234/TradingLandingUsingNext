"use client";
import React from "react";

declare global {
  interface Window {
    gtag: any;
  }
}

interface Props {
  text: string;
  subtext1: string;
  btnTextStyle: string;
  btnTextColor: string;
  subtext2: string;
  subtext3: string;
  overwriteHeight: string;
  url: string;
}

function CallToAction(props: Props): JSX.Element {
  const {
    text,
    subtext1,
    subtext2,
    subtext3,
    btnTextStyle,
    btnTextColor,
    overwriteHeight,
    url,
  } = props;

  return (
    <button
      id="trade-now"
      className={`bg-gradient-to-r from-gradient1 to-gradient2 from-40% hover:shadow-gradientShadow/80 hover:shadow-buttonActive ${btnTextColor} ${btnTextStyle} max-w-[31.25rem] h-12 min-h-12 ${overwriteHeight} flex flex-col justify-center items-center rounded-lg w-full transition duration-200 ease-in-out hover:ease-in-out font-bold`}
      onClick={() => {
        window.gtag("event", "Trade_Now");
        // window.open("https://url.density.exchange/mWebRedirect");
        window.open(`${url}`);
      }}
    >
      {text}
      <small className="font-thin">
        {subtext1}
        <span className="line-through">{subtext2}</span>
        {subtext3}
      </small>
    </button>
  );
}

export default CallToAction;
