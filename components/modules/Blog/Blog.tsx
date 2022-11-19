import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { AllBlogsQuery } from "../../../graphql-operations";
import { PortableText } from "@portabletext/react";

import { format, parse } from "date-fns";

export type BlogProps = {
  blog: AllBlogsQuery["allBlog"][0] | undefined;
};

const siteTitle = "Hands on Physiotherapy and Rehab Centre";

function Blog({ blog }: BlogProps) {
  const date = parse(blog?.date, "yyyy-MM-dd", new Date());
  return (
    <>
      <Head>
        <title>{blog?.title + " | " + siteTitle}</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#327CDF" />
        <meta
          name="description"
          content={`${blog?.title} Hands on Physiotherapy and Rehab Centre`}
        />
        <meta
          name="keywords"
          content="blogs, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Image
        src="/images/blog/blogBanner.png"
        alt="Banner image with colored striped shapes and an image of a book in the middle"
        height={423}
        width={2560}
        className="object-cover object-center max-h-64 w-full"
        priority
      />
      <div className="bg-blue-550 w-full">
        <div className="max-w-screen-xl m-auto w-11/12">
          <h1 className="text-3xl sm:text-5xl text-center py-6 font-bold text-white">
            Our Blog
          </h1>
        </div>
      </div>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-40 lg:px-40 py-20 sm:py-28 lg:py-28 min-h-screen flex flex-col">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-lg font-medium md:ml-2 dark:hover:text-white  cursor-pointer text-gray-750 dark:text-white hover:text-blue-450"
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
                  href="/blogs"
                  className="ml-1 text-lg font-medium md:ml-2 dark:hover:text-white cursor-pointer text-gray-750 dark:text-white hover:text-blue-450"
                >
                  Our Blogs
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
                <span className="ml-1 text-lg font-medium md:ml-2 cursor-pointer text-gray-750 dark:text-white hover:text-blue-450">
                  {blog?.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="my-12 font-monsterrat font-semibold text-4xl tracking-tight">
          {blog?.title}
        </h1>
        <div className="w-full">
          <Image
            src={blog?.image?.asset?.url ?? ""}
            alt={`An image of ${blog?.title}`}
            width={400}
            height={400}
            className="object-cover rounded-lg shadow-2xl w-full h-56"
            priority
          />
        </div>
        <div className="flex flex-row items-center gap-6 w-11/12 my-12 text-gray-850 dark:text-white font-roboto text-base">
          <span className="text-lg font-semibold">
            {format(date, "MMMM dd, yyyy")}
          </span>
        </div>

        {blog?.blogRaw && blog?.blogRaw?.length > 0 && (
          <div className="mb-12 animate-fade-in-up text-gray-850 dark:text-white font-roboto text-base">
            <PortableText
              value={blog?.blogRaw}
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
export default Blog;
