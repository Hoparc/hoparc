import { Fragment, useMemo } from "react";

import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import client from ".././apollo-client";
import {
  AllBlogCategoriesDocument,
  AllBlogCategoriesQuery,
  AllBlogsDocument,
  AllBlogsQuery,
  AllLocationsDocument,
  AllLocationsQuery,
  LocationFragment,
} from ".././graphql-operations";

import cn from "clsx";

type BlogsProps = {
  blogs: AllBlogsQuery["allBlog"];
  categories: AllBlogCategoriesQuery["allBlogCategory"];
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<BlogsProps> = async () => {
  const [
    { data: blogData },
    { data: blogCategoryData },
    { data: locationData },
  ] = await Promise.all([
    client.query<AllBlogsQuery>({
      query: AllBlogsDocument,
    }),
    client.query<AllBlogCategoriesQuery>({
      query: AllBlogCategoriesDocument,
    }),
    client.query<AllLocationsQuery>({
      query: AllLocationsDocument,
    }),
  ]);

  const copy = [...(blogData?.allBlog ?? [])];

  return {
    props: {
      blogs: copy.sort((a, b) => (a.date > b.date ? -1 : 1)),
      categories: blogCategoryData?.allBlogCategory ?? [],
      locations: locationData?.allLocation ?? [],
    },
    revalidate: 200,
  };
};

const Blogs: NextPage<BlogsProps> = ({ blogs, categories }: BlogsProps) => {
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
      <section className="min-h-screen">
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
            <h2 className="text-3xl text-left py-3 font-bold uppercase text-white">
              our blog
            </h2>
          </div>
        </div>
        <div className="max-w-screen-xl m-auto w-11/12 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-12 mb-20">
            <div className="col-span-8 lg:col-span-2">
              <Link href="/blogs">
                <button className="block leading-5 text-accent-4 text-lg no-underline font-bold tracking-wide hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4 p-2 rounded-md hover:text-green-350 hover:bg-blue-550">
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
                      "block text-md leading-5 text-accent-4 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 text-black mb-2 p-2 rounded-md hover:text-green-350 hover:bg-blue-550",
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
                <div className="columns-1 gap-x-4 md:columns-2 xl:columns-2">
                  {filteredBlogs.map((blog) => {
                    return (
                      <Fragment key={blog.title}>
                        <div className=" bg-blue-550 rounded-lg shadow-md shadow-slate-400 hover:bg-green-350">
                          <Link
                            key={blog.slug?.current}
                            href={`/blog/${blog.slug?.current}`}
                            className="text-white hover:text-blue-550 "
                        >
                            <div className="mb-4 relative cursor-pointer rounded-lg overflow-hidden">
                              <div className="py-3 px-3">
                                <div className="font-bold">
                                  {blog.title}
                                </div>
                              </div>
                              <div className="h-[250px] relative">
                                {blog.image?.asset?.url && (
                                  <Image
                                    src={blog.image.asset.url}
                                    alt={`Image for ${blog.title}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                  33vw"
                                  />
                                )}
                              </div>
                            </div>
                          </Link>
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

export default Blogs;
