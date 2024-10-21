"use client";

import { motion } from "framer-motion";
import {
  FacebookIcon,
  InstagramIcon,
  SearchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LowerNavbarProps {
  name: string;
  hyper: string;
}

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

const searchContents = [
  {
    name: "about",
    hyper: "#about",
  },
  {
    name: "contact",
    hyper: "#contact",
  },
  {
    name: "faq",
    hyper: "#faq",
  },
  {
    name: "blog",
    hyper: "#blog",
  },
];

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100;
      setIsSticky(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:flex md:flex hidden justify-center items-center flex-col gap-y-0 w-full">
      <nav className="flex justify-between items-center w-full bg-white text-black lg:px-16 lg:py-10">
        <div>
          <ul className="flex justify-center items-center lg:gap-x-3">
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
        <Link href="/">
          <h1 className="font-sugiyama font-thin text-green-950 lg:text-6xl">
            Dietitian
          </h1>
        </Link>
        <div className="max-w-[200px] flex items-center gap-x-0">
          <input
            type="text"
            placeholder="Search..."
            className="
    p-2 bg-transparent outline-none
    border-0 border-b border-green-950 focus:border-b-2 focus:border-green-950 
    placeholder-gray-400 font-argesta
    focus:ring-0 text-black
  "
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <SearchIcon className="stroke-[1.5] text-green-950" />
          </button>
        </div>
      </nav>
      <motion.div
        className={`flex justify-center items-center lg:gap-x-20 w-full bg-white text-black p-2.5 ${
          isSticky ? "fixed top-0 z-50 border-b shadow-md" : ""
        }`}
        initial={{ opacity: 1 }}
        animate={{ opacity: isSticky ? 1 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {searchContents
          .filter((content) => {
            return search.toLowerCase() === ""
              ? content
              : content.name.toLowerCase().includes(search);
          })
          .map((content, idx) => (
            <div key={idx}>
              <LowerNavbar name={content.name} hyper={content.hyper} />
            </div>
          ))}
      </motion.div>
    </div>
  );
};

const LowerNavbar = ({ name, hyper }: LowerNavbarProps) => {
  return (
    <Link href={hyper}>
      <h1 className="uppercase font-argesta transition hover:underline underline-offset-2">
        {name}
      </h1>
    </Link>
  );
};

export default Navbar;
