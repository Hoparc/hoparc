import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useMemo } from "react";

import client from ".././apollo-client";
import {
  AllProductCategoriesDocument,
  AllProductCategoriesQuery,
  AllProductsDocument,
  AllProductsQuery,
} from ".././graphql-operations";

import cn from "clsx";

type ProductsProps = {
  products: AllProductsQuery["allProduct"];
  categories: AllProductCategoriesQuery["allProductCategory"];
};

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
  const [{ data: productData }, { data: productCategoryData }] = await Promise.all([
    client.query<AllProductsQuery>({
      query: AllProductsDocument,
    }),
    client.query<AllProductCategoriesQuery>({
      query: AllProductCategoriesDocument,
    }),
  ]);

  return {
    props: {
      products: productData?.allProduct ?? [],
      categories: productCategoryData?.allProductCategory ?? [],
    },
    revalidate: 200,
  };
};

const Products: NextPage<ProductsProps> = ({ products, categories }: ProductsProps) => {
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
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 min-h-screen">
        <div className="flex pb-12 flex-col items-center justify-center">
          <h1 className="mt-10 flex flex-col gap-3 text-5xl text-left font-bold uppercase text-blue-350 ">
            our products
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20">
          <div className="col-span-8 lg:col-span-2">
            <Link href="/products">
              <button className="block leading-5 text-accent-4 text-base no-underline font-bold tracking-wide hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4">
                All Categories
              </button>
            </Link>
            {categories?.map((category) => (
              <Link
                key={category.slug?.current}
                href={`/products?category=${category?.slug?.current}`}
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
            {filteredProducts.length > 0 ? (
              <div className="columns-1 gap-x-4 md:columns-2 lg:columns-3">
                {filteredProducts.map((product) => {
                  return (
                    <div className=" bg-blue-550 rounded-lg shadow-md shadow-slate-400 hover:bg-green-350">
                      <Link
                        key={product.slug?.current}
                        href={`/products/${product.slug?.current}`}
                      >
                        <div className="mb-4 relative cursor-pointer rounded-lg overflow-hidden">
                          <div className="bg-transparent py-3 px-3">
                            <div className="text-white font-bold">
                              {product.name}
                            </div>
                          </div>
                          <div className="h-[250px] relative">
                            {product.image?.asset?.url && (
                              <Image
                                src={product?.image?.asset?.url}
                                alt={`Image for ${product.name}`}
                                fill
                                className="object-cover"
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
              <div className="text-sm">No products found.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
