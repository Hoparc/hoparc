import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import {
  AllBlogCategoriesQuery,
  AllBlogsQuery,
} from "../../../graphql-operations";
import { PortableText } from "@portabletext/react";

import { format, parse } from "date-fns";

import { HiChevronRight } from "react-icons/hi";

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
          <Link href="/blogs">
            <span className="flex font-button text-xl mb-2 cursor-pointer text-gray-750 dark:text-white hover:text-blue-450">
              Our Blog
              <HiChevronRight
                className="block h-4 mr-2 mt-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
          <Link href={blog?.slug?.current ?? ""}>
            <span className="flex font-button text-xl self-stretch mb-2 cursor-pointer text-gray-750 dark:text-white hover:text-blue-450">
              {blog?.title}
            </span>
          </Link>
        </div>
        <h1 className="my-12 ml-3 font-monsterrat font-semibold text-4xl tracking-tight">
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
