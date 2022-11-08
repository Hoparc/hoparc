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
      <figure className="group inline-flex p-6 mb-4 w-full relative flex-col-reverse bg-white highlight-white/5 rounded-md shadow-md shadow-slate-300">
        <figcaption className="flex items-center space-x-4">
          <Link href={`/service/${href}` ?? ""}>
            <div className="flex-auto">
              <div className="items-center">
                <Image
                  src={imageUrl ?? ""}
                  alt={`Image of ${name}`}
                  className="flex-none rounded-2xl object-cover drop-shadow-md"
                  loading="lazy"
                  width={200}
                  height={200}
                />
              </div>
              <div className="text-basetext-black font-semibold mt-5">
                {name}
              </div>
              <div className="mt-0.5 text-black text-xs">{description}</div>
            </div>
          </Link>
        </figcaption>
      </figure>
    </>
  );
}

interface ServicesProps {
  hasShowMore?: boolean;
  services: ServiceFragment[];
}

function OurServices({ hasShowMore = false, services }: ServicesProps) {
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
            <div className="columns-1 gap md:columns-2 lg:columns-3">
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
                    className="relative focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center bg-blue-350 hover:bg-green-350 pointer-events-auto w-1/2 justify-center justify-between"
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
