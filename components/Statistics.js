"use client";
import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";

export const Statistics = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const [years, setYears] = useState(1);
  const [families, setFamilies] = useState(500);
  const [productsSold, setProductsSold] = useState(1);

  useEffect(() => {
    if (isInView) {
      const yearTimer =
        years < 20 && setInterval(() => setYears(years + 1), 80);
      const familyTimer =
        families < 5000 && setInterval(() => setFamilies(families + 250), 80);
      const productsSoldTimer =
        productsSold < 25 &&
        setInterval(() => setProductsSold(productsSold + 2), 80);

      return () => {
        clearInterval(yearTimer);
        clearInterval(familyTimer);
        clearInterval(productsSoldTimer);
      };
    } else {
      setYears(1);
      setFamilies(500);
      setProductsSold(1);
    }
  }, [isInView, years, families, productsSold]);

  const formatNumberOfFamilies = (families) => {
    if (families < 1000) {
      return families.toString(); // No formatting needed
    } else {
      return families.toLocaleString(); // Use toLocaleString for formatting
    }
  };

  return (
    <section className="flex mx-auto relative overflow-hidden bg-gray-100 py-12 sm:py-16 lg:py-20 lg:max-w-screen-xl">
      <span className="absolute right-2 bottom-4 w-36 h-36 rounded-3xl bg-green-400 blur-xl "></span>
      <span className="absolute left-2 top-4 w-36 h-36 rounded-3xlrotate-90  rounded-3xl bg-amber-300 blur-xl"></span>
      <div ref={ref} className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-semibold leading-7 text-green-500 sm:text-4xl xl:text-5xl">
            We are <br className="sm:hidden" />
            <span className="">growing</span> rapidly
          </h2>
          <hr className="mt-4 h-1.5 w-32 border-none bg-amber-300 sm:mx-auto sm:mt-8" />
        </div>

        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-y-4 gap-x-8 text-center sm:mt-12 sm:text-left md:grid-cols-3">
          <div className="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <div className="relative text-3xl font-black text-green-500 sm:text-5xl">
              <div className="flex flex-col flex-nowrap text-center">
                <div>{years}+</div>
                <div className="flex-1 text-2xl">Years in Service</div>
              </div>
            </div>
            <div className="relative mt-5 text-gray-600">
              <div className="flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores doloremque vel
              </div>
            </div>
          </div>

          <div className="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <div className="relative text-3xl font-black text-green-500 sm:text-5xl">
              <div className="flex-col flex-nowrap text-center">
                <div>{formatNumberOfFamilies(families)}+</div>
                <div className="text-2xl">Families</div>
              </div>
            </div>
            <div className="relative mt-5 text-gray-600">
              <div className="flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores doloremque vel
              </div>
            </div>
          </div>

          <div className="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <div className="relative text-3xl font-black text-green-500 sm:text-5xl">
              <div className="flex-col flex-nowrap text-center">
                <div>{productsSold}m+</div>
                <div className="text-2xl">Products Sold</div>
              </div>
            </div>
            <div className="relative mt-5 text-gray-600">
              <div className="flex ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores doloremque vel
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
