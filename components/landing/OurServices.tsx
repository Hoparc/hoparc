import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import cn from "clsx";

import { ServiceFragment } from "../../graphql-operations";

interface ServiceCardProps {
  imageUrl: string | null | undefined;
  name: string | null | undefined;
  description: string | null | undefined;
  href: string | undefined | null;
}

function ServiceCard({ imageUrl, name, description, href }: ServiceCardProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row h-full w-full md:py-4 xl:p-6 lg:p-4 md:p-2 bg-white rounded-md border shadow-md md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
        <Image
          className="object-cover w-full h-48 md:h-32 md:w-32 lg:h-44 lg:w-44 rounded-t-md md:rounded-full"
          src={imageUrl ?? ""}
          alt={`Image of ${name}`}
          loading="lazy"
          width={500}
          height={250}
          quality={100}
        />
        <div className="flex flex-col px-4">
          <div className="flex flex-col  md:pt-0 pt-4 leading-normal h-full">
            <h3 className="mb-2 text-xl font-roboto font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h3>
            <p className="font-base font-roboto text-gray-850 dark:text-gray-400">
              {description}
            </p>
          </div>
          <Link
            href={`/service/${href}` ?? ""}
            aria-label={`Open link to ${name} page` ?? ""}
            className="my-3 text-md text-center rounded-lg w-full font-semibold bg-blue-250 p-3 hover:bg-green-350 text-blue-350 hover:text-blue-550 capitalize"
          >
            learn more
          </Link>
        </div>
      </div>
    </>
  );
}

interface OurServicesProps {
  hasShowMore?: boolean;
  services: ServiceFragment[];
}

function OurServices({ hasShowMore = false, services }: OurServicesProps) {
  const [showMore, setShowMore] = useState(!hasShowMore);
  return (
    <div className="relative max-w-5xl mx-auto my-28 w-95%">
      <div className="flex pb-12 flex-col items-center justify-center">
        <h3 className="text-3xl sm:text-5xl font-roboto font-bold text-center text-blue-550 dark:text-white font-title">
          Our Services
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-md sm:text-xl font-roboto sm:mt-4 text-center dark:text-gray-500">
          Check out what we have in store!
        </p>
      </div>
      <div
        className={cn({
          ["max-h-[26.5rem]"]: !showMore,
          ["overflow-hidden"]: !showMore,
        })}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6">
          {services?.map((service) => (
            <ServiceCard
              imageUrl={service.image?.asset?.url ?? ""}
              name={service.name}
              description={service.description}
              href={service.slug?.current}
              key={service.name}
            />
          ))}
        </div>
        {hasShowMore && (
          <div
            className={cn("inset-x-0 flex justify-center absolute", {
              ["bg-gradient-to-t bottom-0 pb-0 pointer-events-none from-slate-150"]:
                !showMore,
            })}
          >
            {!showMore && (
              <button
                type="button"
                onClick={() => {
                  setShowMore(!showMore);
                }}
                className="relative focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 font-button text-base text-white font-semibold h-12 px-6 mb-4 rounded-md flex items-center bg-blue-550 hover:bg-green-350 hover:text-blue-550 pointer-events-auto w-1/2 justify-between"
              >
                More Services
                <span> + </span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default OurServices;
