import { GetStaticPaths, GetStaticProps } from "next";
import client from "../../apollo-client";
import {
  AllBlogsDocument,
  AllBlogsQuery,
  BlogDocument,
  BlogFragment,
  BlogQuery,
} from "../../graphql-operations";

import _Blog from "../../components/modules/Blog";

export const getStaticPaths: GetStaticPaths<{
  slug: string;
}> = async () => {
  let data;
  ({ data } = await client.query<AllBlogsQuery>({
    query: AllBlogsDocument,
  }));
  const allBlog: BlogFragment[] = data?.allBlog ?? [];
  const slugs = allBlog
    .map(({ slug }) => slug?.current)
    .filter((slugString): slugString is string => Boolean(slugString));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

type BlogProps = {
  blog: BlogQuery["allBlog"][0] | undefined;
};

export const getStaticProps: GetStaticProps<
  BlogProps,
  { slug: string }
> = async ({ params }) => {
  let data;

  ({ data } = await client.query<BlogQuery>({
    query: BlogDocument,
    variables: {
      slug: params?.slug,
    },
  }));

  const blog = data?.allBlog?.[0];
  return {
    props: { blog },
    revalidate: 200,
    notFound: !blog,
  };
};

const Blog = _Blog;

export default Blog;
