import React from "react";
import Image from "next/image";
import { ServiceQuery } from "../../../graphql-operations";
import { PortableText } from "@portabletext/react";

// import { format, parse } from "date-fns";
// import Link from "next/link";

export type ServiceProps = {
  service: ServiceQuery["allService"][0] | undefined;
};

const Service: React.FC<ServiceProps> = ({ service }) => {
  return (
    <section>
      <h1 className="my-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {service?.name}
      </h1>

      {/* <div className="flex my-12">
        <Image
          className="rounded-full object-cover"
          src="/louis/1.webp"
          alt="User's Profile image"
          width={54}
          height={54}
        />
        <div className="ml-3">
          <div className="font-light">Written by</div>
          <div className="font-bold">
            Louis Ha{" "}
            <span className="font-light">
              on {format(date, "MMMM dd, yyyy")}
            </span>
          </div>
        </div>
      </div> */}

      {service?.detailsRaw && service?.detailsRaw?.length > 0 && (
        <div className="mb-12 animate-fade-in-up">
          <PortableText
            value={service?.detailsRaw}
            components={{
              block: {
                normal: ({ children }) => {
                  return (
                    <p className="font-light text-gray-200 mb-4">{children}</p>
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
