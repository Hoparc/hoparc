import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { AllProductsQuery } from "../../../graphql-operations";
import { PortableText } from "@portabletext/react";

import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { NextSeo } from "next-seo";

export type BlogProps = {
  product: AllProductsQuery["allProduct"][0] | undefined;
};

function Product({ product }: BlogProps) {
  const productUrl = `www.hoparc.com/product/${product?.slug?.current}`;
  const siteTitle = "Hands on Physiotherapy and Rehab Centre";

  return (
    <>
      <NextSeo
        title={`${product?.name + " | " + siteTitle}`}
        canonical={productUrl}
        openGraph={{
          url: `${productUrl}`,
          title: `${product?.name + " | " + siteTitle}`,
        }}
      />
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
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-40 lg:px-40 py-20 sm:py-28 lg:py-28 min-h-screen flex flex-col">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex flex-wrap items-center gap-y-3 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-lg font-roboto font-bold md:ml-2 dark:hover:text-blue-350  cursor-pointer text-gray-750 dark:text-white hover:text-blue-550"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link
                  href="/products"
                  className="ml-1 text-lg font-regular font-roboto md:ml-2 dark:hover:text-blue-350 cursor-pointer text-gray-750 dark:text-white hover:text-blue-550"
                >
                  Our Products
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-lg font-regular font-roboto md:ml-2 cursor-pointer text-gray-750 dark:text-white dark:hover:text-blue-350 hover:text-blue-550">
                  {product?.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col lg:flex-row items-start justify-between my-12 gap-y-4">
          <h1 className="font-roboto font-bold text-4xl tracking-tight dark:text-white text-gray-850">
            {product?.name}
          </h1>
          <Link
            href={{
              pathname: "/product-inquiry",
              query: { productName: product?.name },
            }}
            className="px-5 py-3 dark:bg-blue-950 bg-blue-650 text-white rounded-lg hover:bg-green-350 hover:text-blue-550 font-button"
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
            <h2 className="text-lg font-bold font-roboto my-4">
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
        <div className="flex space-x-8">
          <FacebookShareButton url={productUrl} className="hover:scale-105">
            <FacebookIcon size={36} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={productUrl}>
            <TwitterIcon size={36} round={true} className="hover:scale-105" />
          </TwitterShareButton>
          <LinkedinShareButton url={productUrl}>
            <LinkedinIcon size={36} round={true} className="hover:scale-105" />
          </LinkedinShareButton>
        </div>
      </section>
    </>
  );
}
export default Product;
