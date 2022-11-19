import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import client from "../apollo-client";
import {
  LocationFragment,
  AllLocationsQuery,
  AllLocationsDocument,
} from "../graphql-operations";

import ContactForm from "../components/contact/ContactForm";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const { data: locationData } = await client.query<AllLocationsQuery>({
    query: AllLocationsDocument,
  });

  const allLocation: LocationFragment[] = locationData.allLocation;
  const locations = allLocation;

  return {
    props: {
      locations,
    },
  };
};

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact | Hands on Physiotherapy and Rehab Centre</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#327CDF" key="theme" />
        <meta
          name="description"
          content="Contact page for Hands on Physiotherapy and Rehab Centre"
        />
        <meta
          name="keywords"
          content="hands on physiotherapy and rehab centre contact"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="min-h-screen flex flex-col" id="contact">
        <Image
          src="/images/contact/contactBanner.png"
          alt="Banner image with colored striped shapes and an image of someone holding a phone the middle"
          height={423}
          width={2560}
          className="object-cover object-center max-h-64 w-full"
          priority
        />
        <div className="bg-blue-550 w-full">
          <div className="max-w-screen-xl m-auto w-11/12">
            <h1 className="text-3xl sm:text-5xl text-center py-6 font-bold  text-white">
              Contact Us
            </h1>
          </div>
        </div>

        <div className="max-w-screen-xl m-auto w-95% sm:w-11/12">
          <nav className="flex my-10" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-lg font-medium md:ml-2 dark:hover:text-white  cursor-pointer text-gray-750 dark:text-white hover:text-blue-450"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-lg font-medium md:ml-2 dark:hover:text-white cursor-pointer text-gray-750 dark:text-white hover:text-blue-450">
                    Contact Us
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="my-5">
            <p className="font-roboto text-left text-black text-lg mb-4">
              Feel free to fill in the form below or contact us directly with
              any questions you may have or with any scheduling inquiries. We
              keep your information private and will not share it with third
              parties.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;