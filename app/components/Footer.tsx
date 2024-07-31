import Image from "next/image";
import Link from "next/link";
import React from "react";
import compXLogo from "@/public/images/CompXLogo.png";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-primary-content/30">
      <div className="max-w-4xl mx-auto px-0 py-24">
        <div className="flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col align-middle items-center">
          <div className="w-80 max-w-full flex-shrink-0 align-middle md:ml-10 lg:mx-0 mx-auto text-center md:text-left md:items-start">
            <Link
              href="/"
              prefetch={false}
              className="flex flex-col gap-1 md:flex md:flex-row  md:gap-3 justify-center items-center md:items-start md:justify-start text-lg font-bold"
            >
              <Image
                src={compXLogo}
                alt="App Logo"
                //   height={"26"}
                //   width={"30"}
                className="h-10 w-11"
              />
              <h1 className="font-semibold my-2">CompX</h1>
            </Link>
            <h6 className="mt-3 text-sm text-accent-content/60 leading-relaxed">
              Get Paid, not Played!
              <br />
              Copyright © 2024 - All rights reserved
            </h6>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center lg:pl-20">
            <div className="lg:w-1/3 md:w-1/4 w-full lg:px-4">
              <div className="footer-title font-semibold text-neutral-content tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <a
                  href="mailto:tabindex1@gmail.com"
                  target="_blank"
                  className="link link-hover"
                  aria-label="Contact Support"
                >
                  Support
                </a>
                <a className="link link-hover" href="#pricing">
                  Pricing
                </a>
                <a href="#faq" className="link link-hover">
                  FAQ
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/4 w-full lg:px-4">
              <div className="footer-title font-semibold text-neutral-content tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <a className="link link-hover text-start" href="/tos">
                  Terms of services
                </a>
                <a className="link link-hover" href="/pp">
                  Privacy policy
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/4 w-full md:pl-10 lg:pl-14">
              <div className="footer-title font-semibold text-neutral-content tracking-widest text-sm md:text-left mb-3">
                MORE
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <a
                  href="https://chrome.tabx.io/add"
                  target="_blank"
                  className="link link-hover"
                >
                  TabX
                </a>
                <a
                  href="https://x.com/YashSantani"
                  target="_blank"
                  className="flex flex-row items-center space-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Layer_1"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    className="enable-background:new 0 0 24 24;"
                    stroke="#ffffff"
                  >
                    <g>
                      <path d="M21.159809,2C21.623091,2,22,2.376909,22,2.840191v18.319618C22,21.623091,21.623091,22,21.159809,22H2.84019   C2.37691,22,2,21.623091,2,21.159809V2.840191C2,2.376909,2.37691,2,2.84019,2H21.159809 M21.159809,1H2.84019   C1.82388,1,1,1.823879,1,2.840191v18.319618C1,22.176121,1.82388,23,2.84019,23h18.319618C22.176121,23,23,22.176121,23,21.159809   V2.840191C23,1.823879,22.176121,1,21.159809,1L21.159809,1z" />
                    </g>
                    <path d="M13.523985,10.775623L19.480984,4h-1.41143l-5.174801,5.88195L8.764665,4H4l6.246901,8.895341L4,20h1.411431  l5.461361-6.21299L15.235336,20H20L13.523985,10.775623z M11.590199,12.973429l-0.633908-0.886331L5.920428,5.041171h2.168246  l4.065295,5.6884l0.631236,0.886331l5.283681,7.39365H15.90064L11.590199,12.973429z" />
                  </svg>
                  <pre>/</pre>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="18px"
                    height="18px"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#03A9F4"
                      d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                    ></path>
                  </svg>
                </a>
                <a
                  // href="https://poopup.co/"
                  target="_blank"
                  className="link link-hover flex flex-row gap-2 items-center"
                >
                  Contribute
                  <svg
                    height="16px"
                    viewBox="0 0 1792 1792"
                    width="16px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ffffff"
                      d="M704 1216q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zm640 0q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zm160 0q0-120-69-204t-187-84q-41 0-195 21-71 11-157 11t-157-11q-152-21-195-21-118 0-187 84t-69 204q0 88 32 153.5t81 103 122 60 140 29.5 149 7h168q82 0 149-7t140-29.5 122-60 81-103 32-153.5zm224-176q0 207-61 331-38 77-105.5 133t-141 86-170 47.5-171.5 22-167 4.5q-78 0-142-3t-147.5-12.5-152.5-30-137-51.5-121-81-86-115q-62-123-62-331 0-237 136-396-27-82-27-170 0-116 51-218 108 0 190 39.5t189 123.5q147-35 309-35 148 0 280 32 105-82 187-121t189-39q51 102 51 218 0 87-27 168 136 160 136 398z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br className="sm:hidden" />
        <h5 className="text-primary-content/90 text-sm text-center md:text-start md:pl-10 lg:pl-0">
          Made with 💛 by{" "}
          <Link
            href="https://linkedin.com/in/yashsagar"
            passHref
            legacyBehavior
            className="link"
          >
            <a target="_main" className="link">
              Yash
            </a>
          </Link>
          {" & "}
          <Link
            href="https://www.linkedin.com/in/mohit-asnani/"
            passHref
            legacyBehavior
            className="link"
          >
            <a target="_main" className="link">
              Mohit
            </a>
          </Link>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
