"use client";
import React from "react";
import { BlogCard } from "./BlogCard";

export const BlogSection = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl text-green-500 font-bold md:text-4xl md:leading-tight">
          Read our latest news
        </h2>
        <p className="mt-1 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et erat
          quam.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
        <BlogCard
          title={`GoodFarms, CB Andrew, & Dealer's Palawan Trip`}
          image={"/images/palawan/palawan.jpg"}
          alt={"Article Picture"}
          date={"September 30, 2023"}
          url={"/news/goodfarms-goes-to-palawan"}
        />
        <BlogCard
          title={`Dummy Article About Life`}
          image={"/images/palawan/palawan2.jpg"}
          alt={"Article Picture"}
          date={"September 29, 2023"}
          url={"/"}
        />
        <BlogCard
          title={`Dummy Article About Science`}
          image={"/images/palawan/palawan3.jpg"}
          alt={"Article Picture"}
          date={"September 28, 2023"}
          url={"/"}
        />
        <BlogCard
          title={`Dummy Article About Space`}
          image={"/images/palawan/palawan4.jpg"}
          alt={"Article Picture"}
          date={"September 27, 2023"}
          url={"/"}
        />
      </div>

      <div className="text-center">
        <div className="inline-block bg-white border shadow-sm rounded-full ">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p className="text-gray-600">Want to read more?</p>
            <a
              className="inline-flex items-center gap-x-1.5 text-green-500 decoration-2 hover:underline font-medium"
              href="/"
            >
              Go here
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
