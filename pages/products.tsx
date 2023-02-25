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
  AllProductCategoriesDocument,
  AllProductCategoriesQuery,
  AllProductsDocument,
  AllProductsQuery,
  LocationFragment,
} from ".././graphql-operations";

import cn from "clsx";
import { HiArrowRight } from "react-icons/hi";
import { Listbox } from "@headlessui/react";

type ProductsProps = {
  products: AllProductsQuery["allProduct"];
  categories: AllProductCategoriesQuery["allProductCategory"];
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
  const [
    { data: productData },
    { data: productCategoryData },
    { data: locationData },
  ] = await Promise.all([
    client.query<AllProductsQuery>({
      query: AllProductsDocument,
    }),
    client.query<AllProductCategoriesQuery>({
      query: AllProductCategoriesDocument,
    }),
    client.query<AllLocationsQuery>({
      query: AllLocationsDocument,
    }),
  ]);

  const copy = [...(productData?.allProduct ?? [])];

  return {
    props: {
      products: copy.sort((a, b) => (a.name || "").localeCompare(b.name || "")),
      categories: productCategoryData?.allProductCategory ?? [],
      locations: locationData?.allLocation ?? [],
    },
    revalidate: 200,
  };
};

const Products: NextPage<ProductsProps> = ({
  products,
  categories,
}: ProductsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectedCategory = (selectedCategory: string) => {
    setSelectedCategory(selectedCategory);
    router.push({
      pathname: "/products",
      query: { category: selectedCategory.toLowerCase() },
    });
  };

  const router = useRouter();
  const { category: activeCategory } = router.query;
  const filteredProducts = useMemo(() => {
    return activeCategory
      ? products.filter((product) =>
        product.category?.some(
          (category) => category?.slug?.current === activeCategory
        )
      )
      : products;
  }, [activeCategory, products]);

  return (
    <>
      <Head>
        <title>Products | Hands on Physiotherapy and Rehab Centre</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#327CDF" />
        <meta
          name="description"
          content="Products at Hands on Physiotherapy and Rehab Centre"
        />
        <meta
          name="keywords"
          content="products, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>

      <section className="min-h-screen" id="products">
        <Image
          src="/images/products/productBanner.png"
          alt="Banner image with colored striped shapes and an image of a book in the middle"
          height={423}
          width={2560}
          className="object-cover object-center max-h-64 w-full"
          priority
        />
        <div className="bg-blue-550 w-full">
          <div className="max-w-screen-xl m-auto w-11/12">
            <h1 className="text-3xl sm:text-5xl text-center py-6 font-roboto font-bold text-white">
              Our Products
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
                            selected ? "font-semibold after:content-[''] after:block  after:w-full after:mx-auto  after:h-1  after:bg-green-350  " : "font-normal", "block truncate w-fit"
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
                              selected ? "font-semibold after:content-[''] after:block  after:w-full after:mx-auto  after:h-1  after:bg-green-350  " : "font-normal", "block truncate w-fit"

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
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 columns-1 gap-8 md:columns-2 xl:columns-2 my-20">
              {filteredProducts.map((product) => {
                return (
                  <Fragment key={product.name}>
                    <div className="flex flex-col shadow-md">
                      <div className="h-full flex flex-col">
                        {product.image?.asset?.url && (
                          <div className="w-full relative pt-52">
                            <Image
                              className="absolute top-0 w-full h-full object-cover rounded-t-lg "
                              src={product.image.asset.url}
                              alt={`Image for ${product.name}`}
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
                                {product.name}
                              </h2>
                            </div>
                            <Link
                              key={product.slug?.current}
                              href={`/product/${product.slug?.current}`}
                              className="text-md font-button text-blue-550 dark:text-white dark:hover:text-blue-550 inline-flex items-center bg-blue-250 dark:bg-blue-950 p-2 mb-4 rounded-md hover:bg-green-350 w-fit"
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
            <div className="text-sm">No products found.</div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
