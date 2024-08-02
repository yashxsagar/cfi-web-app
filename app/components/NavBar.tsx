"use client";

import Link from "next/link";
import compXLogo from "@/public/images/CompXLogo.png";
import Image from "next/image";
import { UserPayload } from "../utils/jwt";
import LogoutIcon from "./LogoutIcon";
import { useState } from "react";
// import { handleLogout } from "../utils/logout";
import LogoutIconModal from "./LogoutIconModal";
import handleLogin from "../utils/handleLogin";
import { useClientContext } from "../context/ClientStateContext";
import LoadingSpinner from "./LoadingSpinner";
import LogoutButton from "./LogoutButton";
import GoIcon from "./GoIcon";

interface NavBarProps {
  user: UserPayload | null;
}

const NavBar = ({ user }: NavBarProps) => {
  console.log(user);
  const { logging, setLogging } = useClientContext();
  const [isModalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
        <div
          className={`dropdown ${
            dropdownOpen ? "dropdown-open" : ""
          } dropdown-hover dropdown-bottom dropdown-end ml-3 md:ml-6`}
        >
          <div
            tabIndex={0}
            className="avatar placeholder online"
            onTouchStart={() => {
              setDropdownOpen(!dropdownOpen);
            }}
            onTouchEnd={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="bg-base-100 border-accent-content border-2 text-base-content font-extrabold w-12 rounded-full">
              <span>{user.username[0]}</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box border-base-content border-2 z-[1] w-52 py-2 pl-2 pr-0 shadow"
          >
            <li>
              <a>{user.username}</a>
            </li>
            <li>
              <a>{user.email}</a>
            </li>
            <li>
              <a>
                <div
                  className="flex flex-row gap-2 items-center align-middle"
                  onClick={() => handleLogin({ setLogging })}
                >
                  <p>CompX Notion Table</p>
                  {(logging && <LoadingSpinner size={4} />) || <GoIcon />}
                </div>
              </a>
            </li>
            <li>
              <button className="btn-ghost" onClick={() => setModalOpen(true)}>
                <div className="flex flex-row gap-2 items-center align-middle">
                  Logout <LogoutIcon />
                </div>
              </button>
            </li>
          </ul>
        </div>
      )}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm Logout</h3>
            <p className="py-4">Are you sure you want to logout?</p>
            <div className="modal-action gap-4">
              {/* <button
                className="btn btn-error"
                onClick={() => {
                  setModalOpen(false);
                  handleLogout();
                }}
              > */}
              <LogoutButton setModalOpen={setModalOpen}>
                Logout <LogoutIconModal />
              </LogoutButton>
              {/* </button> */}
              <button
                className="btn btn-primary"
                onClick={() => setModalOpen(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
