"use client";

import Link from "next/link";
import compXLogo from "@/public/images/CompXLogo.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="navbar-center flex flex-row justify-between items-center algn-middle my-4">
      <Link
        href="/"
        prefetch={false}
        className="flex flex-row gap-1 md:gap-3 items-center text-lg font-bold"
      >
        <Image
          src={compXLogo}
          alt="App Logo"
          //   height={"26"}
          //   width={"30"}
          className="h-10 w-11"
        />
        <h1 className="font-semibold">CompX</h1>
      </Link>
      <ul className="flex flex-row disc justify-center list-none gap-8 md:gap-14 ">
        <li>
          <Link href="/">Pricing</Link>
        </li>
        <li>
          <Link href="/">FAQ</Link>
        </li>
      </ul>
      <Link href="https://tabx.io/auth/login" passHref legacyBehavior>
        <a target="_blank">
          <button className="btn bg-slate-100 btn-sm text-base-100 ml-3 md:ml-6 hover:bg-slate-300">
            Login
          </button>
        </a>
      </Link>
    </div>
  );
};

export default NavBar;
