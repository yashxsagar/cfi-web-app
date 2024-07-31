import chromeBomb from "@/public/images/chromeBomb.png";
import Image from "next/image";
import ChromeSpinner from "@/public/images/ChromeSpinner.gif";

const FairnessScale = () => {
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
      <div className="flex flex-col mx-1 min-h-[30vh] md:flex-row items-center md:-mx-32">
        <ul className="timeline timeline-vertical lg:timeline-horizontal">
          <li>
            <div className="timeline-start flex flex-row">
              <p className="text-base-100">XXXXXX</p>
              {/* <h5>{"<"}-15%</h5> */}
              <h5>-30%</h5>
              <p className="text-base-100">XXXXXX</p>
            </div>
            <br className="lg:hidden" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5-7.5h10a.5.5 0 010 1H5a.5.5 0 010-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-compact">Lowballed</div>
            <hr className="bg-error" />
          </li>
          <li>
            <hr className="bg-error" />
            <div className="timeline-start flex flex-row">
              <p className="text-base-100">XXXXXX</p>
              <h5>-15%</h5>
              <p className="text-base-100">XXXXXX</p>
            </div>
            <br className="lg:hidden" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5-7.5h10a.5.5 0 010 1H5a.5.5 0 010-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-compact">Undervalued</div>
            <hr className="bg-orange-400" />
          </li>
          <li>
            <hr className="bg-orange-400" />
            <div className="timeline-start flex flex-row">
              <p className="text-base-100">XXXXXX</p>
              <h5>-10%</h5>
              <p className="text-base-100">XXXXXX</p>
            </div>
            <br className="md:hidden" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5-7.5h10a.5.5 0 010 1H5a.5.5 0 010-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end">Underpaid</div>
            <hr className="bg-rose-300" />
          </li>
          <li>
            <hr className="bg-rose-300" />
            <div className="timeline-middle timeline-box border-warning border-2">
              Fair
            </div>
            {/* <div className="timeline-end"></div> */}
            <div className="timeline-end text-base-100">XXXXXXXXXXXXX</div>
            <br className="lg:hidden" />
            <hr className="bg-purple-400" />
          </li>
          <li>
            <hr className="bg-purple-400" />
            <div className="timeline-start">Solid</div>
            <br className="lg:hidden" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5-8.5h10a.5.5 0 010 1H5a.5.5 0 010-1zm5-5v10a.5.5 0 01-1 0V5a.5.5 0 011 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end flex flex-row">
              <p className="text-base-100">XXXXXX</p>
              <h5>+10%</h5>
              <p className="text-base-100">XXXXXX</p>
            </div>
            <hr className="bg-info" />
          </li>
          <li>
            <hr className="bg-info" />
            <div className="timeline-start">Very Solid</div>
            <br className="lg:hidden" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5-8.5h10a.5.5 0 010 1H5a.5.5 0 010-1zm5-5v10a.5.5 0 01-1 0V5a.5.5 0 011 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end flex flex-row">
              <p className="text-base-100">XXXXXX</p>
              <h5>+15%</h5>
              <p className="text-base-100">XXXXXX</p>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-start">Lottery</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5-8.5h10a.5.5 0 010 1H5a.5.5 0 010-1zm5-5v10a.5.5 0 01-1 0V5a.5.5 0 011 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end flex flex-row">
              <p className="text-base-100">XXXXXX</p>
              {/* <h5>{">+"}15%</h5> */}
              <h5>{"+"}30%</h5>
              <p className="text-base-100">XXXXXX</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FairnessScale;
