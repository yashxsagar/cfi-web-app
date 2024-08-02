"use client";
import { UserPayload } from "../utils/jwt";
import handleLogin from "../utils/handleLogin";
import { useClientContext } from "../context/ClientStateContext";
import LoadingSpinner from "./LoadingSpinner";

interface PricingProps {
  user: UserPayload | null;
}

const Pricing = ({ user }: PricingProps) => {
  const { logging, setLogging } = useClientContext();
  return (
    <div className="min-h-[60vh] py-24 px-0 md:px-16 lg:px-0 md:py-32 bg-base-100 flex flex-col justify-normal items-center space-y-24 md:space-y-32 overflow-visible">
      <section className="flex flex-col items-center gap-7">
        <div className="badge badge-primary badge-outline animate-pulse whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="oklch(82.87% 0.145 73.54)"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
              clipRule="evenodd"
            />
          </svg>
          Early Bird Offer
        </div>
        <h1 className="text-primary-content font-extrabold text-3xl text-center lg:text-6xl tracking-tight md:-mb-4">
          Stop manually sifting through job descriptions on job sites
        </h1>
      </section>
      <div className="flex flex-col md:flex-row md:w-8/12 lg:w-6/12 gap-10 p-2 md:p-4">
        {/* <div className="grid flex-grow card gap-5 bg-slate-700 rounded-box p-4">
          <div className="flex flex-wrap gap-2">
            <div className="flex flex-col justify-end mb-[4px] text-lg ">
              <p className="relative">
                <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                <span className="text-secondary-content">$ 10</span>
              </p>
            </div>
            <p className="text-5xl tracking-tight font-extrabold text-secondary-content">
              Free
            </p>
          </div>
          <ul className="space-y-2.5 leading-relaxed text-secondary/60 flex-1">
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] opacity-80 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Index unlimited Chrome Tabs</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] opacity-80 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Title & URL matches</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] opacity-80 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Works in Incognito & Offline Mode</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 shrink-0 opacity-75"
              >
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
              </svg>
              <div className="flex flex-col justify-end mb-[4px] text-lg ">
                <p className="relative">
                  <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                  <span className="text-secondary/60">Content Matches</span>
                </p>
              </div>
              {/* <span>
                <span className="bg-primary/30 px-1">Content</span> Matches
              </span> */}
        {/* </li> */}
        {/* <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 shrink-0 opacity-75"
              >
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
              </svg>
              <div className="flex flex-col justify-end mb-[4px] text-lg ">
                <p className="relative">
                  <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                  <span className="text-secondary/60">
                    Auto Highlight and Scroll
                  </span>
                </p>
              </div> */}
        {/* <span>
                <span className="bg-primary/30 px-1">Auto Highlight</span>
                and Scroll
              </span> */}
        {/* </li>
          </ul>
          <div className="space-y-2">
            <a
              className="btn btn-primary btn-block group text-base-100"
              href="https://buy.stripe.com/eVa00O1Zmd5BeEobIJ?prefilled_promo_code=LAUNCH"
            >
              Free Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <p className="text-sm text-center text-primary font-medium relative">
              Lifetime access to{" "}
              <span className="underline">Title & URL matches</span>
            </p>
          </div> */}
        {/* </div> */}

        <div className="grid flex-grow card gap-5 bg-slate-900 border-primary border-2 rounded-box p-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <span className="badge text-xs text-base-100 font-medium border-0 bg-primary whitespace-nowrap">
              Ultimate Job Seeker&apos;s Choice
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex flex-col justify-end mb-[4px] text-lg ">
              <p className="relative">
                <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                <span className="text-secondary-content">$ 15</span>
              </p>
            </div>
            <p className="text-5xl tracking-tight font-extrabold text-secondary-content">
              Free
            </p>
            {/* <div className="flex flex-col justify-end mb-[4px]">
              <p className="text-xs text-base-content/60 uppercase font-semibold">
                USD
              </p>
            </div> */}
          </div>
          <ul className="space-y-2.5 leading-relaxed text-accent-content/80 flex-1">
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] opacity-80 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Search Unlimited Jobs</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] opacity-80 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Works with Notion</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] opacity-80 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Fairness indicator and assessment remarks</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] opacity-80 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                <span className="bg-primary/30 px-1">Rolling Updates</span> to
                Comp Database
              </span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] opacity-80 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                <span className="bg-primary/30 px-1">Justification PDF</span>
                Report for comparison
              </span>
            </li>
          </ul>
          <div className="space-y-2">
            <button
              className="btn btn-primary btn-block group text-base-100"
              onClick={() => handleLogin({ setLogging })}
            >
              {(user && <p>Go To CompX</p>) || <p>Get CompX</p>}
              {(logging && <LoadingSpinner size={6} />) || (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <p className="text-sm text-center text-primary font-medium relative">
              One-time sign up, then{" "}
              <span className="underline">
                it&apos;s yours till we monetize
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
