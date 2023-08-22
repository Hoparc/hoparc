import { Fragment, useMemo, useState } from "react";
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
import { Listbox } from "@headlessui/react";
import { NextSeo } from "next-seo";

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
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectedCategory = (selectedCategory: string) => {
    setSelectedCategory(selectedCategory);
    router.push({
      pathname: "/services",
      query: { category: selectedCategory.toLowerCase() },
    });
  };

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
      <NextSeo
        title="Physiotherapy Services - Hands on Physiotherapy and Rehab Centre"
        description="We offer a range of services such as acupuncture, chiropractor, hot stone physiotherapy, massage therapy, pelvic health physiotherapy, physiotherapy, and thai massage."
        canonical="https://hoparc.com/services"
        openGraph={{
          url: "https://hoparc.com/services",
          title:
            "Physiotherapy Services - Hands on Physiotherapy and Rehab Centre",
          description: `"We offer a range of services such as acupuncture, chiropractor, hot stone physiotherapy, massage therapy, pelvic health physiotherapy, physiotherapy, and thai massage."`,
          site_name: "Hands on Physiotherapy and Rehab Centre",
          type: "website",
          locale: "en_CA",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "physiotherapy services, acupuncture, chiropractor, hot stone physiotherapy, massage therapy, pelvic health physiotherapy, physiotherapy, thai massage rehab centre, rehab,",
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
          </div>
        </div>
        <div className="max-w-screen-xl m-auto w-11/12 ">
          <div className="w-full sm:w-1/2 mx-auto mt-5">
            <Listbox value={selectedCategory} onChange={handleSelectedCategory}>
              <div className="relative">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 mt-10 text-left bg-white rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  <span className="block truncate">
                    {selectedCategory || "All Categories"}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      style={{ transform: "rotate(180deg)" }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.293 7.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L7.707 8.121a1 1 0 01-1.414-1.414z"
                      />
                    </svg>
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-hidden text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <Listbox.Option
                    key="all-categories"
                    value=""
                    className={({ active }) =>
                      cn(
                        active ? "text-white bg-blue-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-10 pr-4"
                      )
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={cn(
                            selected
                              ? "font-semibold after:content-[''] after:block  after:w-full after:mx-auto  after:h-1  after:bg-green-350  "
                              : "font-normal",
                            "block truncate w-fit"
                          )}
                        >
                          All Categories
                        </span>
                      </>
                    )}
                  </Listbox.Option>

                  {categories?.map((category) => (
                    <Listbox.Option
                      key={category.slug?.current}
                      value={category.name}
                      className={({ active }) =>
                        cn(
                          active ? "text-white bg-blue-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-10 pr-4"
                        )
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={cn(
                              selected
                                ? "font-semibold after:content-[''] after:block  after:w-full after:mx-auto  after:h-1  after:bg-green-350  "
                                : "font-normal",
                              "block truncate w-fit"
                            )}
                          >
                            {category.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>
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
                              Learn More
                              <HiArrowRight className="inline w-4 h-4 ml-2 text-blue-550 dark:text-white dark:text-inherit" />
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
