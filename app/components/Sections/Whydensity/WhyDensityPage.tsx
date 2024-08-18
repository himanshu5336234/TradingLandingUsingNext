import React from "react";
import Image from "next/image";
import WhyDensityContent from "./WhyDensityContent";
import { getImageUrl } from "@/helpers/GetImagesUrl";

function WhyDensityPage() {
  return (
    <article className="whydensityPage maxScreenSize flex flex-col gap-10 pt-40">
      <section className="flex flex-col gap-6 items-center mx-auto w-[60%] mb-10 tablet:mb-0">
        <Image
          src={`${getImageUrl("whydensity.svg")}`}
          alt="Why Density Image"
          width={156}
          height={127}
        />
        <div className="flex flex-col gap-4 items-center">
          <h2 className="heading">Why Density?</h2>
          <p className="subtext">
            Empower your trading strategy with access to cutting-edge technology
            and advanced trading tools.
          </p>
        </div>
      </section>
      <WhyDensityContent />
    </article>
  );
}

export default WhyDensityPage;
