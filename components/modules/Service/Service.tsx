import React from "react";
import Image from "next/image";
import { ServiceQuery } from "../../../graphql-operations";
import { PortableText } from "@portabletext/react";

export type ServiceProps = {
  service: ServiceQuery["allService"][0] | undefined;
};

const Service: React.FC<ServiceProps> = ({ service }) => {
  return (
    <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 min-h-screen flex flex-col">
      <h1 className="my-6 text-3xl text-center text-blue-350 font-extrabold tracking-tight sm:text-4xl">
        {service?.name}
      </h1>
      <div className="w-full sm:min-h-[500px] min-h-[250px] max-h-[600px] relative">
        <Image
          src={service?.image?.asset?.url ?? ""}
          alt={`An image of ${service?.name}`}
          fill
          className="object-cover"
        />
      </div>
      <button className="bg-blue-350 w-full px-3 py-4 rounded-b-2xl hover:bg-green-350 text-white">
        Book Appointment
      </button>
      {service?.detailsRaw && service?.detailsRaw?.length > 0 && (
        <div className="mt-12 animate-fade-in-up">
          <PortableText
            value={service?.detailsRaw}
            components={{
              block: {
                normal: ({ children }) => {
                  return (
                    <p className="font-light text-black mb-4">{children}</p>
                  );
                },
              },
            }}
          />
        </div>
      )}
    </section>
  );
};
export default Service;
