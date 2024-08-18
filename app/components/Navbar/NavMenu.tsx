import React from "react";
import CallToAction from "../Buttons/CallToAction";
import Link from "next/link";

interface Props {
  text: string;
  btnTextStyle: string;
  btnTextColor: string;
  url: string;
}

function NavMenu(props: Props): JSX.Element {
  const { text, btnTextStyle, btnTextColor, url } = props;

  return (
    <nav className="navMenu first-letter:h-auto text-sm text-white w-full desktop:relative desktop:inset-0 desktop:w-auto desktop:flex desktop:items-center desktop:gap-[2.125rem] desktop:py-0">
      <ul className=" flex flex-col gap-[2.125rem] text-sm desktop:flex-row desktop:opacity-100">
        <li>
          <Link href={"/community"}>Community</Link>
        </li>
        <li>
          <Link href={"/academy"}>Academy</Link>
        </li>
        <li>
          <Link
            href={"/blogs"}
            target="_blank"
            // onClick={() => {
            //   window.open("https://blogs.density.exchange/");
            // }}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            onClick={() => {
              window.open(
                "https://app.density.exchange/leaderboard?_gl=1*1m9ja0k*_ga*MTEwMTEyMTQ2Ni4xNzA0MjY1MjE1*_ga_8P8CR90ZHF*MTcwNjM0Njk1MS42NC4xLjE3MDYzNDcwODIuMi4wLjA."
              );
            }}
          >
            Leaderboard
          </Link>
        </li>
        <li>
          <Link href={"/fee-structure"}>Fees</Link>
        </li>
      </ul>
      <div className="navMenu_CTA hidden desktop:block w-[10.187rem]">
        <CallToAction
          text={text}
          btnTextStyle={btnTextStyle}
          btnTextColor={btnTextColor}
          subtext1=""
          subtext2=""
          subtext3=""
          overwriteHeight=""
          url={url}
        />
      </div>
    </nav>
  );
}

export default NavMenu;
