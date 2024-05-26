import React from "react";

function Resume() {
  return (
    <section className="w-full flex justify-center flex-col items-center mt-24 bg-[#E6EAEE]">
      <div className="text-center mt-20">
        <p className="text-base uppercase text-gray-600 my-3">EXPERIENCE</p>
        <h2 className="mb-4 text-5xl my-3"> Professional Resume</h2>
      </div>

      <div className=" w-[90%] lg:w-[65%] flex flex-col lg:flex-row justify-center">
        <div className="w-[100%] flex flex-col border border-black/5 px-10 my-20 rounded-lg">
          <div className="flex border-b border-black/5 pb-10 pt-10">
            <div className="resume-icon">
              <i>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="remixicon "
                >
                  <path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path>
                </svg>
              </i>
            </div>
            <div className="flex flex-col">
              <span className="block mb-5 leading-none text-black">
                2021 - Present
              </span>
              <h4 className="my-3 text-xl text-[#1D1D26]">
                Themeforest Market
              </h4>
              <span className="text-gray-600 text-base">Web Designer</span>
            </div>
          </div>
          <div className="flex border-b border-black/5 pb-10 pt-10">
            <div className="resume-icon">
              <i>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="remixicon "
                >
                  <path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path>
                </svg>
              </i>
            </div>
            <div className="flex flex-col">
              <span className="block mb-5 leading-none text-black">
                2021 - Present
              </span>
              <h4 className="my-3 text-xl text-[#1D1D26]">
                Themeforest Market
              </h4>
              <span className="text-gray-600 text-base">Web Designer</span>
            </div>
          </div>
          <div className="flex border-b border-black/5 pb-10 pt-10">
            <div className="resume-icon">
              <i>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="remixicon "
                >
                  <path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path>
                </svg>
              </i>
            </div>
            <div className="flex flex-col">
              <span className="block mb-5 leading-none text-black">
                2021 - Present
              </span>
              <h4 className="my-3 text-xl text-[#1D1D26]">
                Themeforest Market
              </h4>
              <span className="text-gray-600 text-base">Web Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
