"use client";

import React from "react";
import MetricsParts from "./MetricsParts";

function Metrics() {
  return (
    <article className="maxScreenSize flex justify-center pb-20 px-8 tablet:px-20 desktop:px-25 desktop:pb-25">
      <section className="backdrop-blur-xl border-[1.5px] border-black grid grid-rows-4 grid-cols-1 gap-10 h-auto py-10 rounded-3xl shadow-metricsShadow shadow-metric/40 w-[65%] tablet2:grid-rows-1 tablet2:grid-cols-4 tablet2:h-[10.6875rem] tablet2:w-full tablet2:gap-none tablet2:py-none tablet2:rounded-2xl">
        <MetricsParts metric="0%" text="USDT/INR Conversion Fee" />
        <MetricsParts metric="$500 Mn+" text="30d Volume" />
        <MetricsParts metric="240+" text="Total Tradable Pairs" />
        <MetricsParts metric="15,000+" text="Traders" />
      </section>
    </article>
  );
}

export default Metrics;
