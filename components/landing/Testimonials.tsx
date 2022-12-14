import { useState } from "react";
import Link from "next/link";

import Image from "next/image";

import cn from "clsx";

import { TestimonialFragment } from "../../graphql-operations";

interface TestimonialCardProps {
  imageUrl: string | null | undefined;
  name: string | null | undefined;
  review: string | null | undefined;
}
function TestimonialCard({ imageUrl, name, review }: TestimonialCardProps) {
  return (
    <>
      <figure className="group inline-flex p-6 mb-4 w-full relative flex-col-reverse bg-white highlight-white/5 rounded-md  dark:border dark:border-gray-700
        dark:bg-gray-800">
        <figcaption className="flex items-center space-x-4">
          <div className="flex-auto ">
            <Image
              src={imageUrl ?? ""}
              alt={`Image of ${name}`}
              className="flex-none rounded-full object-cover drop-shadow-md h-24"
              loading="lazy"
              width={100}
              height={100}
            />
            <div className="text-base text-black dark:text-white font-semibold">{name}</div>
            <div className="mt-0.5 text-black dark:text-gray-400 text-xs">{review}</div>
          </div>
        </figcaption>
      </figure>
    </>
  );
}

interface TestimonialsProps {
  hasShowMore?: boolean;
  testimonials: TestimonialFragment[];
}

function Testimonials({
  hasShowMore = false,
  testimonials,
}: TestimonialsProps) {
  const [showMore, setShowMore] = useState(!hasShowMore);
  return (
    <div className="py-28 bg-blue-550">
      <div className="relative">
        <div className="flex pb-12 flex-col items-center justify-center max-w-5xl w-95% mx-auto mt-10">
          <h2 className="text-3xl sm:text-5xl font-roboto font-bold text-center text-white">
            Our clients love us!
          </h2>
          <p className="flex flex-col mx-auto mt-3 max-w-2xl text-md sm:text-xl font-roboto sm:mt-4 text-center text-green-350">
            Check out what they have to say!
          </p>
        </div>
        <div
          className={cn({
            ["max-h-[45rem]"]: !showMore,
            ["overflow-hidden"]: !showMore,
          })}
        >
          <div className="columns-1 gap-x-4 md:columns-2 lg:columns-3 font-roboto max-w-5xl w-95% mx-auto">
            {testimonials?.map((testimonial) => (
              <TestimonialCard
                imageUrl={testimonial.image?.asset?.url ?? ""}
                name={testimonial.name}
                review={testimonial.testimonial}
                key={testimonial.name}
              />
            ))}
            <div className="flex items-center justify-center bg-white highlight-white/5 rounded-md  dark:border dark:border-gray-700
        dark:bg-gray-800 w-full py-6 px-2 font-bold font-roboto text-xl text-gray-850 dark:text-white gap-3">
              <h3>
                See more reviews on:
              </h3>
              <Link
                className="text-2xl bg-blue-550 dark:bg-blue-250 p-2 hover:bg-blue-850 hover:text-blue-550 rounded-md focus:outline focus:outline-2 focus:outline-green-350 hover:outline hover:outline-2 hover:outline-green-350 focus:bg-blue-850"
                href="https://g.page/HOPARC?share"
                role="button"
                target="_blank"
                aria-label="Google"
              >
                <span aria-hidden className="text-blue-400 dark:text-blue-650">G</span>
                <span aria-hidden className="text-red-500">o</span>
                <span aria-hidden className="text-yellow-500">o</span>
                <span aria-hidden className="text-blue-400 dark:text-blue-650">g</span>
                <span aria-hidden className="text-green-350">l</span>
                <span aria-hidden className="text-red-500">e</span>
              </Link>
            </div>
          </div>
          {hasShowMore && (
            <div
              className={cn("inset-x-0 flex justify-center absolute max-w-5xl w-95% mx-auto pt-40", {
                ["bg-gradient-to-t bottom-0 pb-0 pointer-events-none from-blue-550"]:
                  !showMore,
              })}
            >
              {!showMore && (
                <button
                  type="button"
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                  className="relative focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-base font-button text-white font-semibold h-14 px-6 mb-0 mt-24 rounded-sm flex items-center bg-blue-650 hover:bg-green-350 hover:text-blue-550 pointer-events-auto w-full justify-center gap-4 border-t-8 border-blue-550"
                >
                  More Reviews
                  <span> + </span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
