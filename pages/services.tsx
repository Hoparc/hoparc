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

import cn, { clsx } from "clsx";

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

      <section className="min-h-screen" id="services">
        <Image
          src="/images/ourServices/serviceBanner.png"
          alt="Banner image with colored striped shapes on the sides and an image of a person getting a massage in the middle"
          height={423}
          width={2560}
          className="object-cover object-center max-h-64 w-full"
          priority
          sizes="(max-width: 1600px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        />
        <div className="bg-blue-550 w-full">
          <div className="max-w-screen-xl m-auto w-11/12">
            <h1 className="text-3xl sm:text-5xl text-center py-6 font-roboto font-bold text-white">
              Our Services
            </h1>
            <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mt-10">
              <div className="mr-6 relative">
                <Link
                  href="/services"
                  className=
                  "after:content-[''] after:flex after:bottom-0 after:left-0 after:w-full after:mx-auto after:h-1 after:bg-gray-450 after:absolute hover:after:bg-green-350 inline-block p-4 text-blue-600 hover:text-blue-550 dark:hover:text-green-350 bg-blue-150 rounded-t-lg active dark:bg-purple-950 dark:text-white focus:after:bg-green-350 focus:bg-blue-950 focus:text-green-350"
                >
                  all
                </Link>
              </div>
              {categories?.map((category) => (
                <div className="mr-6 relative">
                  <Link
                    key={category.slug?.current}
                    href={`/services?category=${category?.slug?.current}`}
                    className={cn(
                      "after:content-[''] after:flex after:bottom-0 after:left-0 after:w-full after:mx-auto after:h-1 after:bg-gray-450 after:absolute hover:after:bg-green-350 inline-block p-4 text-blue-600 hover:text-blue-550 dark:hover:text-green-350 bg-blue-150 rounded-t-lg active dark:bg-purple-950 dark:text-white",
                      { ["focus:after:bg-green-350 focus:bg-blue-950 focus:text-green-350"]: activeCategory }
                    )}
                  >
                    {category.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl m-auto w-11/12 ">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 columns-1 gap-8 md:columns-2 xl:columns-2 my-20">
              {filteredServices.map((service) => {
                return (
                  <Fragment key={service.name}>
                    <div className="flex flex-col shadow-md">
                      <div className="h-full flex flex-col">
                        {service.image?.asset?.url && (
                          <div className="w-full relative pt-52">
                            <Image
                              className="absolute top-0 w-full h-full object-cover rounded-t-lg "
                              src={service.image.asset.url}
                              alt={`Image for ${service.name}`}
                              loading="lazy"
                              width={500}
                              height={250}
                              quality={100}
                            />
                          </div>
                        )}

                        <div className="h-full w-full flex flex-col bg-blue-550 rounded-b-lg">

                          <div className="flex flex-col px-4 h-full justify-between">
                            <div className="flex flex-col md:pt-0 pt-4 leading-normal">
                              <h2 className="py-4 text-xl font-roboto font-bold tracking-tight text-white dark:text-white">
                                {service.name}
                              </h2>
                              <p className="font-base font-roboto text-gray-300 dark:text-gray-300">
                                {service.description}
                              </p>
                            </div>
                            <Link
                              key={service.slug?.current}
                              href={`/service/${service.slug?.current}`}
                              className="my-4 text-md text-center rounded-lg w-full font-semibold bg-blue-250 dark:bg-blue-950 dark:text-white p-3 hover:bg-green-350 text-blue-550 hover:text-blue-550 capitalize"
                            >
                              learn more
                            </Link>
                          </div>

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
      </section>
    </>
  );
};

export default Services;
