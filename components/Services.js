export const Services = () => {
  const Services = [
    {
      title: "Retail & Wholesale of Agri-Products",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
        erat quam. Integer porttitor ante in odio accumsan, in tempus sapien
        vulputate. Donec pretium quis risus at mollis. Suspendisse et metus
        quis nisl vulputate pharetra. Maecenas rutrum est nunc. Aenean in
        facilisis arcu. Sed consequat metus vel lorem consequat, in tempus
        mauris dictum.`,
    },
    {
      title: "Mechanical Drying",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
        erat quam. Integer porttitor ante in odio accumsan, in tempus sapien
        vulputate. Donec pretium quis risus at mollis. Suspendisse et metus
        quis nisl vulputate pharetra. Maecenas rutrum est nunc. Aenean in
        facilisis arcu. Sed consequat metus vel lorem consequat, in tempus
        mauris dictum.`,
    },
  ];

  return (
    <section class="px-4 py-24 mx-auto max-w-7xl">
      <div class="mb-5 text-center">
        <h2 class="lg:text-4xl text-green-500 font-bold sm:text-3xl dark:text-gray-200">
          Services We Offer
        </h2>
      </div>

      <div class="mt-10 grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h3 class="mb-4 lg:text-2xl font-bold tracking-tight text-center text-green-500 md:leading-tight sm:text-left md:text-2xl">
            Retail & Wholesale of Agri-Products
          </h3>
          <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            erat quam. Integer porttitor ante in odio accumsan, in tempus sapien
            vulputate. Donec pretium quis risus at mollis. Suspendisse et metus
            quis nisl vulputate pharetra. Maecenas rutrum est nunc. Aenean in
            facilisis arcu. Sed consequat metus vel lorem consequat, in tempus
            mauris dictum.
          </p>
          <a
            href="#"
            title=""
            class="whitespace-nowrap rounded-xl bg-green-500 px-3 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 hover:bg-amber-300"
          >
            Learn More
          </a>
        </div>
        <div class="w-full h-full py-48 bg-gray-200"></div>
      </div>
      <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div class="order-none md:order-2 ">
          <h3 class="mb-4 lg:text-2xl font-extrabold tracking-tight text-center text-green-500 md:leading-tight sm:text-left md:text-2xl">
            Mechanical Drying
          </h3>
          <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            erat quam. Integer porttitor ante in odio accumsan, in tempus sapien
            vulputate. Donec pretium quis risus at mollis. Suspendisse et metus
            quis nisl vulputate pharetra. Maecenas rutrum est nunc. Aenean in
            facilisis arcu. Sed consequat metus vel lorem consequat, in tempus
            mauris dictum.
          </p>
          <a
            href="#"
            title=""
            class="whitespace-nowrap rounded-xl bg-green-500 px-3 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 hover:bg-amber-300"
          >
            Learn More
          </a>
        </div>
        <div class="w-full h-full py-48 bg-gray-200"></div>
      </div>
    </section>
  );
};
