import { GetStaticProps, NextPage } from "next";
import Image from "next/image";

import client from ".././apollo-client";
import { AllServicesDocument, AllServicesQuery } from ".././graphql-operations";

import { PortableText } from "@portabletext/react";
import Head from "next/head";

type ServicesProps = {
  services: AllServicesQuery["allService"];
};

export const getStaticProps: GetStaticProps<ServicesProps> = async () => {
  const { data: serviceData } = await client.query<AllServicesQuery>({
    query: AllServicesDocument,
  });
  return {
    props: {
      services: serviceData?.allService ?? [],
    },
    revalidate: 200,
  };
};

const Services: NextPage<ServicesProps> = ({ services }: ServicesProps) => {
  return (
    <>
      <Head>
        <title>Services | Hands on Physiotherapy and Rehab Centre</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#327CDF" />
        <meta
          name="description"
          content="Services at Hands on Physiotherapy and Rehab Centre"
        />
        <meta
          name="keywords"
          content="Services, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 ">
        <div className="flex pb-12 flex-col items-center justify-center">
          <h1 className="mt-10 flex flex-col gap-3 text-5xl text-left font-bold uppercase text-blue-350 ">
            Our Services
          </h1>
        </div>
        <div className="mt-6">
          {services.map((service) => {
            return (
              <div
                key={service.name}
                className="flex flex-col md:flex-row py-12 [&:not(:last-child)]:border-b border-b-zinc-500"
              >
                <div className="relative rounded-md flex items-center justify-center py-8 px-4">
                  <div className="w-[400px] min-h-[400px] max-h-[400px] relative">
                    {service.image?.asset?.url && (
                      <Image
                        src={service.image.asset.url}
                        alt={service.name ?? "Service image"}
                        className="object-cover"
                        fill
                      />
                    )}
                  </div>
                </div>
                <div className="pt-8 md:pt-0 flex-1 flex flex-col pl-0 md:pl-12 mx-20">
                  <h2 className="text-xl font-bold sm:text-2xl mb-4">
                    {service.name}
                  </h2>
                  <PortableText
                    value={service?.detailsRaw}
                    components={{
                      block: {
                        normal: ({ children }) => {
                          return (
                            <p className="mb-4 font-light text-black">
                              {children}
                            </p>
                          );
                        },
                      },
                    }}
                  />
                  <button className="inline-block py-2 px-3 bg-blue-350 hover:bg-green-350 text-white">
                    Book Appointment
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
