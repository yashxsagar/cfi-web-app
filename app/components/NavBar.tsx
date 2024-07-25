"use client";

import Link from "next/link";
import compXLogo from "@/public/images/CompXLogo.png";
import Image from "next/image";
import { UserPayload } from "../utils/jwt";
import LogoutIcon from "./LogoutIcon";

interface NavBarProps {
  user: UserPayload | null;
}

const NavBar = ({ user }: NavBarProps) => {
  console.log(user);
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
          <Link href="/#pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/#faq">FAQ</Link>
        </li>
      </ul>
      {!user ? (
        <Link href="https://tabx.io/auth/login" passHref legacyBehavior>
          <a target="_blank">
            <button className="btn bg-slate-100 btn-sm text-base-100 ml-3 md:ml-6 hover:bg-slate-300">
              Login
            </button>
          </a>
        </Link>
      ) : (
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end ml-3 md:ml-6">
          <div className="avatar placeholder online">
            <div className="bg-base-100 border-accent-content border-2 text-base-content font-extrabold w-12 rounded-full">
              <span>{user.username[0]}</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box border-base-content border-2 z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>{user.username}</a>
            </li>
            <li>
              <a>{user.email}</a>
            </li>
            <li>
              <button className="btn-ghost">
                <div className="flex flex-row gap-2 items-center align-middle">
                  Logout <LogoutIcon />
                </div>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
