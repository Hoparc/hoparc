import { GetStaticPaths, GetStaticProps } from "next";
import client from "../../apollo-client";
import {
  AllServicesDocument,
  AllServicesQuery,
  ServiceDocument,
  ServiceFragment,
  ServiceQuery,
} from "../../graphql-operations";

import _Service from "../../components/modules/Service";

export const getStaticPaths: GetStaticPaths<{
  slug: string;
}> = async () => {
  let data;
  ({ data } = await client.query<AllServicesQuery>({
    query: AllServicesDocument,
  }));
  const allService: ServiceFragment[] = data?.allService ?? [];
  const slugs = allService
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

type ServiceProps = {
  service: ServiceQuery["allService"][0] | undefined;
};

export const getStaticProps: GetStaticProps<
  ServiceProps,
  { slug: string }
> = async ({ params }) => {
  let data;

  ({ data } = await client.query<ServiceQuery>({
    query: ServiceDocument,
    variables: {
      slug: params?.slug,
    },
  }));

  const service = data?.allService?.[0];
  return {
    props: { service },
    revalidate: 200,
    notFound: !service,
  };
};

const Service = _Service;

export default Service;
