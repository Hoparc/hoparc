import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import client from "../apollo-client";
import {
  AllInsurancesDocument,
  AllInsurancesQuery,
  AllStaffsDocument,
  AllStaffsQuery,
  AllLocationsDocument,
  AllLocationsQuery,
  LocationFragment,
  AllAboutsQuery,
  AllAboutsDocument,
  AboutFragment,
} from "../graphql-operations";
import { useRef } from "react";
import { NextSeo } from "next-seo";

type AboutUsProps = {
  insurances: AllInsurancesQuery["allInsurance"];
  staffs: AllStaffsQuery["allStaff"];
  locations: LocationFragment[];
  url: string | null | undefined;
  story: string | null | undefined;
  purpose: string | null | undefined;
};

export const getStaticProps: GetStaticProps<AboutUsProps> = async () => {
  const [
    { data: insuranceData },
    { data: staffData },
    { data: locationData },
    { data: aboutData },
  ] = await Promise.all([
    client.query<AllInsurancesQuery>({
      query: AllInsurancesDocument,
    }),
    client.query<AllStaffsQuery>({
      query: AllStaffsDocument,
    }),
    client.query<AllLocationsQuery>({
      query: AllLocationsDocument,
    }),
    client.query<AllAboutsQuery>({
      query: AllAboutsDocument,
    }),
  ]);

  const allAbout: AboutFragment[] = aboutData?.allAbout;
  const abouts = allAbout[0];
  const { image, story, purpose } = abouts;
  const url = image?.asset?.url;

  return {
    props: {
      insurances: insuranceData?.allInsurance ?? [],
      staffs: staffData?.allStaff ?? [],
      locations: locationData?.allLocation ?? [],
      abouts: aboutData?.allAbout ?? [],
      url,
      story,
      purpose,
    },
  };
};

