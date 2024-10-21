"use client";

import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const BodyStress = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const bgVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
    },
  };

  const headingVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "backOut", delay: 1 },
    },
  };

  const paragVariant = {
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
      className="relative w-full h-screen flex justify-center items-center flex-col gap-y-6 text-green-950 text-center lg:p-16 mt-10"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={bgVariant}
        style={{ backgroundImage: "url('/images/food-bg-0.jpg')" }}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 
                     opacity-50 lg:backdrop-blur-sm backdrop-blur-md"
      />

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="lg:w-[60%] w-[80%] flex justify-center items-center flex-col gap-y-6">
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={headingVariant}
            className="font-unbounded font-semibold text-2xl lg:text-4xl"
          >
            Being constantly preoccupied with how your body looks is stressful.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={paragVariant}
            className="font-argesta lg:text-lg text-sm font-medium"
          >
            Have you devoted your entire life to weight loss? Does everything
            you do revolve around how your body looks? Food is just one of many
            factors that contribute to your well-being. Unfortunately,
            you&apos;ve probably been led to believe that the constant pursuit
            of weight loss is the cure-all for most health concerns. But this is
            far from the truth. The truth is that your weight loss efforts could
            be causing more harm than good.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default BodyStress;
