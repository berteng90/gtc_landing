export const Footer = () => {
  return (
    <footer className="bg-gray-50 shadow-gray-500 shadow-md">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div className="max-w-sm">
          <div className="mb-6 flex h-12 items-center space-x-2">
            <span className="mr-2 w-8">
              <img src="/Goodfarms Logo.svg" alt="GoodFarms Logo" />
            </span>
            <span className="text-m font-bold">
              <span className="text-green-600">GoodFarms Trading Corp</span>.
            </span>
          </div>
          <div className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a
            officia ea expedita!
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Address</div>
          <div className="text-gray-500">
            Purok 11 Poblacion Sur, <br />
            Don Carlos, <br />
            Bukidnon, PH
          </div>
        </div>
        <div className="about">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Company</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className="hover:text-green-500 hover:underline" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-green-500 hover:underline" href="#">
                  History
                </a>
              </li>
              <li>
                <a className="hover:text-green-500 hover:underline" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="support">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Support</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className="hover:text-green-500 hover:underline" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:text-green-500 hover:underline" href="#">
                  Send a Message
                </a>
              </li>
              <li>
                <a className="hover:text-green-500 hover:underline" href="#">
                  Request a Quote
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div className="">
            © 2023 GoodFarms Trading Corp. | All Rights Reserved
          </div>
          <div className="">
            <a className="" href="#">
              Privacy Policy
            </a>
            <span> | </span>
            <a className="" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
