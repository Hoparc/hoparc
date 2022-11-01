import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import client from ".././apollo-client";
import {
  AllServiceCategoriesDocument,
  AllServiceCategoriesQuery,
  AllServicesDocument,
  AllServicesQuery,
} from ".././graphql-operations";

import { useMemo } from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

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
    revalidate: 86400,
  };
};

export default function Services({ services, categories }: ServicesProps) {
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
      <Navbar />
      <section className="bg-slate-150">
        <div className="flex pb-12 flex-col items-center justify-center">
          <h2 className="my-5 font-bold uppercase tracking-wide text-3xl bg-gradient-to-r from-blue-350 via-green-350 to-blue-550 bg-clip-text fill-transparent [-webkit-text-fill-color:transparent]">
            Our Services
          </h2>
        </div>
        <div className="col-span-8 lg:col-span-2">
          <Link href="/services">
            <button className="block leading-5 text-blue-350 text-base no-underline font-bold tracking-wide hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4">
              All Categories
            </button>
          </Link>
          {categories?.map((category) => (
            <Link
              key={category.slug?.current}
              href={`/services?category=${category?.slug?.current}`}
            >
              <button className="block text-sm leading-5 text-blue-550 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-2">
                {category.name}
              </button>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          {filteredServices.map((service) => {
            return (
              <div
                key={service.name}
                className="flex flex-col md:flex-row py-12"
              >
                <div className="bg-primary-light relative rounded-md flex items-center justify-center py-8 px-4">
                  <div className="w-[300px] min-h-[300px] max-h-[300px] relative">
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
                  <p className="mb-4 font-light text-black">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
