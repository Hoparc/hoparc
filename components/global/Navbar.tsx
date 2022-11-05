import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import MenuLink from "./MenuLink";
import navigation from "../../utils/data/navigation";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="bg-white shadow-lg w-full fixed top-0 z-10">
        {({ open }) => (
          <>
            <div className="mx-auto ">
              <div className="relative flex items-center justify-center w-full ">
                {/* Mobile menu button */}
                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden  justify-self-start">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-750 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                      <Image src="/images/footer/logo.png" alt="hoparc logo" width={85} height={100} />

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
                          {!item.dropdownOptions ? (
                            <MenuLink
                              href={item.href}
                              className="px-3 py-2 rounded-md font-inter text-sm text-blue-350 font-medium hover:underline hover:text-green-350"
                            >
                              {item.name}
                            </MenuLink>
                          ) : (
                            <Menu as="div" className=" relative">
                              <Menu.Button className="relative flex px-3 py-2 rounded-md font-inter text-sm text-blue-350 font-medium hover:text-green-350">
                                {item.name}
                                <HiChevronDown
                                  className="block h-6 w-6 ml-2 text-accent"
                                  aria-hidden="true"
                                />
                              </Menu.Button>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  {item.dropdownOptions.map((option, index) => (
                                    <Menu.Item key={index}>
                                      {({ active }) => (
                                        <MenuLink
                                          href={`/${item.href}`}
                                          className={`${active && "bg-slate-100"
                                            } block px-4 py-2 text-base text-gray-700'`}
                                        >
                                          {option.name}
                                        </MenuLink>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          )}
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
                      {!item.dropdownOptions ? (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="bg-blue-350 text-white hover:bg-green-350 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ) : (
                        <>
                          <Disclosure.Button
                            key={item.name}
                            className="text-white hover:bg-green-350 block px-3 py-2 rounded-md text-base font-medium"
                          >
                            {item.name}
                          </Disclosure.Button>

                          {item.dropdownOptions.map((option, index) => (
                            <Disclosure.Button
                              key={index}
                              as="a"
                              href={`/${item.href}`}
                              className="block ml-4 px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-350"
                            >
                              {option.name}
                            </Disclosure.Button>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
