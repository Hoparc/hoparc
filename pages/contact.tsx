import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import client from "../apollo-client";
import {
  LocationFragment,
  AllLocationsQuery,
  AllLocationsDocument,
} from "../graphql-operations";

import ContactForm from "../components/contact/ContactForm";

import { NextSeo } from "next-seo";

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
      <NextSeo
        title="Contact - Hands on Physiotherapy and Rehab Centre"
        description="Get in contact with us via email or form."
        canonical="https://hoparc.com/contact"
        openGraph={{
          url: "https://hoparc.com/contact",
          title: "Contact - Hands on Physiotherapy and Rehab Centre",
          description: "Get in contact with us via email or form.",
          site_name: "Hands on Physiotherapy and Rehab Centre",
          type: "website",
          locale: "en_CA",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "physiotherapy, rehab centre, rehab,",
          },
          {
            name: "author",
            content: "Hands on Physiotherapy and Rehab Centre",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:locale",
            content: "en_CA",
          },
          {
            property: "og:site_name",
            content: "Hands on Physiotherapy and Rehab Centre",
          },
        ]}
      />

      <section className="min-h-screen flex flex-col" id="contact">
        <Image
          src="/images/contact/contactBanner.png"
          alt="Banner image with colored striped shapes and an image of someone holding a phone in the middle"
          height={423}
          width={2560}
          className="object-cover object-center max-h-64 w-full"
          priority={true}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
        <div className="bg-blue-550 w-full">
          <div className="max-w-screen-xl m-auto w-11/12">
            <h1 className="text-3xl sm:text-5xl text-center py-6 font-bold font-roboto  text-white">
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
                  className="inline-flex items-center text-lg font-roboto font-bold md:ml-2 dark:hover:text-blue-450  cursor-pointer text-gray-750 dark:text-white hover:text-blue-550"
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
                  <span className="ml-1 text-lg font-regular font-roboto md:ml-2 dark:hover:text-blue-450 cursor-pointer text-gray-750 dark:text-white hover:text-blue-550">
                    Contact Us
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="my-5">
            <p className="font-roboto text-left text-gray-850 dark:text-white text-base mb-4">
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
