import React from "react";
import TradingJourneyContent from "./TradingJourneyContent";

function TradingJourneyPage() {
  return (
    <article className="maxScreenSize py-[4.75rem] tablet:py-[8.75rem] flex flex-col gap-16 items-center">
      <div className="flex flex-col gap-4 items-center w-[90%]">
        <h2 className="heading">
          Crypto Futures <br />
          made <span className="text-gradient5">Simple.</span>
        </h2>
        <p className="subtext">Start your trading journey in 3 easy steps</p>
      </div>
      <TradingJourneyContent />
    </article>
  );
}

export default TradingJourneyPage;
