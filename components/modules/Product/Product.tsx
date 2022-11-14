import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { AllProductsQuery } from "../../../graphql-operations";

import { HiChevronLeft } from "react-icons/hi";

import { PortableText } from "@portabletext/react";

export type ProductProps = {
  product: AllProductsQuery["allProduct"][0] | undefined;
};

const siteTitle = "Hands on Physiotherapy and Rehab Centre";

function Product({ product }: ProductProps) {
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
      <section className="max-w-4xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 min-h-screen flex flex-col">
        <Link href="/products">
          <span className="flex font-button text-xl items-center mb-2 cursor-pointer text-black dark:text-white hover:text-green-350">
            <HiChevronLeft
              className="block h-4 mr-2 mt-0.5"
              aria-hidden="true"
            />
            Back
          </span>
        </Link>
        <div className="flex flex-col gap-6 sm:flex-row bg-slate-200 dark:bg-slate-800 rounded-xl ">
          <div className="w-full min-h-[250px] relative self-center">
            <Image
              src={product?.image?.asset?.url ?? ""}
              alt={`An image of ${product?.name}`}
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          <div className="flex w-full flex-col mx-auto my-auto gap-4 p-6">
            <h1 className="text-3xl font-roboto text-center text-blue-550 dark:text-white font-extrabold tracking-tight">
              {product?.name}
            </h1>

            <Link href="/product-inquiry" className="m-auto">
              <button
                className="bg-blue-550 text-base text-white font-button px-4 py-2 hover:bg-green-350 hover:text-blue-550 rounded-md"
                type="button"
              >
                Submit Inquiry
              </button>
            </Link>
          </div>
        </div>
        {product?.detailsRaw && product?.detailsRaw?.length > 0 && (
          <div className="mt-12 animate-fade-in-upmt-12 animate-fade-in-up font-roboto text-gray-850 dark:text-white">
            <PortableText
              value={product?.detailsRaw}
              components={{
                block: {
                  normal: ({ children }) => {
                    return (
                      <p className="mb-4">{children}</p>
                    );
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