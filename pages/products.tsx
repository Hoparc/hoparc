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
          src="/images/blog/blogBanner.png"
          alt="Banner image with colored striped shapes and an image of a book in the middle"
          height={423}
          width={2560}
          className="object-cover object-center max-h-64 w-full"
          priority
        />
        <div className="bg-blue-350 w-full">
          <div className="max-w-screen-xl m-auto w-11/12">
            <h1 className="text-3xl sm:text-5xl text-center p-3 font-bold uppercase text-white">
              Our Products
            </h1>
          </div>
        </div>
        <div className="max-w-screen-xl m-auto w-11/12 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-12 mb-20">
            <div className="col-span-12 lg:col-span-10">
              <div className="flex flex-row justify-center">
                <Link href="/blogs">
                  <button className="hover:border-b-green-450 hover:border-b-4 block bg-white rounded-t-xl font-roboto text-gray-650 dark:text-white leading-5 text-accent-4 text-base md:text-lg tracking-wide hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4 p-4 hover:text-white hover:bg-blue-550">
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
                        "hover:border-b-green-450 hover:border-b-4 block font-roboto bg-white rounded-t-xl text-gray-650 dark:text-white text-base md:text-lg leading-5 text-accent-4 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-8 p-4 hover:text-white hover:bg-blue-550",
                        { underline: activeCategory === category.slug?.current }
                      )}
                    >
                      {category.name}
                    </button>
                  </Link>
                ))}
              </div>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 columns-1 gap-8 md:columns-2 xl:columns-2">
                  {filteredProducts.map((product) => {
                    return (
                      <Fragment key={product.name}>
                        <div className=" bg-white rounded-xl shadow-md  hover:shadow-lg">
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
                              <h2 className="font-bold text-xl">
                                {product.name}
                              </h2>
                              <Link
                                key={product.slug?.current}
                                href={`/product/${product.slug?.current}`}
                                className="text-md font-semibold text-blue-450 hover:text-blue-550 inline-flex items-center space-x-1 md:space-x-3"
                              >
                                Learn More
                                <HiArrowRight className="inline w-4 h-4 ml-2 text-blue-450" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              ) : (
                <div className="text-sm">No blogs found.</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
