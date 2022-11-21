import { Fragment, useMemo } from "react";

import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import client from ".././apollo-client";
import {
  AllLocationsDocument,
  AllLocationsQuery,
  AllServiceCategoriesDocument,
  AllServiceCategoriesQuery,
  AllServicesDocument,
  AllServicesQuery,
  LocationFragment,
} from ".././graphql-operations";

import cn from "clsx";
import { HiArrowRight } from "react-icons/hi";

type ServicesProps = {
  services: AllServicesQuery["allService"];
  categories: AllServiceCategoriesQuery["allServiceCategory"];
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<ServicesProps> = async () => {
  const [
    { data: serviceData },
    { data: serviceCategoryData },
    { data: locationData },
  ] = await Promise.all([
    client.query<AllServicesQuery>({
      query: AllServicesDocument,
    }),
    client.query<AllServiceCategoriesQuery>({
      query: AllServiceCategoriesDocument,
    }),
    client.query<AllLocationsQuery>({
      query: AllLocationsDocument,
    }),
  ]);

  const copy = [...(serviceData?.allService ?? [])];

  return {
    props: {
      services: copy.sort((a, b) => (a.name || "").localeCompare(b.name || "")),
      categories: serviceCategoryData?.allServiceCategory ?? [],
      locations: locationData?.allLocation ?? [],
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

      <section className="min-h-screen" id="products">
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
            <h1 className="text-3xl sm:text-5xl text-center py-6 font-bold text-white">
              Our Services
            </h1>
          </div>
        </div>
        <div className="max-w-screen-xl m-auto w-11/12 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-12 mb-20">
            <div className="col-span-12 lg:col-span-12">
              <div className="flex flex-row flex-wrap justify-center gap-y-3">
                <Link href="/services">
                  <button className="dark:bg-blue-550 border-b-gray-450 border-b-4 hover:border-b-green-450 hover:border-b-4 block bg-white dark:hover:text-blue-850 rounded-t-lg font-roboto text-gray-650 dark:text-white leading-5 text-accent-4 text-xs md:text-lg tracking-wide hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 p-2 hover:text-white hover:bg-blue-550 dark:hover:bg-blue-350">
                    All
                  </button>
                </Link>
                {categories?.map((category) => (
                  <Link
                    key={category.slug?.current}
                    href={`/services?category=${category?.slug?.current}`}
                  >
                    <button
                      className={cn(
                        "dark:bg-blue-550 border-b-gray-450 border-b-4 hover:border-b-green-450 hover:border-b-4 bg-white rounded-t-lg font-roboto text-gray-650 dark:text-white dark:hover:text-blue-850 leading-5 text-accent-4 text-xs md:text-lg tracking-wide hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 p-2 hover:text-white hover:bg-blue-550 dark:hover:bg-blue-350",
                        { underline: activeCategory === category.slug?.current }
                      )}
                    >
                      {category.name}
                    </button>
                  </Link>
                ))}
              </div>
              {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 columns-1 gap-8 md:columns-2 xl:columns-2 mt-8">
                  {filteredServices.map((service) => {
                    return (
                      <Fragment key={service.name}>
                        <div className=" bg-white rounded-xl shadow-md">
                          <div className="mb-1 relative rounded-lg overflow-hidden">
                            <div className="h-[250px] relative">
                              {service.image?.asset?.url && (
                                <Image
                                  src={service.image.asset.url}
                                  alt={`Image for ${service.name}`}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                  33vw"
                                  priority
                                />
                              )}
                            </div>
                            <div className="py-4 px-4 gap-y-4 flex flex-col items-start justify-between">
                              <h2 className="font-bold text-xl">
                                {service.name}
                              </h2>
                              <Link
                                key={service.slug?.current}
                                href={`/service/${service.slug?.current}`}
                                className="text-md text-center rounded-lg w-full font-semibold bg-blue-250 p-3 hover:bg-green-350 text-blue-350 hover:text-blue-550"
                              >
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              ) : (
                <div className="text-sm">No services found.</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
