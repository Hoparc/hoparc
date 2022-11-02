import Image from "next/image";

import { useState } from "react";

import cn from "clsx";

interface ServiceCardProps {
  imageUrl: string;
  name: string;
  description: string;
}

function ServiceCard({ imageUrl, name, description }: ServiceCardProps) {
  return (
    <>
      <figure className="group inline-flex p-6 mb-4 w-full relative flex-col-reverse bg-white highlight-white/5 rounded-lg">
        <figcaption className="flex items-center space-x-4">
          <Image
            src={imageUrl}
            alt={`Image of ${name}`}
            className="flex-none rounded-full object-cover drop-shadow-md"
            loading="lazy"
            width={100}
            height={100}
          />
          <div className="flex-auto">
            <div className="text-base text-black font-semibold">{name}</div>
            <div className="mt-0.5 text-black text-xs">{description}</div>
          </div>
        </figcaption>
      </figure>
    </>
  );
}

interface ServicesProps {
  hasShowMore?: boolean;
}

function Services({ hasShowMore = false }: ServicesProps) {
  const [showMore, setShowMore] = useState(!hasShowMore);
  return (
    <div className="relative max-w-7xl mx-auto mt-10">
      <div className="flex pb-12 flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl text-center font-title">
          Our Services
        </h2>
      </div>
      <div
        className={cn({
          ["max-h-[28rem]"]: !showMore,
          ["overflow-hidden"]: !showMore,
        })}
      >
        <div className="columns-1 md:columns-2">
          <ServiceCard
            imageUrl="/images/about/aboutUs.png"
            name="Physiotherapy"
            description="Hands on Physiotherapy and Pelvic health that provide assessments and treatments of all injuries as well as everyday aches and pains."
          />
          <ServiceCard
            imageUrl="/images/about/aboutUs.png"
            name="Pelvic Health Physiotherapy"
            description="Mindful Movement for Pelvic Floor/abdominal/core muscle."
          />
          <ServiceCard
            imageUrl="/images/about/aboutUs.png"
            name="Massage therapy"
            description="The massage therapy provider at Hands on Physiotherapy are regulated healthcare professionals and registered members of the College of Massage Therapists of Ontario."
          />
          <ServiceCard
            imageUrl="/images/about/aboutUs.png"
            name="Thai Massage"
            description="This form of massage combines traditional massages of acupressure with a unique combination of stretching techniques to help to loosen stiff muscles and assist the body with flexibility."
          />
          <ServiceCard
            imageUrl="/images/about/aboutUs.png"
            name="Chiropractor"
            description="Chiropractor uses hands-on spinal manipulation and other alternative treatments."
          />
          <ServiceCard
            imageUrl="/images/about/aboutUs.png"
            name="Hot Stone Physiotherapy"
            description="An ancient technique to relieve pain and improve flexibility."
          />
          <ServiceCard
            imageUrl="/images/about/aboutUs.png"
            name="Acupuncture"
            description="Acupuncture is a Form of Alternative medicine."
          />
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
                className="relative focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center bg-blue-350 hover:bg-green-350 pointer-events-auto w-full"
              >
                See More Services
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
