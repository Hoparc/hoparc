import { GetStaticProps } from "next";

import client from "../apollo-client";
import {
  AllLocationsDocument,
  AllLocationsQuery,
  LocationFragment,
} from "./../graphql-operations";

type Custom500Props = {
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<Custom500Props> = async () => {
  const { data: locationData } = await client.query<AllLocationsQuery>({
    query: AllLocationsDocument,
  });

  const allLocation: LocationFragment[] = locationData.allLocation;
  const locations = allLocation;

  return {
    props: {
      locations,
    },
  };
};

export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>;
}
