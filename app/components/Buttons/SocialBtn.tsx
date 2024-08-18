"use client";

import React from "react";

interface Props {
  text: string;
  btnTextColor: string;
  bgColor: string;
  url: string;
}

function SocialBtn(props: Props): JSX.Element {
  const { text, btnTextColor, bgColor, url } = props;

  return (
    <button
      id="social-button"
      className={`${bgColor} capitalize ${btnTextColor} max-w-[31.25rem] h-12 min-h-12 flex justify-center items-center rounded-lg w-full transition duration-200 ease-in-out hover:ease-in-out font-bold`}
      onClick={() => {
        window.open(`${url}`);
      }}
    >
      {text}
    </button>
  );
}

export default SocialBtn;
