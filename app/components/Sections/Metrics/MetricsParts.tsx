import React from "react";

interface Props {
  metric: string;
  text: string;
}

function MetricsParts(props: Props): JSX.Element {
  return (
    <section className="metricsPart bg-red flex flex-col items-center justify-center relative after:absolute after:top-0 after:right-0 after:w-[0.9px] after:h-full after:shadow-metricShadow2 after:shadow-black after:bg-gradient-to-b after:from-black after:from-20% after:via-metric/40 after:to-90% after:to-black after:hidden tablet:after:block">
      <h2 className="bg-clip-text bg-gradient-to-b from-gradient1 from-40% to-gradient2 font-bold text-transparent text-clamp3 text-center">
        {props.metric}
      </h2>
      <p className="font-thin text-clamp4 text-lightGray2 text-center">
        {props.text}
      </p>
    </section>
  );
}

export default MetricsParts;
