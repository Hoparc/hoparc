import Head from "next/head";

import { NextPage } from "next";

import privacypolicy from "../utils/data/privacypolicy";

import { Disclosure, Transition } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-150">
      <Head>
        <title>Privacy Policy | Hands on Physiotherapy and Rehab Centre</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#0072C6" />
        <meta
          name="description"
          content="Privacy Policy at Hands on Physiotherapy and Rehab Centre"
        />
        <meta
          name="keywords"
          content="privacy policy, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Navbar />
      <div className="mx-5 lg:mx-64 my-12 md:my-96 lg:my-24">
        <div>
          <p className="mb-5 leading-6 text-lg sm:text-xl ">
            The protection of personal and personal health information is an
            important principle to HOPARC. We are committed to collecting,
            using, and disclosing personal and personal health information
            responsibly and only to the extent necessary for the services we
            provide.
          </p>
        </div>
        <h3 className="text-center text-4xl mt-8 mb-4">Terms Of Use</h3>
        {privacypolicy.map((policy, index) => (
          <div className="my-2.5" key={index}>
            <Disclosure as="div" className="rounded-md">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black rounded-lg hover:bg-green-350 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <span>{policy.policy}</span>
                    <HiChevronUp
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-500 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black">
                      {policy.text}
                      {policy.text2}
                      {policy.text3}
                      {policy.text4}
                      {policy.text5}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
