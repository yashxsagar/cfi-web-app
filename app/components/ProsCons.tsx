import chromeBomb from "@/public/images/chromeBomb.png";
import Image from "next/image";
import ChromeSpinner from "@/public/images/ChromeSpinner.gif";

const ProsCons = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-normal items-center gap-y-16 md:gap-y-36 overflow-visible">
      <div className="flex flex-col gap-y-20">
        <h1 className="text-primary-content font-extrabold text-3xl text-center lg:text-6xl tracking-tight md:-mb-4">
          Do you feel underpaid at your job?
        </h1>
        <p className="text-lg text-accent-content leading-relaxed max-w-xl mx-auto text-center">
          Obtain a comparative assessment with a super user-friendly scale
        </p>
      </div>
      <div className="flex flex-col mx-4 md:flex-row gap-10">
        <div className="flex flex-col items-center">
          <Image src={chromeBomb} alt="chrome exploding" />
          <div className="bg-rose-200 text-base-200 p-4 md:p-8 rounded-lg w-full max-w-md h-5/6 ">
            <h3 className="font-bold text-lg mb-4">Chrome without TabX</h3>
            <ul className="list-disc list-inside space-y-1.5 ">
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0 opacity-75"
                >
                  <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
                </svg>
                Hover over tiny tab titles to find your content
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0 opacity-75"
                >
                  <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
                </svg>
                Reopen the same url on multiple tabs
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0 opacity-75"
                >
                  <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
                </svg>
                Ram over usage and system slowdown
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0 opacity-75"
                >
                  <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
                </svg>
                Countless rounds of Ctrl+Fs
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-0.5">
          <Image
            src={ChromeSpinner}
            alt="chrome exploding"
            width={60}
            height={60}
            className="mb-3"
            unoptimized
          />
          <div className="bg-secondary-content text-base-200 p-4 md:p-8 rounded-lg w-full max-w-md h-5/6">
            <h3 className="font-bold text-lg mb-4">Chrome with TabX</h3>
            <ul className="list-disc list-inside space-y-1.5 ">
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0 opacity-75"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Filter directly by title, url or page content
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0 opacity-75"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                One-click to focus target tab
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0 opacity-75"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                No need to re-open the same url on multiple tabs
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0 opacity-75"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Single search to query all open tabs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProsCons;
