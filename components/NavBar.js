export const NavBar = () => {
  return (
    <div class="overflow-x-hidden">
      <header class="text-green-500 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 lg:mx-auto lg:flex-row lg:items-center">
        <a
          href="#"
          class="flex items-center whitespace-nowrap text-xl font-black"
        >
          <span class="mr-2 w-8">
            <img src="/Goodfarms Logo.svg" alt="GoodFarms Logo" />
          </span>
          GoodFarms Trading Corp.
        </a>
        <input type="checkbox" class="peer hidden" id="navbar-open" achecked />
        <label
          class="absolute top-5 right-5 cursor-pointer lg:hidden"
          for="navbar-open"
        >
          <span class="sr-only">Toggle Navigation</span>
          <svg
            class="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
        >
          <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
            <li class="lg:mr-12">
              <a
                class="rounded text-gray-500 transition focus:outline-none focus:ring-1 focus:ring-amber-300 focus:ring-offset-2"
                href="#"
              >
                Services
              </a>
            </li>
            <li class="lg:mr-12">
              <a
                class="rounded text-gray-500 transition focus:outline-none focus:ring-1 focus:ring-amber-300 focus:ring-offset-2"
                href="#"
              >
                Careers
              </a>
            </li>
            <li class="lg:mr-12">
              <a
                class="rounded text-gray-500 transition focus:outline-none focus:ring-1 focus:ring-amber-300 focus:ring-offset-2"
                href="#"
              >
                About
              </a>
            </li>
            <li class="lg:mr-12">
              <a
                class="rounded text-gray-500 transition focus:outline-none focus:ring-1 focus:ring-amber-300 focus:ring-offset-2"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
          <hr class="mt-4 w-full lg:hidden" />
          <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
            <a
              href="#"
              title=""
              class="whitespace-nowrap rounded-xl bg-green-500 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 hover:bg-amber-300"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};
