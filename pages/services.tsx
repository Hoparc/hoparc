import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useMemo } from "react";

import client from ".././apollo-client";
import {
  AllServiceCategoriesDocument,
  AllServiceCategoriesQuery,
  AllServicesDocument,
  AllServicesQuery,
} from ".././graphql-operations";

import cn from "clsx";

type ServicesProps = {
  services: AllServicesQuery["allService"];
  categories: AllServiceCategoriesQuery["allServiceCategory"];
};

export const getStaticProps: GetStaticProps<ServicesProps> = async () => {
  const [{ data: serviceData }, { data: serviceCategoryData }] =
    await Promise.all([
      client.query<AllServicesQuery>({
        query: AllServicesDocument,
      }),
      client.query<AllServiceCategoriesQuery>({
        query: AllServiceCategoriesDocument,
      }),
    ]);

  return {
    props: {
      services: serviceData?.allService ?? [],
      categories: serviceCategoryData?.allServiceCategory ?? [],
    },
    revalidate: 200,
  };
};

const Services: NextPage<ServicesProps> = ({
  services,
  categories,
}: ServicesProps) => {
  const router = useRouter();
  const { category: activeCategory } = router.query;
  const filteredServices = useMemo(() => {
    return activeCategory
      ? services.filter((service) =>
          service.category?.some(
            (category) => category?.slug?.current === activeCategory
          )
        )
      : services;
  }, [activeCategory, services]);

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
          content="services, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 min-h-screen">
        <div className="flex pb-12 flex-col items-center justify-center">
          <h1 className="mt-10 flex flex-col gap-3 text-5xl text-left font-bold uppercase text-blue-350 ">
            Our Services
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20">
          <div className="col-span-8 lg:col-span-2">
            <Link href="/services">
              <button className="block leading-5 text-accent-4 text-base no-underline font-bold tracking-wide hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4">
                All Categories
              </button>
            </Link>
            {categories?.map((category) => (
              <Link
                key={category.slug?.current}
                href={`/services?category=${category?.slug?.current}`}
              >
                <button
                  className={cn(
                    "block text-sm leading-5 text-accent-4 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 text-black mb-2",
                    { underline: activeCategory === category.slug?.current }
                  )}
                >
                  {category.name}
                </button>
              </Link>
            ))}
          </div>

          <div className="col-span-12 lg:col-span-10">
            {filteredServices.length > 0 ? (
              <div className="columns-1 gap-x-4 md:columns-2 lg:columns-3">
                {filteredServices.map((service) => {
                  return (
                    <Link
                      key={service.slug?.current}
                      href={`/service/${service.slug?.current}`}
                    >
                      <div className="mb-4 relative cursor-pointer rounded-sm overflow-hidden">
                        <div className="bg-blue-350 py-3 px-3">
                          <div className="text-white font-bold">
                            {service.name}
                          </div>
                        </div>
                        <div className="h-[250px] relative">
                          {service.image?.asset?.url && (
                            <Image
                              src={service.image.asset.url}
                              alt={`Image for ${service.name}`}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-sm">No services found.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
