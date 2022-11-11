import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

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
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About | Hands on Physiotherapy and Rehab Centre</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#0072C6" key="theme" />
        <meta
          name="description"
          content="About us page for Hands on Physiotherapy and Rehab Centre"
        />
        <meta
          name="keywords"
          content="hands on physiotherapy and rehab centre about us"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <div className="bg-blue-350 w-full">
        <div className="max-w-screen-xl m-auto w-11/12">
          <h2 className="text-3xl text-center p-14 font-bold uppercase text-white">
            about
          </h2>
        </div>
      </div>
      <section
        className="mx-auto my-12 max-w-screen-xl w-11/12 pt-2"
        id="about-us"
      >

        <div className="max-w-screen-xl m-auto w-11/12 ">
          <div className="grid w-full my-12 mx-auto place-items-center bg-cover bg-center bg-base-200">
            <div className="z-0 flex items-center justify-center max-w-7xl gap-6 flex-col ">

              <div className="m-auto">
                <Image
                  src={url ?? ""}
                  className="rounded-lg shadow-2xl w-full"
                  alt="image"
                  height={0}
                  width={445}
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="my-10 font-bold uppercase tracking-wide text-3xl bg-gradient-to-r from-blue-350 via-green-350 to-blue-550 bg-clip-text fill-transparent [-webkit-text-fill-color:transparent]">
          Our Story
        </h2>
        <p className="my-10 text-xl font-light">{story}</p>

        <h3 className="my-10 font-bold uppercase tracking-wide text-3xl bg-gradient-to-r from-blue-350 via-green-350 to-blue-550 bg-clip-text fill-transparent [-webkit-text-fill-color:transparent]">
          Our Purpose
        </h3>

        <p className="my-4 text-xl font-light">{purpose}</p>
        <div className="w-full bg-blue-550 flex py-10 rounded-3xl">
          <div className="max-w-screen-xl m-auto w-11/12 flex flex-col items-center gap-11">
            <h2 className="capitalize text-white text-5xl font-roboto font-light text-center">
              Our Values
            </h2>
            <div className="flex flex-col gap-6 lg:flex-row ">
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/images/about/customerServiceIcon.webp"
                  className="max-w-xl bg-white rounded-3xl"
                  alt="Icon for customer service with a headset"
                  height={120}
                  width={120}
                />
                <h3 className="capitalize text-white font-roboto text-2xl text-center">
                  Service
                </h3>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/images/about/developmentIcon.webp"
                  className="max-w-xl bg-white rounded-3xl"
                  alt="Icon for development representing a book"
                  height={120}
                  width={120}
                />
                <h3 className="capitalize text-white font-roboto text-2xl text-center">
                  Development
                </h3>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/images/about/respectIcon.webp"
                  className="max-w-xl bg-white rounded-3xl"
                  alt="Icon for respect representing a handshake"
                  height={120}
                  width={120}
                />
                <h3 className="capitalize text-white font-roboto text-2xl text-center">
                  Respect
                </h3>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/images/about/careIcon.webp"
                  className="max-w-xl bg-white rounded-3xl"
                  alt="Icon for respect representing two hands with a heart above both hands"
                  height={120}
                  width={120}
                />
                <h3 className="capitalize text-white font-roboto text-2xl text-center">
                  Care
                </h3>
              </div>
            </div>
          </div>
        </div>

        <h3 className="my-10 font-bold uppercase tracking-wide text-3xl bg-gradient-to-r from-blue-350 via-green-350 to-blue-550 bg-clip-text fill-transparent [-webkit-text-fill-color:transparent]">
          meet the staff
        </h3>

        {staffs.map((staff, index) => (
          <div
            className="my-8 flex w-full m-auto lg:w-3/4"
            key={index}
          >
            <div className="flex flex-col shadow-lg shadow-slate-300 bg-slate-200 rounded-lg w-full gap-4 sm:flex-row">
              <div className="shrink-0 ">
                <Image
                  className=" m-auto w-full max-w-11/12 rounded-r-lg  rounded-b-none rounded-t-lg sm:rounded-r-none sm:rounded-l-lg"
                  src={staff.image?.asset?.url ?? ""}
                  alt={`An image of ${staff.name}`}
                  height={550}
                  width={250}
                  quality={100}
                />
              </div>
              <div className="flex flex-col py-3 pr-0  w-full sm:pr-3">
                <p className="text-blue-550 text-left font-bold text-2xl py-1 px-2 sm:rounded-t-md">
                  {staff.name}
                </p>
                <h3 className="text-blue-550 text-left text-lg px-2 py-1 w-full sm:rounded-b-md">
                  {staff.position}
                </h3>
                <p className="py-3 px-3 text-base font-serif">{staff.description}</p>
              </div>
            </div>
          </div>
        ))}

        <h4 className="uppercase my-10 font-bold tracking-wide text-3xl bg-gradient-to-r from-blue-350 via-green-350 to-blue-350 bg-clip-text fill-transparent [-webkit-text-fill-color:transparent]">
          We Accept
        </h4>
        <div className="grid grid-cols-1  mobileSm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
          {insurances.map((insurance, index) => (
            <div key={index}>
              <Image
                className="max-h-250px w-full rounded-xl drop-shadow-md"
                src={insurance.image?.asset?.url ?? ""}
                alt="An image of the insurance logo"
                height={200}
                width={250}
              />
            </div>
          ))}
        </div>
        <p className="my-10 w-full xl:w-5/12 md:w-3/4 m-auto italic">
          * We submit claims on your behalf to your insurance provider as well as
          participating insurers on a third party portal that are able to access
          and if the insurance plan allows for assignment of benefits.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;