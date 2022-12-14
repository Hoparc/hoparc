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
import { HiArrowRight } from "react-icons/hi";

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
      <section className="min-h-screen" id="blogs">
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
            <h1 className="text-3xl sm:text-5xl text-center py-6 font-roboto font-bold text-white">
              Our Blogs
            </h1>
            <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mt-10">
              <div className="mr-6 relative">
                <Link
                  href="/blogs"
                  className=
                  "after:content-[''] after:flex after:bottom-0 after:left-0 after:w-full after:mx-auto after:h-1 after:bg-gray-450 after:absolute hover:after:bg-green-350 inline-block p-4 text-blue-600 hover:text-blue-550 dark:hover:text-green-350 bg-blue-150 rounded-t-lg active dark:bg-purple-950 dark:text-white focus:after:bg-green-350 focus:bg-blue-950 focus:text-green-350"
                >
                  all
                </Link>
              </div>
              {categories?.map((category) => (
                <div className="mr-6 relative">
                  <Link
                    key={category.slug?.current}
                    href={`/blogs?category=${category?.slug?.current}`}
                    className={cn(
                      "after:content-[''] after:flex after:bottom-0 after:left-0 after:w-full after:mx-auto after:h-1 after:bg-gray-450 after:absolute hover:after:bg-green-350 inline-block p-4 text-blue-600 hover:text-blue-550 dark:hover:text-green-350 bg-blue-150 rounded-t-lg active dark:bg-purple-950 dark:text-white",
                      { ["focus:after:bg-green-350 focus:bg-blue-950 focus:text-green-350"]: activeCategory }
                    )}
                  >
                    {category.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl m-auto w-11/12">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 columns-1 gap-8 md:columns-2 xl:columns-2 my-20">
              {filteredBlogs.map((blog) => {
                return (
                  <Fragment key={blog.title}>
                    <div className="flex flex-col shadow-md">
                      <div className="h-full flex flex-col">
                        {blog.image?.asset?.url && (
                          <div className="w-full relative pt-52">
                            <Image
                              className="absolute top-0 w-full h-full object-cover rounded-t-lg "
                              src={blog.image.asset.url}
                              alt={`Image for ${blog.title}`}
                              loading="lazy"
                              width={500}
                              height={250}
                              quality={100}
                            />
                          </div>
                        )}

                        <div className="h-full w-full flex flex-col bg-blue-550 rounded-b-lg">

                          <div className="flex flex-col px-4 h-full justify-between">
                            <div className="flex flex-col md:pt-0 pt-4 leading-normal">
                              <h2 className="py-4 text-xl font-roboto font-bold tracking-tight text-white dark:text-white">
                                {blog.title}
                              </h2>
                              <p className="font-base font-roboto text-gray-300 dark:text-gray-300">
                                { }
                              </p>
                            </div>
                            <Link
                              key={blog.slug?.current}
                              href={`/blog/${blog.slug?.current}`}
                              className="text-md font-button text-blue-550 dark:text-white dark:hover:text-blue-550 inline-flex items-center bg-blue-250 dark:bg-blue-950 p-2 mb-4 rounded-md hover:bg-green-350 w-fit"
                            >
                              Learn More
                              <HiArrowRight className="inline w-4 h-4 ml-2 text-blue-550 dark:text-white dark:text-inherit" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          ) : (
            <div className="text-sm">No blogs found.</div>
          )}


        </div>
      </section>
    </>
  );
};

export default Blogs;
