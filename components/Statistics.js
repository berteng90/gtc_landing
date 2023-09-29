export const Statistics = () => {
  return (
    <section class="relative overflow-hidden bg-gray-100">
      <img
        class="absolute top-0 h-full w-full object-cover object-center opacity-30"
        src="/farmer-sitting.jpeg"
      />

      <div class="bg-white/60 relative mx-auto flex h-full w-full flex-col items-center justify-center px-4 py-12 backdrop-blur-md sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2 class="-mx-4 px-4 pt-4 pb-6 text-3xl text-green-500 sm:text-4xl xl:text-5xl">
          Our <span class="font-bold">Growth</span>
        </h2>

        <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-y-4 gap-x-8 text-center sm:mt-12 sm:text-left md:grid-cols-3">
          <div class="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <div class="relative text-3xl font-black text-green-500 sm:text-5xl">
              <div className="flex flex-col flex-nowrap lg:text-center">
                <div>20+</div>
                <div className="flex-1 text-2xl">Years in Service</div>
              </div>
            </div>
            <div class="relative mt-5 text-gray-600">
              <div className="flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores doloremque vel
              </div>
            </div>
          </div>

          <div class="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <div class="relative text-3xl font-black text-green-500 sm:text-5xl">
              <div className="flex-col flex-nowrap text-center">
                <div>5k+</div>
                <div className="text-2xl">Families</div>
              </div>
            </div>
            <div class="relative mt-5 text-gray-600">
              <div className="flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores doloremque vel
              </div>
            </div>
          </div>
          <div class="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <div class="relative text-3xl font-black text-green-500 sm:text-5xl">
              <div className="flex-col flex-nowrap text-center">
                <div>25m+</div>
                <div className="text-2xl">Products Sold</div>
              </div>
            </div>
            <div class="relative mt-5 text-gray-600">
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
