"use client";
import React, { useState } from "react";

const HowTo = () => {
  const [media, setMedia] = useState<"one" | "two" | "three">("one");
  const handleMediaChange = (value: "one" | "two" | "three") => {
    setMedia(value);
  };

  const renderClip = () => {
    switch (media) {
      case "one":
        return (
          <video
            key={`${media}. clip`}
            className="px-2 md:px-0 rounded-3xl w-full sm:w-[26rem] sm:-m-2 sm:p-2 bg-base-100"
            width={"500"}
            height={"500"}
            autoPlay={true}
            loop
            playsInline
            controls
            muted
          >
            <source src={"/videos/Clip1.mp4"} type="video/mp4" />
          </video>
        );
      case "two":
        return (
          <video
            key={`${media}. clip`}
            className="px-2 md:px-0 rounded-3xl w-full sm:w-[26rem] sm:-m-2 sm:p-2 bg-base-100"
            width={"500"}
            height={"500"}
            autoPlay={true}
            loop
            playsInline
            controls
            muted
          >
            <source src={"/videos/Clip2.mp4"} type="video/mp4" />
          </video>
        );
      case "three":
        return (
          <video
            key={`${media}. clip`}
            className="px-2 md:px-0 rounded-3xl w-full sm:w-[26rem] sm:-m-2 sm:p-2 bg-base-100"
            width={"500"}
            height={"500"}
            autoPlay={true}
            loop
            playsInline
            controls
            muted
          >
            <source src={"/videos/Clip3.mp4"} type="video/mp4" />
          </video>
        );
      default:
        return (
          <video
            key={`${media}. clip`}
            className="px-2 md:px-0 rounded-3xl w-full sm:w-[26rem] sm:-m-2 sm:p-2 bg-base-100"
            width={"500"}
            height={"500"}
            autoPlay={true}
            loop
            playsInline
            controls
            muted
          >
            <source src={"/videos/Clip1.mp4"} type="video/mp4" />
          </video>
        );
    }
  };

  return (
    <section className="min-h-[60vh] py-24 px-0 md:py-32 md:px-4 space-y-24 md:space-y-32 max-w-5xl mx-auto bg-base-100 ">
      <h2 className="font-extrabold text-center text-primary text-4xl lg:text-5xl tracking-tight mb-12 md:mb-24">
        Retreive your desired content SupaFast!
      </h2>
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="grid grid-cols-1 items-center gap-8 text-secondary-content align-middle sm:gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="collapse collapse-plus">
              <input
                id="option1"
                type="radio"
                name="how-to"
                value={"one"}
                onChange={() => handleMediaChange("one")}
                checked={media === "one"}
                // defaultChecked
              />
              <div className="collapse-title text-xl font-medium md:text-lg">
                1. Fire up the TabX Extension
              </div>
              <div className="collapse-content text-secondary/70 font-thin">
                <p>
                  Just click on thr bright orange extension logo in the top
                  right of your Chrome window. If it&apos;s not visible simply
                  click on the Extensions logo and pin TabX
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input
                id="option2"
                type="radio"
                name="how-to"
                value={"two"}
                onChange={() => handleMediaChange("two")}
                checked={media === "two"}
              />
              <div className="collapse-title text-xl font-medium md:text-lg">
                2. Type in your search keyword
              </div>
              <div className="collapse-content text-secondary/70 font-thin">
                <p>
                  Type the title, URL or any page content (Pro Users only) that
                  you want search for
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input
                id="option3"
                type="radio"
                name="how-to"
                value="three"
                onChange={() => handleMediaChange("three")}
                checked={media === "three"}
              />
              <div className="collapse-title text-xl font-medium md:text-lg">
                3. Click on the desired search result
              </div>
              <div className="collapse-content text-secondary/70 font-thin">
                <p>
                  Just click on any of the search results filtered and populated
                  in the extension body and Viola! Your chosen tab is now in
                  focus and the your search keyword is highlighted in the
                  focused tab (works only when you select a result from the
                  Content Matches section)
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">{renderClip()}</div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
