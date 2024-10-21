"use client";

import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const gridContents = [
  {
    title: "Frequent dieting",
    description:
      "is associated with body dissatisfaction, depression, lower self-esteem, and increases in binges and cravings?",
  },
  {
    title: "Weight cycling",
    description:
      "has been linked to type 2 diabetes, high blood pressure, cancer, and bone fracture?",
  },
  {
    title: "Yo-Yo dieters",
    description:
      "who continually regain lost weight tend to regain weight in the abdominal area.",
  },
];

const DidYouKnow = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const headingVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "backOut", delay: 1 },
    },
  };

  const gridVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "backOut", delay: 1.2 },
    },
  };
  return (
    <div
      ref={ref}
      className="w-full flex justify-center items-center flex-col lg:gap-y-16 gap-y-10 bg-white text-green-950 mt-10"
    >
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={headingVariant}
        className="font-unbounded lg:text-4xl text-3xl font-semibold capitalize"
      >
        Did You Know?
      </motion.h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:w-[80%] w-[60%] text-center lg:gap-[80px] gap-y-10">
        {gridContents.map((content, idx) => (
          <motion.div
            initial="hidden"
            animate={controls}
            variants={gridVariant}
            key={idx}
            className="flex justify-center items-center flex-col gap-y-3 p-6 border shadow-md rounded-lg"
          >
            <h3 className="font-argesta font-bold lg:text-2xl text-xl uppercase">
              {content.title}
            </h3>
            <p className="font-argesta font-light lg:text-base text-sm">
              {content.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DidYouKnow;
