"use client";

import React, { useState } from "react";
import Image from "next/image";
import CallToAction from "../../Buttons/CallToAction";
import Head from "next/head";
import { m, LazyMotion } from "framer-motion";
import { getImageUrl } from "@/helpers/GetImagesUrl";

const loadFeatures = () =>
  import("../../../framerFeatures").then((response) => response.default);

function Hero() {
  const [scannerOpen, setScannerOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="preload" href="/Images/hero.svg" as="image" />
      </Head>
      <LazyMotion features={loadFeatures} strict>
        <m.article
          animate={{ y: [80, 0] }}
          transition={{ duration: 0.3 }}
          className="hero relative maxScreenSize grid grid-rows-heroLayout gap-[1.6875rem] grid-col-heroLayoutCol h-auto justify-items-center pt-[7.5rem] px-8 w-full tablet:pt-[9.375rem]"
        >
          {scannerOpen && (
            <section
              className="bg-black/50 w-dvw h-dvh absolute inset-0 grid place-items-center"
              onClick={() => setScannerOpen(false)}
            >
              <div className="w-[340px] p-[10px] h-auto bg-black flex flex-col items-center justify-center">
                <Image
                  src={`${getImageUrl("qrcode.svg")}`}
                  alt="QR Code"
                  width={300}
                  height={300}
                />
                <h2 className="text-[2.25rem] text-white text-center leading-tight">
                  Scan to Trade on your Phone
                </h2>
              </div>
            </section>
          )}
          <h1 className="hero-mainText font-[700] leading-none text-white text-clamp1 tracking-[-0.5px] text-center desktop:tracking-tighest desktop:gap-[2.125rem]">
            It&apos;s time to trade, <br /> the{" "}
            <span className="shadow-gradient4 text-gradient4 text-shadow-lg">
              future.
            </span>
          </h1>
          <p className="hero-subText capitalize font-thin leading-tight text-lightGray text-center text-clamp2">
            Trade Bitcoin, Ethereum Futures With 125x Leverage And Earn Rewards.
          </p>
          <section className="hero-CTAs gap-6 hidden tablet:flex">
            <div className="w-[11.25rem]">
              <CallToAction
                text="trade now"
                btnTextStyle="uppercase"
                btnTextColor="text-black"
                subtext1=""
                subtext2=""
                subtext3=""
                overwriteHeight=""
                url="https://url.density.exchange/mWebRedirect"
              />
            </div>
            <div className="w-[11.25rem]">
              <m.button
                whileHover={{
                  scale: 1.03,
                  transition: {
                    ease: "easeInOut",
                  },
                }}
                className={`capitalize bg-downloadBtn border border-white/20 flex justify-center items-center gap-2 font-medium text-white hover:shadow-white/50 hover:shadow-buttonActive w-full h-12 min-h-12 px-2 py-4 rounded-lg`}
                onClick={() => {
                  setScannerOpen(!scannerOpen);
                }}
              >
                <Image
                  src={`${getImageUrl("qrcode.svg")}`}
                  alt="Density mobile app download QR code"
                  className="h-8 w-8"
                  width={100}
                  height={100}
                />
                <span>Download Now</span>
              </m.button>
            </div>
          </section>
          <m.figure
            animate={{ scale: [1.05, 1] }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              ease: "easeIn",
            }}
            whileInView={{ y: 0 }}
            className="hero-image flex h-auto items-center justify-center pt-[2.0625rem] pb-20 w-full desktop:pb-25 desktop:pt-[2.625rem] bg-radialGradient2"
          >
            <Image
              src={`${getImageUrl("hero.png")}`}
              alt="Image of mobile view of our platform"
              width={800}
              height={700}
              className="ios-image"
              blurDataURL={`${getImageUrl("hero.svg")}`}
              placeholder="blur"
              loading="eager"
              priority
            />
            ÷
            {/* <Image
              src='/heroLeft.svg'
              alt="Image of mobile view of our platform"
              width={300}
              height={700}
              className="ios-image"
              blurDataURL={`${getImageUrl("hero.svg")}`}
              placeholder="blur"
              loading="eager"
              priority
            /> */}
            {/* <div className="relative before:bg-[url('https://density-uploads-dev.s3.ap-south-1.amazonaws.com/market-assets/Images/HeroLeft.svg')] before:bg-contain before:bg-no-repeat before:absolute before:z-1 before:left-[-250px] before:top-[6%] before:w-[300px] before:h-[87%] before:bg-center my-auto after:bg-[url('https://density-uploads-dev.s3.ap-south-1.amazonaws.com/market-assets/Images/heroRight.svg')] after:bg-contain after:bg-no-repeat after:absolute after:z-2 after:right-[-270px] after:top-[6%] after:w-[300px] after:h-[87%] after:bg-center">
            <Image
              src='/heroMain.png'
              alt="Image of mobile view of our platform"
              width={400}
              height={800}
              className="ios-image relative z-3"
              blurDataURL={`${getImageUrl("hero.svg")}`}
              placeholder="blur"
              loading="eager"
              priority
            />
            </div> */}
            {/* <Image
              src='/heroRight.svg'
              alt="Image of mobile view of our platform"
              width={300}
              height={700}
              className="ios-image"
              blurDataURL={`${getImageUrl("hero.svg")}`}
              placeholder="blur"
              loading="eager"
              priority
            /> */}
          </m.figure>
        </m.article>
      </LazyMotion>
    </>
  );
}

export default Hero;