const AboutUs: NextPage<AboutUsProps> = ({
  insurances,
  staffs,
  url,
  story,
  purpose,
}: AboutUsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NextSeo
        title="About - Hands on Physiotherapy and Rehab Centre"
        description="Learn more about Hands On Physiotherapy
        Rehab Centre & Pelvic Health."
        canonical="https://hoparc.com/about"
        openGraph={{
          url: "https://hoparc.com/about",
          title: "About - Hands on Physiotherapy and Rehab Centre",
          description: `Learn more about Hands On Physiotherapy
          Rehab Centre & Pelvic Health.`,
          site_name: "Hands on Physiotherapy and Rehab Centre",
          type: "website",
          locale: "en_CA",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "physiotherapy, rehab centre, rehab",
          },
          {
            name: "author",
            content: "Hands on Physiotherapy and Rehab Centre",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:locale",
            content: "en_CA",
          },
          {
            property: "og:site_name",
            content: "Hands on Physiotherapy and Rehab Centre",
          },
        ]}
      />
      <Image
        src="/images/about/aboutBanner.png"
        alt="Banner image with colored striped shapes and an image of two text chat bubbles being made out of paper in the middle"
        height={423}
        width={2560}
        className="object-cover object-center max-h-64 w-full"
        priority={true}
        sizes="(max-width: 1600px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
      />
      <div className="bg-blue-550 w-full">
        <div className="max-w-screen-xl m-auto w-11/12">
          <h1 className="text-3xl sm:text-5xl text-center p-3 font-bold text-white capitalize">
            about
          </h1>
        </div>
      </div>
      <section id="about">
        {/* Start of Wrapper Div */}
        <div className="max-w-screen-xl w-11/12 mx-auto">
          {/* Purpose & Story Container */}
          <div className="flex gap-8 py-32 flex-col md:flex-row">
            {/* Our Story Container */}
            <div className="flex flex-col flex-1 justify-evenly">
              <h2 className="font-roboto font-bold capitalize text-4xl sm:text-5xl text-blue-550 dark:text-white">
                Our Story
              </h2>
              <p className="mt-4 text-xl font-roboto text-gray-850 dark:text-white">
                {story}
              </p>
              <div className="w-full mt-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={url ?? ""}
                    className="rounded-lg shadow-2xl w-full"
                    alt="image"
                    height={500}
                    width={1000}
                    priority={true}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </motion.div>
              </div>
            </div>
            {/* End of Our Story Container */}

            {/* Our Purpose Container */}
            <div className="flex flex-col flex-1 justify-evenly">
              <div className="flex flex-col-reverse md:flex-col">
                <div className="w-full mt-10 md:mb-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/images/about/greg-rakozy-oMpAz-DN-9I-unsplash.jpg"
                      className="rounded-lg shadow-2xl w-full"
                      alt="image"
                      height={500}
                      width={1000}
                      priority
                    />
                  </motion.div>
                </div>

                <div>
                  <h2 className="font-roboto font-bold capitalize text-4xl sm:text-5xl text-blue-550 dark:text-white">
                    Our Purpose
                  </h2>
                  <p className="mt-4 text-xl font-roboto text-gray-850 dark:text-white">
                    {purpose}
                  </p>
                </div>
              </div>
            </div>
            {/* End of Our Story Container */}
          </div>
          {/* End of Story & Purpose Container */}

          {/* End of Wrapper Div */}
        </div>

        {/* Start of Our Values Container */}
        <div ref={ref}>
          <div className="w-full bg-blue-550 flex py-36 ">
            <motion.div
              className="max-w-screen-xl m-auto w-10/12 flex flex-col items-center gap-20"
              variants={variants}
              initial={isInView ? "visible" : "hidden"}
              animate={isInView ? "visible" : "hidden"}
              exit="hidden"
            >
              <h2 className="capitalize text-white text-4xl sm:text-5xl font-roboto font-bold text-center">
                Our Values
              </h2>
              <div className="flex flex-col w-full justify-between md:flex-row md:max-w-3xl max-w-xs gap-6">
                <div className="flex flex-col self-start gap-4">
                  <Image
                    src="/images/about/customerServiceIcon.webp"
                    className="max-w-xl"
                    alt="Icon for customer service with a headset"
                    height={120}
                    width={120}
                  />
                  <h3 className="capitalize text-white font-roboto text-xl text-center">
                    Service
                  </h3>
                </div>
                <div className="flex flex-col self-end gap-4">
                  <Image
                    src="/images/about/developmentIcon.webp"
                    className="max-w-xl"
                    alt="Icon for development representing a book"
                    height={120}
                    width={120}
                  />
                  <h3 className="capitalize text-white font-roboto text-xl text-center">
                    Development
                  </h3>
                </div>
                <div className="flex flex-col self-start gap-4">
                  <Image
                    src="/images/about/respectIcon.webp"
                    className="max-w-xl"
                    alt="Icon for respect representing a handshake"
                    height={120}
                    width={120}
                  />
                  <h3 className="capitalize text-white font-roboto text-xl text-center">
                    Respect
                  </h3>
                </div>
                <div className="flex flex-col self-end gap-4">
                  <Image
                    src="/images/about/careIcon.webp"
                    className="max-w-xl"
                    alt="Icon for respect representing two hands with a heart above both hands"
                    height={120}
                    width={120}
                  />
                  <h3 className="capitalize text-white font-roboto text-xl text-center">
                    Care
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* End of Our Values Container */}

        {/* Start of Meet The Staff Container */}
        {staffs.map((staff, index) => (
          <div className="max-w-screen-xl w-95% mx-auto my-24" key={index}>
            <h2 className="font-roboto font-bold capitalize text-4xl sm:text-5xl text-center text-blue-550 dark:text-white">
              meet our staff
            </h2>
            <div className="my-8 flex w-full mx-auto">
              {/* Staff Image and Description Container*/}
              <div className="flex flex-col w-full gap-16 md:flex-row items-center justify-center">
                {/* Image Container */}
                <div className="shrink-0 h-48 w-48 mobileSm:h-64 mobileSm:w-64 md:w-60 md:h-60 lg:h-96 lg:w-96">
                  <Image
                    style={{
                      objectPosition: "center",
                      objectFit: "cover",
                      width: "550px",
                      height: "550px",
                      maxHeight: "100%",
                      maxWidth: "100%",
                      borderRadius: "100%",
                    }}
                    src={staff.image?.asset?.url ?? ""}
                    alt={`An image of ${staff.name}`}
                    height={500}
                    width={500}
                    quality={100}
                  />
                </div>
                {/* Staff Description Container */}
                <div className="flex flex-col py-3 pr-0 w-11/12">
                  {/* Name & Title Container */}
                  <div className="flex justify-start items-center w-full gap-2 flex-wrap">
                    <h3 className="text-blue-550 dark:text-blue-350 font-roboto font-bold text-2xl">
                      {staff.name}
                    </h3>
                    <span className="text-roboto text-bold text-gray-850 dark:text-white">
                      {" "}
                      -{" "}
                    </span>
                    <h4 className="text-blue-550 dark:text-green-350 text-left font-roboto text-lg italic ">
                      {staff.position}
                    </h4>
                  </div>
                  <p className="py-3 text-base font-roboto text-gray-850 dark:text-white">
                    {staff.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End of Meet The Staff Container */}

        {/* Start of Insurance Section */}

        {/* Start of Insurance Section Wrapper */}
        <div className="w-full bg-white dark:bg-gray-800 py-28">
          <div className="max-w-screen-xl w-11/12 mx-auto">
            <h2 className="font-roboto font-bold capitalize text-4xl sm:text-5xl text-center text-gray-850 dark:text-white pb-20">
              We Accept
            </h2>
            <div className="grid grid-cols-1 mobileSm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
              {insurances.map((insurance, index) => (
                <div key={index}>
                  <Image
                    className="max-h-250px w-full dark:rounded-lg"
                    src={insurance.image?.asset?.url ?? ""}
                    alt="An image of the insurance logo"
                    height={200}
                    width={250}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* End of Insurance Wrapper */}
        </div>

        {/* End of Insurance Section */}
      </section>
    </div>
  );
};

export default AboutUs;