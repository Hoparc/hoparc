import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";

import termsofuse from "../utils/data/termsofuse";

import { Disclosure, Transition } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const TermsOfUse: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-150">
      <Head>
        <title>Terms of Use | Hands on Physiotherapy and Rehab Centre</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#0072C6" />
        <meta
          name="description"
          content="Terms of Use at Hands on Physiotherapy and Rehab Centre"
        />
        <meta
          name="keywords"
          content="terms of use, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Navbar />
      <div className="mx-5 lg:mx-64 my-12 md:my-96 lg:my-24">
        <div>
          <p className="mb-5 leading-6 text-lg sm:text-xl ">
            Welcome to the Hands On Physiotherapy and Rehab Centre website. By
            accessing, browsing or using this Site, you acknowledge that you
            have read, understood and agreed to be bound by these Terms of Use
            (these “Terms”). If you do not agree to these Terms, you should not
            use or access this Site.
          </p>
          <p className="mb-5 leading-6 text-lg sm:text-xl">
            Hands On Physiotherapy and Rehab Centre reserves the right to revise
            these Terms at any time by updating this posting. You are encouraged
            to review these Terms each time you use the Site because your use of
            the Site after the posting of changes will constitute your
            acceptance of the changes. We grant you a personal, limited,
            non-transferable non-exclusive, license to access and use the Site.
            We reserve the right, in our sole discretion and without notice to
            you, to revise the products and services available on the Site and
            to change, suspend or discontinue any aspect of the Site and we will
            not be liable to you or to any third party for doing so. We may also
            impose rules for and limits on use of the Site or restrict your
            access to part, or all, of the Site without notice or penalty. Your
            continued use of the Site will constitute your acceptance of any
            such changes
          </p>
        </div>
        <h3 className="text-center text-4xl mt-8 mb-4">Terms Of Use</h3>
        {termsofuse.map((terms, index) => (
          <div className="my-2.5" key={index}>
            <Disclosure as="div" className="rounded-md">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black rounded-lg hover:bg-green-350 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <span>{terms.term}</span>
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
                      {terms.text}
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

export default TermsOfUse;
