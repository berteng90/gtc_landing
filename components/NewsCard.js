"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const NewsCard = () => {
  const blogVariant = {
    hidden: { opacity: 0, x: "-50vw" },
    visible: { opacity: 1, x: 0 },
    normal: { scale: 1 },
    transformed: { scale: 1.05 },
  };

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
        <motion.div
          variants={blogVariant}
          initial={"normal"}
          animate={"visible"}
          whileHover={"transformed"}
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition "
          href="#"
        >
          <Link href={"/news/goodfarms-goes-to-palawan"}>
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full h-96 object-cover rounded-t-xl"
                src="/images/palawan/palawan.jpg"
                alt="Image Description"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-600">
                September 29, 2023
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-green-500 ">
                GoodFarms, CB Andrew, & Dealer's Palawan Trip
              </h3>
            </div>
          </Link>
        </motion.div>

        <motion.div
          variants={blogVariant}
          initial={"normal"}
          whileHover={"transformed"}
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition "
          href="#"
        >
          <Link href={"/"}>
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full h-96 object-cover rounded-t-xl"
                src="/images/palawan/palawan2.jpg"
                alt="Image Description"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-600">
                September 29, 2023
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-green-500 ">
                What GoodFarms really is about
              </h3>
            </div>
          </Link>
        </motion.div>

        <motion.div
          variants={blogVariant}
          initial={"normal"}
          whileHover={"transformed"}
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition "
          href="#"
        >
          <Link href={"/"}>
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full h-96 object-cover rounded-t-xl"
                src="/images/palawan/palawan3.jpg"
                alt="Image Description"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-600">
                September 29, 2023
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-green-500 ">
                Should Product Owners think like entrepreneurs?
              </h3>
            </div>
          </Link>
        </motion.div>

        <motion.div
          variants={blogVariant}
          initial={"normal"}
          whileHover={"transformed"}
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition "
          href="#"
        >
          <Link href={"/"}>
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full h-96 object-cover rounded-t-xl"
                src="/images/palawan/palawan4.jpg"
                alt="Image Description"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-600">
                September 29, 2023
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-green-500 ">
                Announcing Farming Strategies: Ready-to-use guidelines
              </h3>
            </div>
          </Link>
        </motion.div>
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
