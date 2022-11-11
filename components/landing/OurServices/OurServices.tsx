import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import cn from "clsx";

import { ServiceFragment } from "../../../graphql-operations";

interface ServiceCardProps {
  imageUrl: string | null | undefined;
  name: string | null | undefined;
  description: string | null | undefined;
  href?: string | undefined | null;
}

function ServiceCard({ imageUrl, name, description, href }: ServiceCardProps) {
  return (
    <>
      <Link
        href={`/service/${href}` ?? ""}
        className="p-6 mb-4 flex flex-col items-center bg-white rounded-lg border
        shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700
        dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <Image
          className="object-cover w-44 h-44 md:h-32 md:w-32 rounded-full"
          src={imageUrl ?? ""}
          alt={`Image of ${name}`}
          loading="lazy"
          width={500}
          height={250}
          quality={100}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </Link>
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
    <>
      <div className="bg-blue-150 py-28">
        <div className="relative max-w-5xl mx-auto mt-10">
          <div className="flex pb-12 flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-5xl font-roboto  text-center text-blue-550 font-title">
              Our Services
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl font-light sm:mt-4 text-center">
              Check out what we have in store!
            </p>
          </div>
          <div
            className={cn({
              ["max-h-[26.5rem]"]: !showMore,
              ["overflow-hidden"]: !showMore,
            })}
          >
            <div className="columns-1 md:columns-2">
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
                    className="relative focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 mb-4 rounded-lg flex items-center bg-blue-550 hover:bg-green-350 hover:text-blue-550 pointer-events-auto w-1/2 justify-between"
                  >
                    More Services
                    <span> + </span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
