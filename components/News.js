export const News = () => {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 class="text-2xl text-green-500 font-bold md:text-4xl md:leading-tight">
          Read our latest news
        </h2>
        <p class="mt-1 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et erat
          quam.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
        <a
          class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
          href="#"
        >
          <div class="aspect-w-16 aspect-h-9">
            <img
              class="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
              alt="Image Description"
            />
          </div>
          <div class="p-4 md:p-5">
            <p class="mt-2 text-xs uppercase text-gray-600">
              September 29, 2023
            </p>
            <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-green-500 ">
              Sustainable Farming: Full
            </h3>
          </div>
        </a>

        <a
          class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
          href="#"
        >
          <div class="aspect-w-16 aspect-h-9">
            <img
              class="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80"
              alt="Image Description"
            />
          </div>
          <div class="p-4 md:p-5">
            <p class="mt-2 text-xs uppercase text-gray-600">
              September 29, 2023
            </p>
            <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-green-500 ">
              What GoodFarms really is about
            </h3>
          </div>
        </a>

        <a
          class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
          href="#"
        >
          <div class="aspect-w-16 aspect-h-9">
            <img
              class="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
              alt="Image Description"
            />
          </div>
          <div class="p-4 md:p-5">
            <p class="mt-2 text-xs uppercase text-gray-600">
              September 29, 2023
            </p>
            <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-green-500 ">
              Should Product Owners think like entrepreneurs?
            </h3>
          </div>
        </a>

        <a
          class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
          href="#"
        >
          <div class="aspect-w-16 aspect-h-9">
            <img
              class="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt="Image Description"
            />
          </div>
          <div class="p-4 md:p-5">
            <p class="mt-2 text-xs uppercase text-gray-600">
              September 29, 2023
            </p>
            <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-green-500 ">
              Announcing Farming Strategies: Ready-to-use guidelines
            </h3>
          </div>
        </a>
      </div>

      <div class="text-center">
        <div class="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
          <div class="py-3 px-4 flex items-center gap-x-2">
            <p class="text-gray-600">Want to read more?</p>
            <a
              class="inline-flex items-center gap-x-1.5 text-green-500 decoration-2 hover:underline font-medium"
              href="../docs/index.html"
            >
              Go here
              <svg
                class="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
