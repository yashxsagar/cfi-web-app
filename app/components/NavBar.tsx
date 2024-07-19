"use client";

import Link from "next/link";
import tabXProLogo from "@/public/images/tabXProLogo.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="navbar-center flex flex-row justify-between items-center algn-middle my-4">
      <Link
        href="/"
        prefetch={false}
        className="flex flex-row gap-3 text-lg font-bold"
      >
        <Image
          src={tabXProLogo}
          alt="App Logo"
          //   height={"26"}
          //   width={"30"}
          className="h-7 w-8"
        />
        <h1 className="font-semibold">TabX</h1>
      </Link>
      <ul className="flex flex-row disc list-none gap-14">
        <li>
          <Link href="/">Pricing</Link>
        </li>
        <li>
          <Link href="/">FAQ</Link>
        </li>
      </ul>
      <button className="btn bg-slate-100 btn-sm text-base-100 hover:bg-slate-300">
        Login
      </button>
    </div>
  );
};

export default NavBar;
