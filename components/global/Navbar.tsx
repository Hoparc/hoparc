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
        className="bg-white shadow-lg w-full fixed top-0 z-10"
      >
        {({ open }) => (
          <>
            <div className="mx-auto ">
              <div className="relative flex items-center justify-center w-full ">
                {/* Mobile menu button */}
                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden  justify-self-start">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-350 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                        width={85}
                        height={100}
                      />

                      <div className="flex flex-col justify-center pl-2 items-left">
                        <h2 className="font-merriweather hidden font-bold text-xl flex-1 text-blue-350 capitalize mobile:block">
                          hands on
                        </h2>
                        <div className="">
                          <h2 className="font-merriweather hidden font-bold text-xl	flex-1 text-blue-350 capitalize mobile:block">
                            physiotherapy
                          </h2>
                        </div>

                        <h3 className="font-merriweather hidden text-xs font-regular flex-1 text-green-350 uppercase mobile:block">
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
                            className="px-3 py-2 rounded-md font-inter text-sm text-blue-350 font-medium hover:underline hover:text-green-350"
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
                <div className="px-2 pt-2 pb-3 absolute bg-blue-350 text-blue-900 w-full">
                  {navigation.map((item) => (
                    <div key={item.id}>
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="bg-blue-350 text-white hover:bg-green-350 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
      <div className="h-5.8rem"></div>
    </>
  );
}

export default Navbar;
