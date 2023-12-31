"use client";
import { useState } from "react";
import Image from "next/image";
export const Services = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-green-500 font-bold sm:text-3xl">
              Services We Offer
            </h2>

            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                className={`text-left   p-4 md:p-5 rounded-xl  ${
                  activeTab === 1 ? "bg-green-500" : "hover:bg-gray-200"
                }`}
                onClick={() => handleTabClick(1)}
                id="tabs-with-card-item-1"
                data-hs-tab="#tabs-with-card-1"
                aria-controls="tabs-with-card-1"
                role="tab"
              >
                <span className="flex">
                  <svg
                    className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>
                  <span className="grow ml-6">
                    <span
                      className={
                        activeTab === 1
                          ? "block text-lg font-semibold text-white"
                          : "block text-lg font-semibold text-gray-800"
                      }
                    >
                      Retail & Wholesale
                    </span>
                    <span
                      className={
                        activeTab === 1
                          ? "block mt-1 text-white "
                          : "block mt-1 text-gray-600 "
                      }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis et erat quam.
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className={`  text-left  p-4 md:p-5 rounded-xl  ${
                  activeTab === 2 ? "bg-green-500" : "hover:bg-gray-200"
                }`}
                onClick={() => handleTabClick(2)}
                id="tabs-with-card-item-2"
                data-hs-tab="#tabs-with-card-2"
                aria-controls="tabs-with-card-2"
                role="tab"
              >
                <span className="flex">
                  <svg
                    className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                    />
                  </svg>
                  <span className="grow ml-6">
                    <span
                      className={
                        activeTab === 2
                          ? "block text-lg font-semibold text-white"
                          : "block text-lg font-semibold text-gray-800"
                      }
                    >
                      Mechanical Drying
                    </span>
                    <span
                      className={
                        activeTab === 2
                          ? "block mt-1 text-white "
                          : "block mt-1 text-gray-600 "
                      }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis et erat quam.
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className={`  text-left  p-4 md:p-5 rounded-xl  ${
                  activeTab === 3 ? "bg-green-500" : "hover:bg-gray-200"
                }`}
                onClick={() => handleTabClick(3)}
                id="tabs-with-card-item-3"
                data-hs-tab="#tabs-with-card-3"
                aria-controls="tabs-with-card-3"
                role="tab"
              >
                <span className="flex">
                  <svg
                    className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                  </svg>
                  <span className="grow ml-6">
                    <span
                      className={
                        activeTab === 3
                          ? "block text-lg font-semibold text-white"
                          : "block text-lg font-semibold text-gray-800"
                      }
                    >
                      Placeholder Service
                    </span>
                    <span
                      className={
                        activeTab === 3
                          ? "block mt-1 text-white "
                          : "block mt-1 text-gray-600 "
                      }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis et erat quam.
                    </span>
                  </span>
                </span>
              </button>
            </nav>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              <div>
                <div
                  id="tabs-with-card-1"
                  className={activeTab === 1 ? "" : "hidden"}
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-1"
                >
                  <Image
                    className="shadow-xl shadow-gray-600 rounded-xl"
                    width={987}
                    height={1220}
                    quality={100}
                    src={"/farmer-sitting.jpeg"}
                    alt="Image Description"
                  />
                </div>

                <div
                  id="tabs-with-card-2"
                  className={activeTab === 2 ? "" : "hidden"}
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-2"
                >
                  <Image
                    className="shadow-xl shadow-gray-600 rounded-xl"
                    width={987}
                    height={1220}
                    quality={100}
                    src={"/bombom.jpg"}
                    alt="Image Description"
                  />
                </div>

                <div
                  id="tabs-with-card-3"
                  className={activeTab === 3 ? "" : "hidden"}
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-3"
                >
                  <Image
                    className="shadow-xl shadow-gray-600 rounded-xl"
                    width={987}
                    height={1220}
                    quality={100}
                    src={"/farmer-sitting.jpeg"}
                    alt="Image Description"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
        </div>
      </div>
    </div>
  );
};
