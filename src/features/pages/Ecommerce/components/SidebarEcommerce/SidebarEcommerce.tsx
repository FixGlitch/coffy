"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Trash } from "lucide-react";
import {
  categoryItems,
  roastTypeItems,
  originItems,
  sizeItems,
  priceFilter,
} from "./types/coffeeItems";

const SidebarEcommerce = () => {
  const pathname = usePathname();

  return (
    <>
      <aside className="w-64 flex-shrink-0 border-r pr-4 bg-white">
        <h2 className="text-black text-xl font-bold p-6">Coffee Category</h2>
        <ul className="mb-6 flex flex-col gap-1.5">
          {categoryItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`group relative flex items-center gap-2.5 rounded-md mx-10 py-2 font-medium text-black hover:font-semibold duration-300 ease-in-out hover:text-ecommerce-500 ${
                  pathname === item.href
                    ? "text-ecommerce-500 font-semibold "
                    : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col">
          <h2 className="text-black font-semibold p-6">Filter by:</h2>
          <ul className="mb-6 flex flex-col gap-1.5">
            <div className="group relative flex items-center gap-2.5 rounded-md mx-5 px-4 py-2 text-black font-semibold">
              Type:
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                  fill=""
                />
              </svg>
            </div>
            <div
              className={`translate transform overflow-hidden ${
                !open && "hidden"
              }`}
            >
              <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                {roastTypeItems.map((item) => (
                  <li key={item.value}>
                    <label className="text-black hover:text-ecommerce-500 hover:font-bold mx-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mr-2"
                        value={item.value}
                      />
                      {item.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </ul>
          <ul className="mb-6 flex flex-col gap-1.5">
            <div className="group relative flex items-center gap-2.5 rounded-md mx-5 px-4 py-2 text-black font-semibold">
            Origin
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                  fill=""
                />
              </svg>
            </div>
            <div
              className={`translate transform overflow-hidden ${
                !open && "hidden"
              }`}
            >
              <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                {originItems.map((item) => (
                  <li key={item.value}>
                    <label className="text-black hover:text-ecommerce-500 hover:font-bold mx-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mr-2"
                        value={item.value}
                      />
                      {item.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </ul>
          <ul className="mb-6 flex flex-col gap-1.5">
            <div className="group relative flex items-center gap-2.5 rounded-md mx-5 px-4 py-2 text-black font-semibold">
              Size:
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                  fill=""
                />
              </svg>
            </div>
            <div
              className={`translate transform overflow-hidden ${
                !open && "hidden"
              }`}
            >
              <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                {sizeItems.map((item) => (
                  <li key={item.value}>
                    <label className="text-black hover:text-ecommerce-500 hover:font-bold mx-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mr-2"
                        value={item.value}
                      />
                      {item.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </ul>
          <ul className="mb-6 flex flex-col gap-1.5">
            <div className="group relative flex items-center gap-2.5 rounded-md mx-5 px-4 py-2 text-black font-semibold">
              Price:
            </div>
            <div
              className={`translate transform overflow-hidden ${
                !open && "hidden"
              }`}
            >
              <div className="my-4 flex flex-col gap-1.5 mx-5">
                <input
                  type="range"
                  className="w-full"
                  min="0"
                  max="1000"
                  step="10"
                />
                <div className="flex justify-between text-black mx-5">
                  <span>${priceFilter.min}</span>
                  <span>${priceFilter.max}</span>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div className="bg-white flex items-center justify-between py-10 mx-5 mt-auto">
          <button className="w-[60%] bg-ecommerce-500 text-white font-semibold p-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-ecommerce-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ecommerce-400 focus:ring-opacity-50">
            Apply
          </button>

          <button className="p-4 rounded-lg border border-ecommerce-900 shadow-md transition duration-300 ease-in-out transform hover:bg-danger-secondaryHover hover:scale-105 hover:border-danger-primary focus:outline-none focus:ring-2 focus:ring-danger-primary focus:ring-opacity-50">
            <Trash
              color="#311a5b"
              size={20}
              className="hover:stroke-danger-primary transition duration-300 ease-in-out"
            />
          </button>
        </div>
      </aside>
    </>
  );
};

export default SidebarEcommerce;
