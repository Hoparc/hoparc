import { useState } from "react";

import Image from "next/image";

import cn from "clsx";

import { TestimonialFragment } from "../../../graphql-operations";

interface TestimonialCardProps {
  imageUrl: string | null | undefined;
  name: string | null | undefined;
  review: string | null | undefined;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageUrl,
  name,
  review,
}) => {
  return (
    <>
      <figure className="group inline-flex p-6 mb-4 w-full relative flex-col-reverse bg-white highlight-white/5 rounded-md shadow-md shadow-slate-300">
        <figcaption className="flex items-center space-x-4">
          <div className="flex-auto ">
            <Image
              src={imageUrl ?? ""}
              alt={`Image of ${name}`}
              className="flex-none rounded-full object-cover drop-shadow-md"
              loading="lazy"
              width={100}
              height={100}
            />
            <div className="text-base text-black font-semibold">{name}</div>
            <div className="mt-0.5 text-black text-xs">{review}</div>
          </div>
        </figcaption>
      </figure>
    </>
  );
};

interface TestimonialsProps {
  hasShowMore?: boolean;
  testimonials: TestimonialFragment[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  hasShowMore = false,
  testimonials,
}) => {
  const [showMore, setShowMore] = useState(!hasShowMore);
  return (
    <div className="py-28 bg-blue-550">
      <div className="relative max-w-5xl mx-auto mt-10">
        <div className="flex pb-12 flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-5xl font-roboto  text-center text-white font-title">
            Our clients love us!
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl font-light sm:mt-4 text-center text-green-350">
            Check out what they have to say!
          </p>
        </div>
        <div
          className={cn({
            ["max-h-[45rem]"]: !showMore,
            ["overflow-hidden"]: !showMore,
          })}
        >
          <div className="columns-1 gap-x-4 md:columns-2 lg:columns-3">
            {testimonials?.map((testimonial) => (
              <TestimonialCard
                imageUrl={testimonial.image?.asset?.url ?? ""}
                name={testimonial.name}
                review={testimonial.testimonial}
                key={testimonial.name}
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
};

export default Testimonials;
