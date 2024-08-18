"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import { usePathname } from "next/navigation";
import { getImageUrl } from "@/helpers/GetImagesUrl";

interface Props {
  totalPages: number;
  type: string;
}

function BlogNav(props: Props) {
  const {  type } = props;

  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header
      className={[
        "relative flex flex-col items-center gap-5 mt-4 desktop1:grid tablet1:grid-cols-blogsNav place-items-center gap-x-[1.5rem] h-auto tablet1:h-[100px] w-[90%] mx-auto maxScreenSize",
        pathname.substring("/blogs/".length).length !== 0 &&
          "tablet1:!grid-cols-blogsNav1",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="w-full flex justify-between items-center">
        <Link href="/blogs">
          <Image
            src={`${getImageUrl("blogsDensitylogo.png")}`}
            alt="Density logo"
            width={150}
            height={150}
            className="w-[100px] tablet:w-[150px]"
          />
        </Link>
        <Image
          src={mobileNavOpen ? `${getImageUrl("blogBurgerMenuOpen.svg")}` : `${getImageUrl("blogBurgerMenuClose.svg")}`}
          alt="burger menu"
          width={25}
          height={25}
          className="desktop1:hidden"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        />
      </div>
      <nav className="hidden desktop1:flex relative items-center justify-start gap-[2rem] w-full uppercase font-[600] text-[0.75rem] tracking-wider">
        <ul className="flex items-center justify-start tablet1:gap-[1rem] desktop:gap-[1.5rem]">
          <li className="blogsli">
            <Link href="/tag/futures-trading">Futures Trading</Link>
          </li>
          <li className="blogsli">
            <Link href="/tag/faq">FAQ</Link>
          </li>
          <li className="blogsli">
            <Link href="/tag/market-analysis">Market Analysis</Link>
          </li>
          <li className="blogsli hidden tablet2:block">
            <Link href="/tag/technical-guide">Technical Guide</Link>
          </li>
          <li className="blogsli hidden tablet3:block">
            <Link
              href="https://app.density.exchange/auth/signup"
              target="_blank"
            >
              Start Trading
            </Link>
          </li>
          <li className="blogsli hidden desktop2:block">
            <Link href="/tag/crypto-news">Crypto News</Link>
          </li>
          <button
            className="pointer w-8"
            onClick={() => setMoreOpen(!moreOpen)}
          >
            <Image
              src={`${getImageUrl("threedots.png")}`}
              alt="navbardots"
              width={20}
              height={20}
              className="hidden tablet:block"
            />
          </button>
        </ul>
      </nav>
      {moreOpen && (
        <nav className="moreContainer hidden tablet1:block">
          <li className="blogsli py-[6px] px-5 tablet2:hidden">
            <Link href="/tag/technical-guide">Technical Guide</Link>
          </li>
          <li className="blogsli py-[6px] px-5 tablet3:hidden">
            <Link
              href="https://app.density.exchange/auth/signup"
              target="_blank"
            >
              Start Trading
            </Link>
          </li>
          <li className="blogsli py-[6px] px-5 desktop2:hidden">
            <Link href="/tag/crypto-news">Crypto News</Link>
          </li>
          <li className="blogsli py-[6px] px-5">
            <Link href="/tag/beginner-academy">Beginner Tutorial</Link>
          </li>
          <li className="blogsli py-[6px] px-5">
            <Link href="/blogs">All</Link>
          </li>
        </nav>
      )}

      {type === "blog" && pathname.substring("/blogs/".length).length === 0 && (
        <SearchInput />
      )}

      {/* Mobile Nav */}
      {mobileNavOpen && (
        <nav className="desktop1:hidden absolute top-[40px] h-dvh w-dvw bg-white z-10">
          <ul className="flex flex-col items-center justify-start gap-[2rem] pt-20">
            <li className="blogsli">
              <Link href="tag/futures-trading">Futures Trading</Link>
            </li>
            <li className="blogsli">
              <Link href="tag/faq">FAQ</Link>
            </li>
            <li className="blogsli">
              <Link href="tag/market-analysis">Market Analysis</Link>
            </li>
            <li className="blogsli">
              <Link href="tag/technical-guide">Technical Guide</Link>
            </li>
            <li className="blogsli">
              <Link
                href="https://app.density.exchange/auth/signup"
                target="_blank"
              >
                Start Trading
              </Link>
            </li>
            <li className="blogsli">
              <Link href="tag/crypto-news">Crypto News</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default BlogNav;
