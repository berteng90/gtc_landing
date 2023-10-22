import Link from "next/link";
import Image from "next/image";

export const Registration = () => {
  return (
    <div className="flex flex-col md:flex-row md:min-h-screen text-gray-800">
      <div className="hidden h-screen bg-gray-100 text-center md:flex md:w-1/2">
        <div className="flex flex-col items-center justify-center h-full">
          <Link href={"/"} className="flex flex-col items-center">
            <Image
              width={150}
              height={150}
              quality={100}
              src="/Goodfarms Logo.svg"
              alt="GoodFarms Logo"
            />
          </Link>
          <span className="my-6 text-3xl font-semibold leading-10 text-green-500">
            GoodFarms Trading Corporation
          </span>
          <h1 className="font-bold mt-5 text-3xl leading-tight text-gray-600">
            <span className="relative inline-block whitespace-nowrap font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-green-500 to-amber-300">
              Improving Farmer Lives.
            </span>
          </h1>
        </div>
      </div>
      <div className="flex-grow p-4 lg:m-10">
        <form className="max-w-screen-md mx-auto p-6 bg-white shadow-lg rounded-md">
          <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Register</h1>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block">First Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
            <div>
              <label className="block">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
          </div>
          <div>
            <label className="block">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className="block">Email Address</label>
            <input
              type="email"
              placeholder="info@example.com"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className="block">Password</label>
            <input
              type="password"
              placeholder="******"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block">Gender</label>
              <div className="relative mt-2 bg-gray-100 rounded-lg">
                <input
                  className="peer hidden"
                  type="checkbox"
                  name="gender"
                  id="select-1"
                />
                <label
                  htmlFor="select-1"
                  className="flex cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring"
                >
                  Select Option
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="pointer-events-none absolute right-5 top-3 h-4 text-gray-600 transition peer-checked:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                  <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                    Male
                  </li>
                  <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                    Female
                  </li>
                  <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                    Other
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <label className="block">
                Phone: <span className="text-sm text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="+543 5445 0543"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
          </div>
          <div className="mt-3">
            <input type="checkbox" id="checkbox1" checked={true} />
            <label htmlFor="checkbox1" className="text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" target="_blank" className="text-blue-600">
                Terms and Conditions
              </a>
            </label>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="w-full h-12 bg-green-500 rounded-md text-white font-semibold"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
