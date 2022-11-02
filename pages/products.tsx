import { GetStaticProps } from "next";
import React from "react";

import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

import Image from "next/image";
import client from ".././apollo-client";
import {
  AllProductsDocument,
  AllProductsQuery,
} from ".././graphql-operations";

import { PortableText } from "@portabletext/react";

type ProductsProps = {
  products: AllProductsQuery["allProduct"];
};

export const getStaticProps: GetStaticProps<
  ProductsProps
> = async () => {
  const { data: productData } =
    await client.query<AllProductsQuery>({
      query: AllProductsDocument,
    });


  return {
    props: {
      products: productData?.allProduct ?? [],
    },
    revalidate: 200,
  };
};

function Products({ products }: ProductsProps) {
  return (
    <>
      <Navbar />
      <div className="block pt-16"></div>
      <section className="mx-auto my-12 max-w-screen-xl w-11/12">
        <h2 className="text-5xl text-center text-blue-350 uppercase font-roboto">products</h2>
        <div className="mt-8">
          {products.map((product) => {
            return (
              <div
                key={product.name}
                className="lg:w-9/12 flex flex-col md:flex-col my-16 mx-auto rounded-lg bg-slate-100 min-h-full w-full shadow-lg shadow-slate-300 "
              >
                <div className="bg-primary-light relative flex items-center flex-col justify-start bg-blue-550 h-full rounded-lg">
                  <h3 className="text-xl font-bold font-roboto text-white sm:text-2xl m-10">
                    {product.name}
                  </h3>
                  <div className="w-full sm:min-h-[500px] min-h-[250px] max-h-[600px] relative">
                    {product.image?.asset?.url && (
                      <Image
                        src={product.image.asset.url}
                        alt={product.name ?? "Product image"}
                        className="object-cover"
                        fill
                      />
                    )}


                  </div>
                  <button className="bg-blue-350 text-base text-white font-button w-full px-4 py-2 rounded-b-md shadow-md shadow-slate-500 hover:bg-green-350 hover:text-blue-550">
                    Make Inquiry
                  </button>
                </div>
                <div className="flex-1 flex flex-col mx-2 my-10 sm:m-10">
                  {product?.detailsRaw && product?.detailsRaw?.length > 0 && (
                    <div className="animate-fade-in-up">
                      <PortableText
                        value={product?.detailsRaw}
                        components={{
                          block: {
                            normal: ({ children }) => {
                              return (
                                <p className="text-base font-roboto font-thin mb-4">
                                  {children}
                                </p>
                              );
                            },
                          },
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Products;