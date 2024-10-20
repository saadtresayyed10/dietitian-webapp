"use client";

import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface LowerNavbarProps {
  name: string;
  hyper: string;
  idx: number;
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
  return (
    <div className="flex justify-center items-center flex-col gap-y-0 w-full">
      <nav className="flex justify-between items-center w-full bg-white text-black border lg:px-16 lg:py-10">
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
          <h1 className="font-argesta lg:text-6xl">Dietitian</h1>
        </Link>
        <input
          type="text"
          placeholder="SEARCH"
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>
      <div className="border flex justify-center items-center lg:gap-x-20 w-full bg-white text-black p-2.5">
        {searchContents
          .filter((content) => {
            return search.toLowerCase() === ""
              ? content
              : content.name.toLowerCase().includes(search);
          })
          .map((content, idx) => (
            <LowerNavbar idx={idx} name={content.name} hyper={content.hyper} />
          ))}
      </div>
    </div>
  );
};

const LowerNavbar = ({ name, hyper, idx }: LowerNavbarProps) => {
  return (
    <div key={idx}>
      <Link href={hyper}>
        <h1 className="uppercase">{name}</h1>
      </Link>
    </div>
  );
};

export default Navbar;
