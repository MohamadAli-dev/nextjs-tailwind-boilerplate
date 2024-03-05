"use client";

import { useState } from "react";
import Image from "next/image";

const SearchBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="mt-10 mx-auto flex flex-row w-[65%] items-center justify-between px-2 py-4 sm:px-9 sm:py-4 rounded-2xl border-solid border-[1px] border-[#DEDDF6]"
            >
                <div className="relative">
                    <button
                        id="dropdown-button"
                        onClick={toggleDropdown}
                        className="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 rounded-full"
                        type="button"
                    >
                        All Filters{" "}
                        <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    {isDropdownOpen && (
                        <div
                            id="dropdown"
                            className="absolute z-20 top-10 right-0 left-2 transform bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdown-button"
                            >
                                <li>
                                    <button
                                        type="button"
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Address
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Txn Hash
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Block
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Token
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Domain Name
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                <input
                    type="text"
                    className="w-3/5 outline-none border-none disabled:bg-transparent disabled:opacity-30"
                    placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                />
                <p className="select-none font-medium hidden md:block cursor-pointer">
                    <Image
                        className="inline-block pr-1"
                        src="/enter.svg"
                        alt="enter arrow right"
                        width={20}
                        height={20}
                    />{" "}
                    Enter
                </p>
            </form>
        </>
    );
};

export default SearchBar;
