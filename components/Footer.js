export const Footer = () => {
  return (
    <footer class="bg-gray-50">
      <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div class="max-w-sm">
          <div class="mb-6 flex h-12 items-center space-x-2">
            <span class="mr-2 w-8">
              <img src="/Goodfarms Logo.svg" alt="GoodFarms Logo" />
            </span>
            <span class="text-m font-bold">
              <span class="text-green-600">GoodFarms Trading Corp</span>.
            </span>
          </div>
          <div class="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a
            officia ea expedita!
          </div>
        </div>
        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4">Address</div>
          <div class="text-gray-500">
            Purok 11 Poblacion Sur, <br />
            Don Carlos, <br />
            Bukidnon, PH
          </div>
        </div>
        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4">About</div>
          <nav aria-label="Footer Navigation" class="text-gray-500">
            <ul class="space-y-3">
              <li>
                <a class="hover:text-green-500 hover:underline" href="#">
                  About
                </a>
              </li>
              <li>
                <a class="hover:text-green-500 hover:underline" href="#">
                  History
                </a>
              </li>
              <li>
                <a class="hover:text-green-500 hover:underline" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div class="">
            © 2023 GoodFarms Trading Corp. | All Rights Reserved
          </div>
          <div class="">
            <a class="" href="#">
              Privacy Policy
            </a>
            <span> | </span>
            <a class="" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
