import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { AllServicesQuery } from "../../../graphql-operations";
import { PortableText } from "@portabletext/react";

export type ServiceProps = {
  service: AllServicesQuery["allService"][0] | undefined;
};

const siteTitle = "Hands on Physiotherapy and Rehab Centre";

function Service({ service }: ServiceProps) {
  return (
    <>
      <Head>
        <title>{service?.name + " | " + siteTitle}</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#327CDF" />
        <meta
          name="description"
          content={`${service?.name} Hands on Physiotherapy and Rehab Centre`}
        />
        <meta
          name="keywords"
          content="services, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Image
        src="/images/ourServices/serviceBanner.png"
        alt="Banner image with colored striped shapes and an image of a book in the middle"
        height={423}
        width={2560}
        className="object-cover object-center max-h-64 w-full"
        priority
      />
      <div className="bg-blue-550 w-full">
        <div className="max-w-screen-xl m-auto w-11/12">
          <h1 className="text-3xl sm:text-5xl text-center py-6 font-roboto font-bold text-white">
            Our Services
          </h1>
        </div>
      </div>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-40 lg:px-40 py-20 sm:py-28 lg:py-28 min-h-screen flex flex-col">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex flex-wrap items-center gap-y-3 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-lg font-bold font-roboto md:ml-2  cursor-pointer text-gray-750 dark:text-white hover:text-blue-550 dark:hover:text-blue-350"
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
                <Link
                  href="/services"
                  className="ml-1 text-lg font-regular font-roboto md:ml-2 dark:hover:text-blue-350 cursor-pointer text-gray-750 dark:text-white hover:text-blue-550"
                >
                  Services
                </Link>
              </div>
            </li>
            <li aria-current="page">
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
                <span className="ml-1 text-lg font-roboto font-regular md:ml-2 cursor-pointer text-gray-750 dark:text-white dark:hover:text-blue-350 hover:text-blue-550">
                  {service?.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col md:flex-row items-start justify-between my-12 gap-y-4">
          <h1 className="font-roboto font-bold text-4xl tracking-tight dark:text-white text-gray-850">
            {service?.name}
          </h1>
          <Link
            href="/request-appointment"
            className="font-button px-5 py-3 bg-blue-750 text-white rounded-lg hover:bg-green-350 hover:text-blue-550"
          >
            Request Appointment
          </Link>
        </div>

        <div className="w-full">
          <Image
            src={service?.image?.asset?.url ?? ""}
            alt={`An image of ${service?.name}`}
            width={400}
            height={400}
            className="object-cover rounded-lg shadow-2xl w-full h-56"
            priority
          />
        </div>

        {service?.detailsRaw && service?.detailsRaw?.length > 0 && (
          <div className="my-12 animate-fade-in-up text-gray-850 dark:text-white font-roboto text-base">
            <h2 className="text-lg font-bold font-roboto my-4">
              Everything you need to know about {service.name}
            </h2>
            <PortableText
              value={service?.detailsRaw}
              components={{
                block: {
                  normal: ({ children }) => {
                    return <p className="mb-4">{children}</p>;
                  },
                },
              }}
            />
          </div>
        )}
      </section>
    </>
  );
}
export default Service;
