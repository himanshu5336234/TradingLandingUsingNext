"use client";

import React, { useState } from "react";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import NavMenu from "./NavMenu";
import { m, LazyMotion } from "framer-motion";
import Link from "next/link";
import { getImageUrl } from "@/helpers/GetImagesUrl";

const loadFeatures = () =>
  import("../../framerFeatures").then((response) => response.default);

interface Props {
  bgColor: string;
  text: string;
  btnTextStyle: string;
  btnTextColor: string;
  url: string;
}

function Navbar(props: Props): JSX.Element {
  const { bgColor, text, btnTextStyle, btnTextColor, url } = props;
  const [open, setOpen] = useState(false);

  return (
    <LazyMotion features={loadFeatures} strict>
      <m.div
        initial={false}
        animate={{
          height: open ? 342 : 72,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 60,
          mass: 1,
          duration: 1.5,
        }}
        className={`header backdrop-blur-lg border border-white/10 ${bgColor} fixed h-[4.5rem] left-0 px-10 py-5 top-0 w-dvw z-[100] desktop:min-h-[5.5rem] desktop:px-[7.5rem] desktop:py-5 desktop:mb-[4.375rem]`}
      >
        <header
          className={[
            "maxScreenSize flex flex-col gap-[2.125rem] h-full desktop:flex-row desktop:justify-between desktop:items-center",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="flex items-center justify-between">
            <Link className="navbar_logo" href={"/"}>
              <Image
                src={`${getImageUrl("densitylogo.svg")}`}
                alt="Density logo"
                height={28}
                width={100}
                className="desktop:h-[2rem] w-auto object-cover"
                priority
              />
            </Link>
            <BurgerMenu open={open} setOpen={setOpen} />
          </div>
          {open && (
            <div className="desktop:hidden">
              <NavMenu
                text={text}
                btnTextStyle={btnTextStyle}
                btnTextColor={btnTextColor}
                url={url}
              />
            </div>
          )}
          <div className="hidden desktop:block">
            <NavMenu
              text={text}
              btnTextStyle={btnTextStyle}
              btnTextColor={btnTextColor}
              url={url}
            />
          </div>
        </header>
      </m.div>
    </LazyMotion>
  );
}

export default Navbar;
