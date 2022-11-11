import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { AllBlogsQuery } from "../../../graphql-operations";
import { PortableText } from "@portabletext/react";

import { format, parse } from "date-fns";

import { HiChevronLeft } from "react-icons/hi";

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
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 min-h-screen flex flex-col">
        <Link href="/blogs">
          <span className="flex items-center cursor-pointer text-black">
            <HiChevronLeft
              className="block h-4 mr-2 mt-0.5"
              aria-hidden="true"
            />
            Back
          </span>
        </Link>

        <h1 className="my-6 ml-3 text-3xl text-blue-350 font-extrabold tracking-tight sm:text-4xl">
          {blog?.title}
        </h1>
        <div className="mx-auto">
          <Image
            src={blog?.image?.asset?.url ?? ""}
            alt={`An image of ${blog?.title}`}
            width={300}
            height={300}
            className="object-cover rounded-lg shadow-2xl w-full"
            priority
          />
        </div>
        <div className="flex my-12">
          <div className="ml-3">
            <span className="text-xl">{format(date, "MMMM dd, yyyy")}</span>
          </div>
        </div>

        {blog?.blogRaw && blog?.blogRaw?.length > 0 && (
          <div className="mb-12 m-10 animate-fade-in-up">
            <PortableText
              value={blog?.blogRaw}
              components={{
                block: {
                  normal: ({ children }) => {
                    return <p className="text-black mb-4">{children}</p>;
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
