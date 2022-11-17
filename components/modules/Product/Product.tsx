import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { AllProductsQuery } from "../../../graphql-operations";
import { PortableText } from "@portabletext/react";

import { format, parse } from "date-fns";

import { HiChevronRight } from "react-icons/hi";

export type BlogProps = {
  product: AllProductsQuery["allProduct"][0] | undefined;
};

const siteTitle = "Hands on Physiotherapy and Rehab Centre";

function Product({ product }: BlogProps) {
  return (
    <>
      <Head>
        <title>{product?.name + " | " + siteTitle}</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#327CDF" />
        <meta
          name="description"
          content={`${product?.name} Hands on Physiotherapy and Rehab Centre`}
        />
        <meta
          name="keywords"
          content="products, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-40 lg:px-40 py-20 sm:py-28 lg:py-28 min-h-screen flex flex-col">
        <div className="flex flex-row items-center gap-8 flex-none self-stretch max-w-6xl h-6">
          <Link href="/">
            <span className="flex font-button text-xl mb-2 cursor-pointer text-gray-750 dark:text-white hover:text-blue-550">
              Home
              <HiChevronRight
                className="block h-4 mr-2 mt-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
          <Link href="/products">
            <span className="flex font-button text-xl mb-2 cursor-pointer text-gray-750 dark:text-white hover:text-blue-450">
              Our Products
              <HiChevronRight
                className="block h-4 mr-2 mt-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
          <Link href={product?.slug?.current ?? ""}>
            <span className="flex font-button text-xl self-stretch mb-2 cursor-pointer text-gray-750 dark:text-white hover:text-blue-450">
              {product?.name}
            </span>
          </Link>
        </div>
        <div className="flex justify-between my-12">
          <h1 className="font-monsterrat font-semibold text-4xl tracking-tight">
            {product?.name}
          </h1>
          <Link
            href="/submit-inquiry"
            className="px-6 py-2 bg-blue-750 text-white rounded-lg hover:bg-blue-450"
          >
            Submit Inquiry
          </Link>
        </div>

        <div className="w-full">
          <Image
            src={product?.image?.asset?.url ?? ""}
            alt={`An image of ${product?.name}`}
            width={400}
            height={400}
            className="object-cover rounded-lg shadow-2xl w-full h-56"
            priority
          />
        </div>

        {product?.detailsRaw && product?.detailsRaw?.length > 0 && (
          <div className="my-12 animate-fade-in-up text-gray-850 dark:text-white font-roboto text-base">
            <h2 className="text-lg font-semibold font-monsterrat my-4">
              Everything you need to know about {product.name}
            </h2>
            <PortableText
              value={product?.detailsRaw}
              components={{
                block: {
                  normal: ({ children }) => {
                    return <p className="mb-4">{children}</p>;
                  },
                },
              }}
            />
          </div>
        )}
      </section>
    </>
  );
}
export default Product;
