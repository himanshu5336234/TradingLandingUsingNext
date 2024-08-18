import React from "react";

function page() {
  return (
    <main className="bg-black w-dvw py-[140px] px-10 text-white tablet:px-20">
      <section className="maxScreenSize flex flex-col gap-10">
        <h1 className="font-bold text-[3rem] mb-6">Research Disclaimer</h1>
        <ol className="feesSection info list-decimal ml-5">
          <li className="!text-lightGray2">
            This document is intended exclusively for the personal information
            of the designated recipient(s).
          </li>
          <li className="!text-lightGray2">
            Disclaimer: Crypto products and NFTs are unregulated and can be
            highly risky. There may be no regulatory recourse for any loss from
            such transactions. Each investor/trader must do his/her own research
            or seek independent advice if necessary before initiating any
            transactions in crypto products and NFTs. Density Exchange shall not
            be held liable for any acts or omissions, or losses incurred by the
            investors/Traders.{" "}
          </li>
          <li className="!text-lightGray2">
            The information contained here in is sourced from publicly available
            data that is believed to be reliable.{" "}
          </li>
          <li className="!text-lightGray2">
            While diligent efforts have been made to ensure the accuracy of
            current and historical data, Density Exchange offers no guarantee of
            accuracy or completeness.{" "}
          </li>
          <li className="!text-lightGray2">
            Neither Density Exchange nor any affiliated individuals, including
            directors, subsidiaries, associates, or employees, bear
            responsibility for losses or damages resulting from inadvertent
            errors within this document&apos;s information, views, or opinions.{" "}
          </li>
          <li className="!text-lightGray2">
            The document incorporates analyses and view points from our research
            team.{" "}
          </li>
          <li className="!text-lightGray2">
            This document is purely informative and does not constitute trading
            advice, recommendations, or a solicitation to buy/sell any contract.{" "}
          </li>
          <li className="!text-lightGray2">
            The opinions expressed in this document reflect our current
            viewpoints as of the document&apos;s date and are subject to change
            without notice.{" "}
          </li>
          <li className="!text-lightGray2">
            Density Exchange and its affiliates disclaim any liability arising
            from the document&apos;s utilization.{" "}
          </li>
          <li className="!text-lightGray2">
            Traders are advised not to solely rely on this document&apos;s
            information and must base trading decisions on personal trading
            objectives, judgement, risk tolerance, and financial status.{" "}
          </li>
          <li className="!text-lightGray2">
            Recipients of this document are encouraged to seek professional
            advice before acting upon its contents.{" "}
          </li>
          <li className="!text-lightGray2">
            Past performance does not guarantee future performance, and no
            express or implied representations or warranties are made regarding
            future performance.{" "}
          </li>
          <li className="!text-lightGray2">
            Information, opinions, and estimates in this document are reflective
            of Density Exchange&apos;s judgement as of the original publication
            date and may change without notice.
          </li>
          <li className="!text-lightGray2">
            The value, price, and income associated with contracts mentioned in
            this document can fluctuate, and such contracts are subject to
            exchange rate variations that may affect prices or income positively
            or adversely.
          </li>
          <li className="!text-lightGray2">
            The Research Analyst(s) responsible for this document&apos;s
            preparation, or their relatives, do not possess financial interests
            in the mentioned contracts and do not hold any other substantial
            conflicts of interest during the research document&apos;s
            publication.
          </li>
        </ol>
      </section>
    </main>
  );
}

export default page;
