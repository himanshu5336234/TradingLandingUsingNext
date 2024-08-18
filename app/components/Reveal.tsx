import React, { useEffect, useRef } from "react";
import { m, LazyMotion, useInView, useAnimation } from "framer-motion";

const loadFeatures = () =>
  import("../framerFeatures").then((response) => response.default);

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variant1 = {
    hidden: {
      scale: 0.8,
      y: 75,
    },
    visible: {
      scale: 1.05,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <LazyMotion features={loadFeatures} strict>
      <div ref={ref} className="reveal relative overflow-hidden">
        <m.div variants={variant1} initial="hidden" animate={mainControls}>
          {children}
        </m.div>
      </div>
    </LazyMotion>
  );
}

export default Reveal;
