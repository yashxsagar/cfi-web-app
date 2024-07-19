"use client";
import React from "react";
import CheckMark from "./Check";
import AjayCircular from "@/public/images/AjayCircular.png";
import VinayakCircular from "@/public/images/VinayakCircular.png";
import MohitCircular from "@/public/images/MohitCircular.png";
import KrisCircular from "@/public/images/KrisCircular.png";
import ArnabCircular from "@/public/images/ArnabCircular.png";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/themes/translucent.css";

const Hero = () => {
  const reviewers = [
    { image: AjayCircular, role: "Financial Analyst" },
    { image: VinayakCircular, role: "Lawyer" },
    { image: MohitCircular, role: "Product Manager" },
    { image: KrisCircular, role: "Sales" },
    { image: ArnabCircular, role: "Research Scientist" },
  ];
  return (
    <div className="min-h-[60vh] flex flex-col justify-normal items-center gap-y-20 overflow-visible">
      <h1 className="text-primary font-extrabold text-3xl text-center lg:text-6xl tracking-tight md:-mb-4">
        {"Retreive Knowledge from your Chrome tabs in seconds,"}{" "}
        <br className="hidden md:block" />
        <span className="relative whitespace-nowrap">
          <span className="absolute bg-primary -left-1 -top-0 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
          <span className="relative text-neutral">{"not hours"}</span>
        </span>
      </h1>
      <p className="text-lg text-secondary-content leading-relaxed max-w-xl mx-auto text-center">
        Enjoy deeper content retrieval and discovery without having to manually
        cycle through tabs and countless rounds of Ctrl+Fs
      </p>
      <div className="grid justify-items-center">
        <ul className="grid-cols-2 justify-items-center gap-2 text-secondary -m-7">
          <li className="flex flex-row gap-2 items-center">
            <CheckMark color={"#03fcbe"} /> Filter tabs by title, url and
            content
          </li>
          <li className="flex flex-row gap-2 items-center">
            <CheckMark color={"#03fcbe"} /> Works in online and offline modes
          </li>
          <li className="flex flex-row gap-2 items-center">
            <CheckMark color={"#03fcbe"} /> Save time spent on hovering over
            <br className="md:hidden" />
            tiny tab titles
          </li>
        </ul>
      </div>
      <button className="btn btn-primary flex flex-row gap-1 align-middle items-center content-center justify-item text-base-200 text-base sm:w-4/12 md:w-2/12 group">
        Get TabX
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transition-transform duration-400 group-hover:scale-125"
          fill="oklch(47.42% 0.01 293.69)"
          viewBox="0 0 24 24"
          stroke="oklch(47.42% 0.01 293.69)"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
      <div className="flex flex-col justify-center items-center md:items-center overflow-visible">
        <div className="avatar-group -space-x-6 rtl:space-x-reverse overflow-visible">
          {reviewers.map((reviewer, index) => (
            <div key={index} className="avatar">
              <div className="w-12">
                {/* <div
                  className="tooltip tooltip-bottom tooltip-primary"
                  data-tip="tooltip for 1"
                > */}
                <Tippy content={reviewer.role} theme="tabx" placement="top">
                  <Image
                    src={reviewer.image}
                    alt={`${index + 1}. Profile Avatar`}
                    className="rounded-full"
                  />
                </Tippy>
                {/* </div> */}
              </div>
            </div>
          ))}
          <div className="avatar placeholder">
            <div className="w-12 bg-base-100 text-secondary">
              <span className="font-semibold">+499</span>
            </div>
          </div>
        </div>
        <span className="text-secondary inline mt-4">
          Professionals browse smarter
        </span>
        <section className="flex flex-col items-center mt-1">
          <div className="rating">
            <input
              type="radio"
              disabled={true}
              name="rating-2"
              className="mask mask-star-2 bg-secondary size-3"
            />
            <input
              type="radio"
              disabled={true}
              name="rating-2"
              className="mask mask-star-2 bg-secondary size-3"
            />
            <input
              type="radio"
              disabled={true}
              name="rating-2"
              className="mask mask-star-2 bg-secondary size-3"
            />
            <input
              type="radio"
              disabled={true}
              name="rating-2"
              className="mask mask-star-2 bg-secondary size-3"
            />
            <input
              type="radio"
              disabled={true}
              name="rating-2"
              className="mask mask-star-2 bg-secondary size-3"
              checked
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic"; //This is to make Next.js opt out of static rendering of this page route
export const revalidate = 0; //Exactly the same as setting the const dynamic= 'force-dynamic'
export default Hero;
