"use client";

import { FacebookIcon, InstagramIcon, Menu, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    logo: <InstagramIcon />,
    link: "/",
  },
  {
    logo: <FacebookIcon />,
    link: "/",
  },
  {
    logo: <TwitterIcon />,
    link: "/",
  },
];

const MobileNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ borderBottom: "none", boxShadow: "none" }}
      animate={
        isScrolled
          ? {
              borderBottom: "1px solid #e5e5e5",
              boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
            }
          : {}
      }
      transition={{ duration: 0.3 }}
      className="flex lg:hidden justify-between items-center w-full p-8"
    >
      <Link href="/">
        <h1 className="text-4xl text-green-950 font-sugiyama">Dietitian</h1>
      </Link>
      <div className="flex items-center gap-x-3">
        <button>
          <Link
            href="/blog"
            className="px-4 py-1.5 bg-green-950 rounded-md shadow text-base text-neutral-200 font-argesta"
          >
            Blog
          </Link>
        </button>
        <MobileMenu />
      </div>
    </motion.div>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Menu
            className="w-6 h-6 stroke-2 text-green-950"
            onClick={() => setIsOpen(true)}
          />
        </SheetTrigger>
        <SheetContent
          side="top"
          className="bg-white flex text-center flex-col justify-center items-center w-full h-[100%] text-green-950 font-argesta lg:gap-y-16 gap-y-10"
        >
          <Link href="#about" onClick={closeSheet}>
            <h1 className="text-2xl uppercase font-semibold">About</h1>
          </Link>
          <Link href="#contact" onClick={closeSheet}>
            <h1 className="text-2xl uppercase font-semibold">Contact</h1>
          </Link>
          <Link href="#faq" onClick={closeSheet}>
            <h1 className="text-2xl uppercase font-semibold">faq</h1>
          </Link>
          <button className="w-full text-2xl font-medium py-4 bg-green-900 text-neutral-200 mt-6 rounded-xl hover:bg-background uppercase hover:text-black hover:border-2 hover:border-green-950 duration-300">
            <Link href="#blog" onClick={closeSheet}>
              Blog
            </Link>
          </button>
          <div>
            <ul className="flex justify-center items-center gap-x-14 mt-10">
              {socialLinks.map((social, idx) => (
                <li
                  key={idx}
                  className="hover:text-neutral-200 text-green-950 p-2 hover:bg-green-950 rounded-[100%] transition"
                >
                  <Link href={social.link} className="w-2 h-2">
                    {social.logo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavbar;
