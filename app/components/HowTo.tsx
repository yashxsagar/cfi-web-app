"use client";
import React, { useEffect, useRef, useState } from "react";

const HowTo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [media, setMedia] = useState<"one" | "two" | "three">("one");
  const handleMediaChange = (value: "one" | "two" | "three") => {
    setMedia(value);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.style.transform = "scale(1.25)"; // Zoom the video
      videoRef.current.style.transformOrigin = "center"; // Center the zoom effect
    }
  }, [media]);

  const renderClip = () => {
    switch (media) {
      case "one":
        return (
          <video
            key={`${media}. clip`}
            ref={videoRef}
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
            ref={videoRef}
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
            ref={videoRef}
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
            ref={videoRef}
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
    <section className="min-h-[60vh] py-24 px-0 md:py-32 md:px-2 space-y-24 md:space-y-32 max-w-5xl mx-auto bg-base-100 ">
      <h2 className="font-extrabold text-center text-primary-content text-4xl lg:text-5xl tracking-tight mb-12 md:mb-24">
        Assess your true worth SupaFast!
      </h2>
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="grid grid-cols-1 items-center gap-8 text-secondary-content align-middle sm:gap-12 lg:grid-cols-2 lg:gap-16">
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
                1. Login with Notion
              </div>
              <div className="collapse-content text-primary-content/70 font-thin">
                <p>
                  Click on the <b>Login with Notion</b> button at the top of
                  this page and you will be redirected to the Notion Login
                  screen. Login to your Notion account, grant the requested
                  permissions. Select the option -{" "}
                  <b>Use a template provided by the developer</b> and hit Allow
                  Access
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
                2. Key in your Compensation
              </div>
              <div className="collapse-content text-primary-content/70 font-thin">
                <p>
                  On a new line aka row simply select your Job Title from the
                  dropdown, hey in the Location (City or County), select the
                  State and input the Compensation Offered (Annual Base Pay)
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
                3. Get your Compensation Assessment
              </div>
              <div className="collapse-content text-primary-content/70 font-thin">
                <p>
                  Simply wait for ~10 seconds and Viola! Get your compensation
                  fairnes assessment as the following 3 outputs in the adjoining
                  columns - Fairness Indicator, Assessment Remarks and a
                  Justification PDF report
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
