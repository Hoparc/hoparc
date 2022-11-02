import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import client from ".././apollo-client";
import {
  AllBlogCategoriesDocument,
  AllBlogCategoriesQuery,
  AllBlogsDocument,
  AllBlogsQuery,
} from ".././graphql-operations";

import { useMemo } from "react";

import cn from "clsx";

type BlogsProps = {
  blogs: AllBlogsQuery["allBlog"];
  categories: AllBlogCategoriesQuery["allBlogCategory"];
};

export const getStaticProps: GetStaticProps<BlogsProps> = async () => {
  const [{ data: blogData }, { data: blogCategoryData }] = await Promise.all([
    client.query<AllBlogsQuery>({
      query: AllBlogsDocument,
    }),
    client.query<AllBlogCategoriesQuery>({
      query: AllBlogCategoriesDocument,
    }),
  ]);

  return {
    props: {
      blogs: blogData?.allBlog ?? [],
      categories: blogCategoryData?.allBlogCategory ?? [],
    },
    revalidate: 200,
  };
};

function Blogs({ blogs, categories }: BlogsProps) {
  const router = useRouter();
  const { category: activeCategory } = router.query;
  const filteredBlogs = useMemo(() => {
    return activeCategory
      ? blogs.filter((blog) =>
          blog.category?.some(
            (category) => category?.slug?.current === activeCategory
          )
        )
      : blogs;
  }, [activeCategory, blogs]);

  return (
    <>
      <Head>
        <title>Blogs | Hands on Physiotherapy and Rehab Centre</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#327CDF" />
        <meta
          name="description"
          content="Blogs at Hands on Physiotherapy and Rehab Centre"
        />
        <meta
          name="keywords"
          content="blogs, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 min-h-screen">
        <div className="flex pb-12 flex-col items-center justify-center">
          <h1 className="mt-10 flex flex-col gap-3 text-5xl text-left font-bold uppercase text-blue-350 ">
            Our Blog
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20">
          <div className="col-span-8 lg:col-span-2">
            <Link href="/blogs">
              <button className="block leading-5 text-accent-4 text-base no-underline font-bold tracking-wide hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4">
                All Categories
              </button>
            </Link>
            {categories?.map((category) => (
              <Link
                key={category.slug?.current}
                href={`/blogs?category=${category?.slug?.current}`}
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
            {filteredBlogs.length > 0 ? (
              <div className="columns-1 gap-x-4 md:columns-2 lg:columns-3">
                {filteredBlogs.map((blog) => {
                  return (
                    <Link
                      key={blog.slug?.current}
                      href={`/blog/${blog.slug?.current}`}
                    >
                      <div className="mb-4 relative cursor-pointer rounded-sm overflow-hidden">
                        <div className="h-[250px] relative">
                          {blog.image?.asset?.url && (
                            <Image
                              src={blog.image.asset.url}
                              alt={`Image for ${blog.title}`}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="bg-blue-350 py-3 px-3">
                          <div className="text-white font-bold">
                            {blog.title}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-sm">No blogs found.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
