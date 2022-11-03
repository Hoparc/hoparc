import { GetStaticPaths, GetStaticProps } from "next";
import client from "../../apollo-client";
import {
  AllProductsDocument,
  AllProductsQuery,
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
};

export const getStaticProps: GetStaticProps<
  ProductProps,
  { slug: string }
> = async ({ params }) => {
  let data;

  ({ data } = await client.query<ProductQuery>({
    query: ProductDocument,
    variables: {
      slug: params?.slug,
    },
  }));

  const product = data?.allProduct?.[0];
  return {
    props: { product },
    revalidate: 200,
    notFound: !product,
  };
};

const Product = _Products;

export default Product;
