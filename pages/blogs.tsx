import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import client from "../apollo-client";
import {
  AllBlogCategoriesDocument,
  AllBlogCategoriesQuery,
  AllBlogsDocument,
  AllBlogsQuery,
} from "../graphql-operations";

import { useMemo } from "react";

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

export default function Blogs({ blogs, categories }: BlogsProps) {
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
    <section className="bg-slate-150">
      <div className="flex pb-12 flex-col items-center justify-center">
        <h2 className="my-5 font-bold uppercase tracking-wide text-3xl bg-gradient-to-r from-blue-350 via-green-350 to-blue-550 bg-clip-text fill-transparent [-webkit-text-fill-color:transparent]">
          Our Blog
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20">
        <div className="col-span-8 lg:col-span-2">
          <Link href="/blogs">
            <button className="block leading-5 text-blue-350 text-base no-underline font-bold tracking-wide hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4">
              All Categories
            </button>
          </Link>
          {categories?.map((category) => (
            <Link
              key={category.slug?.current}
              href={`/blogs?category=${category?.slug?.current}`}
            >
              <button className="block text-sm leading-5 text-blue-550 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-2">
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
                    <div className="mb-10 relative cursor-pointer rounded-sm overflow-hidden">
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
                        <div className="text-white font-bold">{blog.title}</div>
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
  );
}
