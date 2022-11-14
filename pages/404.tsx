import { GetStaticProps } from "next";

import client from "../apollo-client";
import {
  AllLocationsDocument,
  AllLocationsQuery,
  LocationFragment,
} from "./../graphql-operations";

type Custom404Props = {
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<Custom404Props> = async () => {
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

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col">
      <h1>404 - Page Not Found</h1>;
    </div>
  );
  
  
}
