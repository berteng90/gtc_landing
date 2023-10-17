"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Carousel } from "./Carousel";
import { BranchCard } from "./BranchCard";

const branches = [
  {
    branch: "GTC Don Carlos",
    location: "Purok 11 Sur, Don Carlos, Bukidnon",
  },
  {
    branch: "GTC Maramag",
    location: "Purok 1 South Poblacion, Maramag, Bukidnon",
  },
  {
    branch: "GTC Quezon",
    location: "Purok 4B Balangay, Quezon, Bukidnon",
  },
  {
    branch: "GTC Tablon",
    location: "Tablon, Cagayan De Oro",
  },
  {
    branch: "GTC Wao",
    location: "Wao, Lanao Del Sur",
  },
  {
    branch: "GTC Kadingilan",
    location: "Kadingilan, Bukidnon",
  },
  {
    branch: "GTC Kibawe",
    location: "Kibawe, Bukidnon",
  },
  {
    branch: "GTC Aglayan",
    location: "Purok-4B Aglayan, Malaybalay, Bukidnon",
  },
];

export const Branches = () => {
  const [currBranch, setCurrBranch] = useState(0);
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
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
    }
  }, [isInView]);

  const setCurrentBranch = (branch) => {
    setCurrBranch(branch);
  };

  return (
    <div className="mx-auto flex max-w-lg flex-col px-4 py-20 lg:max-w-screen-xl lg:flex-row ">
      <div ref={ref} className="mb-0 max-w-lg lg:mb-0 lg:pr-16 xl:pr-20">
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate={mainControls}
          className="mb-10 text-4xl text-green-500 font-light"
        >
          <div>
            <div className="rounded bg-amber-300 p-8 ">
              <h1 className="text-green-500 ">
                Trusted by Farmers All-Over
                <span className="font-bold"> Mindanao!</span>
              </h1>
            </div>
            <div className="mx-auto h-2 w-11/12 rounded-b bg-amber-500 opacity-75"></div>
            <div className="mx-auto h-2 w-10/12 rounded-b bg-amber-500 opacity-50"></div>
            <div className="mx-auto h-2 w-9/12 rounded-b bg-amber-500 opacity-25"></div>
          </div>
        </motion.div>
        <div className="mb-5 text-gray-600">
          <BranchCard
            branchName={branches[currBranch].branch}
            branchLocation={branches[currBranch].location}
          />
        </div>
      </div>
      <motion.div
        ref={ref}
        variants={textVariant}
        initial="hidden"
        animate={mainControls}
        className="lg:w-1/2 md:w-full"
      >
        <Carousel setCurrentBranch={setCurrentBranch} />
      </motion.div>
    </div>
  );
};
