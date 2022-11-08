import { GetStaticPaths, GetStaticProps } from "next";

import client from "../../apollo-client";
import {
  AllBlogsDocument,
  AllBlogsQuery,
  AllLocationsDocument,
  AllLocationsQuery,
  BlogDocument,
  BlogFragment,
  BlogQuery,
  LocationFragment,
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
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<
  BlogProps,
  { slug: string }
> = async ({ params }) => {
  const [{ data: blogData }, { data: locationData }] = await Promise.all([
    client.query<BlogQuery>({
      query: BlogDocument,
      variables: {
        slug: params?.slug,
      },
    }),
    client.query<AllLocationsQuery>({
      query: AllLocationsDocument,
    }),
  ]);

  const blog = blogData?.allBlog?.[0];

  const allLocation: LocationFragment[] = locationData.allLocation;
  const locations = allLocation;

  return {
    props: { blog, locations },
    revalidate: 200,
    notFound: !blog,
  };
};

const Blog = _Blog;

export default Blog;
