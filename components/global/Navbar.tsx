import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { Disclosure, Transition } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";

import navigation from "../../utils/data/navigation";

import MenuLink from "./MenuLink";

function Navbar() {
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-white dark:bg-blue-550 shadow-lg w-full fixed top-0 z-10"
      >
        {({ open }) => (
          <>
            <div className="mx-auto ">
              <div className="relative flex items-center justify-center w-full ">
                {/* Mobile menu button */}
                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden  justify-self-start">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 mr-4 rounded-md dark:text-white hover:text-blue-550 hover:bg-green-350 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiX className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <HiMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Main */}
                <div className=" flex items-center flex-grow w-full mx-4 sm:justify-evenly">
                  {/* Logo */}
                  <Link href="/">
                    <div className="flex flex-row items-left justify-start my-1">
                      <Image
                        src="/images/footer/logo.png"
                        alt="hoparc logo"
                        width={100}
                        height={100}
                        className="h-12 w-12 sm:h-16 sm:w-16 my-auto"
                      />
                      {/* Logo Text */}
                      <div className="flex flex-col justify-center pl-2 items-left my-auto">
                        <h2 className="font-poppins hidden font-bold text-md sm:text-xl leading-4 sm:leading-5  text-blue-350 dark:text-white capitalize mobileSm:block">
                          hands on
                        </h2>
                        <h2 className="font-poppins hidden font-bold text-md sm:text-xl leading-4 sm:leading-5  text-blue-350 dark:text-white capitalize mobileSm:block">
                          physiotherapy
                        </h2>

                        <h3 className="font-roboto font-bold hidden text-tiny leading-3 sm:leading-4 text-green-350 uppercase mobileSm:block">
                          rehab centre - pelvic health
                        </h3>
                      </div>
                    </div>
                  </Link>
                  {/* Menu Items */}
                  <div className="hidden lg:flex flex-grow justify-end">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <div key={item.id} className="flex">
                          <MenuLink
                            href={item.href}
                            className="px-3 py-2 rounded-md font-inter text-sm text-blue-350 dark:text-white font-medium hover:underline hover:text-green-350"
                          >
                            {item.name}
                          </MenuLink>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="lg:hidden relative">
                <div className="pt-4 pb-4 absolute right-0 bg-white dark:bg-blue-550 text-blue-900 w-8/12 mobileXl:w-5/12 text-left rounded-bl-3xl   shadow-lg shadow-slate-700 dark:shadow-black">
                  {navigation.map((item) => (
                    <div key={item.id}>
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="text-blue-350 dark:text-white hover:bg-green-350 hover:text-blue-550 block mx-4 my-4 py-2 px-2 rounded-md text-base font-roboto font-regular"
                      >
                        {item.name}
                      </Disclosure.Button>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      {/* Nav Banner Fix */}
      <div className="block w-full my-14 sm:my-16"></div>
    </>
  );
}

export default Navbar;
