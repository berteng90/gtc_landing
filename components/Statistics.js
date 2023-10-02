export const Statistics = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="absolute h-72 w-72 scale-125 -right-8 -bottom-10">
        <div className="absolute h-60 w-60 rounded-2xl border-4 border-amber-300"></div>
        <div className="absolute h-60 w-60 translate-x-3 translate-y-3 rounded-2xl border-4 border-amber-300"></div>
        <div className="absolute h-60 w-60 translate-x-6 translate-y-6 rounded-2xl border-4 border-amber-300"></div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
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
                <div>20+</div>
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
                <div>5k+</div>
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
                <div>25m+</div>
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
