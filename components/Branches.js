"use client";
import { useState } from "react";
import { Carousel } from "./Carousel";
import { BranchCard } from "./BranchCard";

const branches = [
  {
    branch: "GTC Don Carlos",
    location: "Purok 11 Sur, Don Carlos, Bukidnon 8712",
  },
  {
    branch: "GTC Maramag",
    location: "Maramag, Bukidnon 8714",
  },
  {
    branch: "GTC Quezon",
    location: "Quezon, Bukidnon 8714",
  },
  {
    branch: "GTC Tablon",
    location: "Tablon, Cagayan De Oro 8714",
  },
  {
    branch: "GTC Wao",
    location: "Wao, Lanao Del Sur 8714",
  },
  {
    branch: "GTC Kadingilan",
    location: "Kadingilan, Bukidnon 8714",
  },
  {
    branch: "GTC Kibawe",
    location: "Kibawe, Bukidnon 8714",
  },
  {
    branch: "GTC Aglayan",
    location: "Aglayan, Malaybalay, Bukidnon 8714",
  },
];

export const Branches = () => {
  const [currBranch, setCurrBranch] = useState(0);
  const setCurrentBranch = (branch) => {
    setCurrBranch(branch);
  };

  return (
    <div className="mx-auto  flex max-w-lg flex-col px-4 py-20 lg:max-w-screen-xl lg:flex-row ">
      <div className="mb-10 max-w-lg lg:mb-0 lg:pr-16 xl:pr-20">
        <div className="mb-10 text-4xl text-green-500 font-light">
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
        </div>
        <div className="mb-5 text-gray-600">
          <BranchCard
            branchName={branches[currBranch].branch}
            branchLocation={branches[currBranch].location}
          />
        </div>
      </div>
      <Carousel setCurrentBranch={setCurrentBranch} />
    </div>
  );
};
