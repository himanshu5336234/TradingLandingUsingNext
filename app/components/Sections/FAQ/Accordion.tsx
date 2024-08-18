"use client";

import React, { useState } from "react";
import Image from "next/image";
import { m, LazyMotion } from "framer-motion";
import Link from "next/link";
import { getImageUrl } from "@/helpers/GetImagesUrl";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  link: string;
  linktext: string;
  subtext: string;
}

interface Props {
  faqData: FAQItem[];
}

const loadFeatures = () =>
  import("../../../framerFeatures").then((response) => response.default);

function Accordion(props: Props): JSX.Element {
  const { faqData } = props;
  const [openSections, setOpenSections] = useState(new Set());

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="accordion px-5 text-[0.75rem] smallScreen:text-[0.875rem] mediumScreen:text-[1rem]">
        {faqData.map(({ id, question, answer, link, linktext, subtext }) => {
          const isExpanded = openSections.has(id);

          return (
            <div className="accordion-item" key={id}>
              <button
                className="flex items-center py-5"
                type="button"
                onClick={() => {
                  const copyOpenSections = new Set(openSections);
                  copyOpenSections.has(id)
                    ? copyOpenSections.delete(id)
                    : copyOpenSections.add(id);

                  setOpenSections(copyOpenSections);
                }}
              >
                <Image
                  src={`${getImageUrl("faqplus.svg")}`}
                  alt="Accordion switch icon"
                  width={15}
                  height={15}
                  className={
                    isExpanded
                      ? "rotate-45 transition-transform ease-in-out duration-300"
                      : "transition-transform ease-in-out duration-300"
                  }
                />
                <span className="text-white/90 font-bold tracking-wide pl-5 text-left">
                  {question}
                </span>
              </button>
              {isExpanded && (
                <m.pre className="text-lightGray3 tracking-wide font-thin pb-5 pr-5 pl-0 text-wrap smallScreen:pl-6 mediumScreen:pl-10">
                  {answer}
                  <Link
                    href={`${link}`}
                    className="text-gradient5"
                    target="_blank"
                  >
                    {linktext}
                  </Link>
                  {subtext}
                </m.pre>
              )}
            </div>
          );
        })}
      </section>
    </LazyMotion>
  );
}

export default Accordion;
