import Link from "next/link";
import Image from "next/image";

import { AllProductsQuery } from "../../../graphql-operations";

import { PortableText } from "@portabletext/react";

export type ProductProps = {
  product: AllProductsQuery["allProduct"][0] | undefined;
};

function Product({ product }: ProductProps) {
  return (
    <>
      <div className="block pt-16"></div>
      <section className="mx-auto my-12 max-w-screen-xl w-11/12">
        <div className="mt-8">
          <h2 className="text-xl font-bold font-roboto text-blue-350 sm:text-4xl m-10 text-center">
            {product?.name}
          </h2>
          <div
            key={product?.name}
            className="lg:w-9/12 flex flex-col md:flex-col my-16 mx-auto rounded-lg bg-slate-100 min-h-full w-full shadow-lg shadow-slate-300 "
          >
            <div className="relative flex items-center flex-col justify-start h-full rounded-lg">
              <div className="w-full sm:min-h-[500px] min-h-[250px] max-h-[600px] relative">
                {product?.image?.asset?.url && (
                  <Image
                    src={product.image.asset.url}
                    alt={product.name ?? "Product image"}
                    className="object-cover rounded-t-lg"
                    fill
                  />
                )}
              </div>
              <Link href="/product-inquiry" className="w-full">
                <button className="bg-blue-350 text-base text-white font-button w-full px-4 py-2 rounded-b-md shadow-md shadow-slate-500 hover:bg-green-350 hover:text-blue-550">
                  Make Inquiry
                </button>
              </Link>
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
        </div>
      </section>
    </>
  );
}

export default Product;
