import React from "react";
import Accordion from "./Accordion";

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

function Faq(props: Props): JSX.Element {
  const { faqData } = props;
  return (
    <article className="w-dvw bg-black faq py-[6.25rem] px-10">
      <section className="maxScreenSize flex flex-col gap-[3.75rem]">
        <h2 className="heading">Frequently Asked Questions.</h2>
        <div className="accordian-container bg-darkGray4 w-full mx-auto h-auto rounded-lg">
          <Accordion faqData={faqData} />
        </div>
      </section>
    </article>
  );
}

export default Faq;
