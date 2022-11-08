import Image from "next/image";
import Link from "next/link";

import { PortableText } from "@portabletext/react";

import { ServiceQuery } from "../../../graphql-operations";

export type ServiceProps = {
  service: ServiceQuery["allService"][0] | undefined;
};

function Service({ service }: ServiceProps) {
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
      <Link href="/request-appointment">
        <button
          className="bg-blue-350 text-base text-white font-button w-full px-4 py-2 hover:bg-green-350 hover:text-blue-550 rounded-md"
          type="button"
        >
          Request Appointment
        </button>
      </Link>
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
}
export default Service;
