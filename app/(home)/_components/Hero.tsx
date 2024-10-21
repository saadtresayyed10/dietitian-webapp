import TypingAnimation from "@/components/ui/typing-animation";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col text-green-950 bg-white lg:gap-y-10 gap-y-8 w-full">
      <div className="flex justify-center items-center">
        <Image src="/images/hero1.png" alt="Logo" width={200} height={200} />
      </div>
      <div className="flex justify-center items-center flex-col lg:w-[80%] w-[90%] gap-y-6 text-center">
        <h1 className="font-unbounded lg:text-6xl text-3xl font-semibold uppercase">
          Saad Sayyed
        </h1>
        <div>
          <TypingAnimation
            className="font-argesta lg:text-xl text-base font-light"
            text="I help men and women who struggle with chronic dieting, disordered
          eating, and body image concerns make peace with food and their bodies."
            duration={50}
          />
        </div>
        <Link href="/">
          <button className="flex items-center lg:gap-x-2 hover:lg:gap-x-3 px-6 py-2 bg-green-950 text-neutral-200 transition hover:text-green-950 hover:bg-background border-2 border-green-950 rounded-md shadow-md">
            Learn How <ArrowUpRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
