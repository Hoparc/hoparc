import { useMemo } from "react";

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
      <section className="min-h-screen">
        <Image
          src="/images/products/banner2.webp"
          alt=""
          height={10}
          width={100000}
          className="object-cover object-center max-h-52 w-full"
          priority
        />

        <div className="bg-blue-350 w-full">
          <div className="max-w-screen-xl m-auto w-11/12">
            <h2 className="text-3xl text-left p-3 font-bold uppercase text-white">
              our services
            </h2>
          </div>
        </div>
        <div className="max-w-screen-xl m-auto w-11/12 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-12 mb-20">
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
                <div className="columns-1 gap-x-4 md:columns-2 xl:columns-3">
                  {filteredServices.map((service) => {
                    return (
                      <div className="bg-blue-550 rounded-lg shadow-md shadow-slate-400 hover:bg-green-350">
                        <Link
                          key={service.slug?.current}
                          href={`/service/${service.slug?.current}`}
                        >
                          <div className="mb-4 relative cursor-pointer rounded-sm overflow-hidden">
                            <div className="bg-transparent py-3 px-3">
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
                                  sizes="(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                  33vw"
                                />
                              )}
                            </div>
                          </div>
                        </Link>
                      </div>
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
