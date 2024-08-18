import SocialCard from "@/components/SocialCards/SocialCard";
import { getImageUrl } from "@/helpers/GetImagesUrl";
import React from "react";

function CommunityHero() {
  return (
    <article className="community-hero pb-10 w-dvw ">
      <section className="maxScreenSize flex flex-col gap-6 items-center w-full">
        <section className="flex flex-col gap-[1.5rem] items-center pt-[7.5rem] px-8 w-full tablet:pt-[9.375rem] desktop:gap-[2rem] ">
          <h1 className="leading-none tracking-[-0.5px] text-clampHeading3 text-neongreen text-center desktop:tracking-tighest ">
            Density
            <br />
            Community
          </h1>
          <p className="font-thin leading-[1] text-clamp7 text-white text-center">
            India&apos;s most trusted Trading Community
          </p>
        </section>
        <section className="flex flex-col gap-5 items-center justify-center tablet:w-[80%] tablet:flex-row">
          <SocialCard
            src={`${getImageUrl("joinwhatsapp.webp")}`}
            alt="Join Whatsapp"
            text="Join Whatsapp"
            btnTextColor="text-black"
            bgColor="bg-[#4DD998]"
            url="https://chat.whatsapp.com/KrGumdZbPmpKZfZttxBaEm"
          />
          <SocialCard
            src={`${getImageUrl("jointelegram.webp")}`}
            alt="Join Telegram"
            text="Join Telegram"
            btnTextColor="text-white"
            bgColor="bg-[#399AFA]"
            url="https://t.me/DensityExchangeOfficial"
          />
          <SocialCard
            src={`${getImageUrl("community/joindensity.webp")}`}
            alt="Join Density"
            text="Join Density"
            btnTextColor="text-[#582D9F]"
            bgColor="bg-[#DBFF4D]"
            url="https://densityexchange.scenes.social/community-login"
          />
        </section>
      </section>
    </article>
  );
}

export default CommunityHero;
