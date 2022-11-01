import React from "react";
import { AllBlogsQuery } from "../../../graphql-operations";
import { PortableText } from "@portabletext/react";

import { format, parse } from "date-fns";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";
import Navbar from "../../global/Navbar";
import Footer from "../../global/Footer";

export type BlogProps = {
  blog: AllBlogsQuery["allBlog"][0] | undefined;
};

const Blog: React.FC<BlogProps> = ({ blog }) => {
  const date = parse(blog?.date, "yyyy-MM-dd", new Date());
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 bg-slate-150">
        <Link href="/blogs">
          <span className="flex items-center cursor-pointer text-black">
            <HiChevronLeft
              className="block h-4 mr-2 mt-0.5"
              aria-hidden="true"
            />
            Back
          </span>
        </Link>

        <h1 className="my-12 ml-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {blog?.title}
        </h1>

        <div className="flex my-12">
          <div className="ml-3">
            <span className="font-light text-xl">
              {format(date, "MMMM dd, yyyy")}
            </span>
          </div>
        </div>

        {blog?.blogRaw && blog?.blogRaw?.length > 0 && (
          <div className="mb-12 m-10 animate-fade-in-up">
            <PortableText
              value={blog?.blogRaw}
              components={{
                block: {
                  normal: ({ children }) => {
                    return (
                      <p className="font-light text-black mb-4">{children}</p>
                    );
                  },
                },
              }}
            />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};
export default Blog;
