"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAnimation, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FAQHome = () => {
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

  const accordianVariant = {
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
      className="relative w-full h-screen flex justify-center items-center flex-col gap-y-6 text-green-950 lg:p-16 mt-10"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={bgVariant}
        style={{ backgroundImage: "url('/images/food-bg-1.jpg')" }}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 
                       opacity-50 lg:backdrop-blur-sm backdrop-blur-md"
      />

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="lg:w-[80%] w-[88%] flex justify-center items-center flex-col gap-y-10">
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={headingVariant}
            className="font-unbounded font-semibold text-2xl lg:text-4xl text-center"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={accordianVariant}
          >
            <AccordianForFaq />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const AccordianForFaq = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger> Are all sessions virtual?</AccordionTrigger>
        <AccordionContent>
          No but at this time, all sessions are virtual.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do you accept insurance?</AccordionTrigger>
        <AccordionContent>
          Yes. It is your responsibility to determine if your insurance will
          reimburse you for nutrition services.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
        <AccordionContent>
          If you need to cancel or reschedule, please notify me at least 24
          hours in advance of your appointment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Difference between dietitian and nutritionist?
        </AccordionTrigger>
        <AccordionContent>
          Great question. I wrote a blog post about it. You can read about it
          <Link href="/blog" className="underline ml-1">
            here
          </Link>
          .
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQHome;
