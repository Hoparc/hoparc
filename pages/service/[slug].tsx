import { GetStaticPaths, GetStaticProps } from "next";

import client from "../../apollo-client";
import {
  AllLocationsDocument,
  AllLocationsQuery,
  AllServicesDocument,
  AllServicesQuery,
  LocationFragment,
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
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<
  ServiceProps,
  { slug: string }
> = async ({ params }) => {
  const [{ data: serviceData }, { data: locationData }] = await Promise.all([
    client.query<ServiceQuery>({
      query: ServiceDocument,
      variables: {
        slug: params?.slug,
      },
    }),
    client.query<AllLocationsQuery>({
      query: AllLocationsDocument,
    }),
  ]);

  const service = serviceData?.allService?.[0];

  const allLocation: LocationFragment[] = locationData.allLocation;
  const locations = allLocation;

  return {
    props: { service, locations },
    revalidate: 200,
    notFound: !service,
  };
};

const Service = _Service;

export default Service;
