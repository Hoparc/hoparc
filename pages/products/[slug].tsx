import { GetStaticPaths, GetStaticProps } from "next";

import client from "../../apollo-client";
import {
  AllLocationsDocument,
  AllLocationsQuery,
  AllProductsDocument,
  AllProductsQuery,
  LocationFragment,
  ProductDocument,
  ProductFragment,
  ProductQuery,
} from "../../graphql-operations";

import _Products from "../../components/modules/Products";

export const getStaticPaths: GetStaticPaths<{
  slug: string;
}> = async () => {
  let data;
  ({ data } = await client.query<AllProductsQuery>({
    query: AllProductsDocument,
  }));
  const allProduct: ProductFragment[] = data?.allProduct ?? [];
  const slugs = allProduct
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

type ProductProps = {
  product: ProductQuery["allProduct"][0] | undefined;
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<
  ProductProps,
  { slug: string }
> = async ({ params }) => {
  const [{ data: productData }, { data: locationData }] = await Promise.all([
    client.query<ProductQuery>({
      query: ProductDocument,
      variables: {
        slug: params?.slug,
      },
    }),
    client.query<AllLocationsQuery>({
      query: AllLocationsDocument,
    }),
  ]);

  const product = productData?.allProduct?.[0];

  const allLocation: LocationFragment[] = locationData.allLocation;
  const locations = allLocation;

  return {
    props: { product, locations },
    revalidate: 200,
    notFound: !product,
  };
};

const Product = _Products;

export default Product;