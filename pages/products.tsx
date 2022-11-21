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
  AllProductCategoriesDocument,
  AllProductCategoriesQuery,
  AllProductsDocument,
  AllProductsQuery,
  LocationFragment,
} from ".././graphql-operations";

import cn from "clsx";
import { HiArrowRight } from "react-icons/hi";

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-12 mb-20">
            <div className="col-span-12 lg:col-span-12">
              <div className="flex flex-row flex-wrap justify-center gap-y-3">
                <Link href="/products">
                  <button className="dark:bg-blue-550 border-b-gray-450 border-b-4 hover:border-b-green-450 hover:border-b-4 block bg-white dark:hover:text-blue-850 rounded-t-lg font-roboto text-gray-650 dark:text-white leading-5 text-accent-4 text-xs md:text-lg tracking-wide hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 p-2 hover:text-white hover:bg-blue-550 dark:hover:bg-blue-350">
                    All
                  </button>
                </Link>
                {categories?.map((category) => (
                  <Link
                    key={category.slug?.current}
                    href={`/products?category=${category?.slug?.current}`}
                  >
                    <button
                      className={cn(
                        " dark:bg-blue-550 border-b-gray-450 border-b-4 hover:border-b-green-450 hover:border-b-4 bg-white rounded-t-lg font-roboto text-gray-650 dark:text-white dark:hover:text-blue-850 leading-5 text-accent-4 text-xs md:text-lg tracking-wide hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 p-2 hover:text-white hover:bg-blue-550 dark:hover:bg-blue-350",
                        { underline: activeCategory === category.slug?.current }
                      )}
                    >
                      {category.name}
                    </button>
                  </Link>
                ))}
              </div>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 columns-1 gap-8 md:columns-2 xl:columns-2 mt-8">
                  {filteredProducts.map((product) => {
                    return (
                      <Fragment key={product.name}>
                        <div className="bg-white dark:bg-gray-800 dark:border dark:border-1 dark:border-slate-700 rounded-xl shadow-md">
                          <div className="mb-1 relative rounded-lg overflow-hidden">
                            <div className="h-[250px] relative">
                              {product.image?.asset?.url && (
                                <Image
                                  src={product.image.asset.url}
                                  alt={`Image for ${product.name}`}
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
                              <h2 className="font-bold font-roboto text-xl text-gray-850 dark:text-white">
                                {product.name}
                              </h2>
                              <Link
                                key={product.slug?.current}
                                href={`/product/${product.slug?.current}`}
                                className="text-md text-center rounded-lg w-full font-button bg-blue-250 dark:bg-blue-550 p-3 hover:bg-green-350 text-blue-350 dark:text-white hover:text-blue-550"
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
                <div className="text-sm">No products found.</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
