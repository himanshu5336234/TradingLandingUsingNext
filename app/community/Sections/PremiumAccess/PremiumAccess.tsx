import CallToAction from "@/components/Buttons/CallToAction";
import { getImageUrl } from "@/helpers/GetImagesUrl";
import Image from "next/image";
import React from "react";

function PremiumAccess() {
  return (
    <article className="bg-community2 w-dvw p-10 pb-[6.25rem] tablet:py-[6.25rem] tablet:px-[7.5rem]">
      <section className="maxScreenSize flex flex-col items-center justify-center gap-10 tablet:flex-row">
        <Image
          src={`${getImageUrl("community/premiummember.webp")}`}
          alt="Premium Access"
          width={500}
          height={500}
        />
        <section className="text-white">
          <h2 className="hidden text-clampHeading4 leading-none pb-4 capitalize tablet:block">
            Instant access to our <br />
            premium <br />
            trading guides
          </h2>
          <p className="font-thin text-[2.25rem] text-center leading-tight tablet:text-[1.5rem] tablet:text-left">
            Join the Density Community & <br />
            <span className="text-neongreen tablet:text-white">
              Grab it for free
            </span>
          </p>
          <div className="pt-8">
            <CallToAction
              text="Get Free e-book"
              btnTextColor="text-[#582D9F]"
              btnTextStyle=""
              subtext1=""
              subtext2=""
              subtext3=""
              overwriteHeight=""
              url="https://t.me/DensityExchangeOfficial"
            />
          </div>
        </section>
      </section>
    </article>
  );
}

export default PremiumAccess;
