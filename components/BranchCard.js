"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const BranchCard = ({ branchName, branchLocation }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  const textVariant = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="flex flex-col  border shadow-sm rounded-xl ">
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate={mainControls}
        className="p-4 md:p-5"
      >
        <h3 className="text-lg text-center font-bold text-gray-600">
          {branchName}
        </h3>
        <div className="flex flex-row flex-nowrap justify-center items-center">
          <svg
            fill="#dc2626"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 395.71 395.71"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>
              </g>
            </g>
          </svg>
          <p className="mt-2 text-center text-md text-gray-800">
            {branchLocation}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
