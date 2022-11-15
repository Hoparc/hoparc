import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import client from "../apollo-client";
import {
  AllIntroductionsDocument,
  IntroductionFragment,
  AllIntroductionsQuery,
  AllTestimonialsQuery,
  AllTestimonialsDocument,
  TestimonialFragment,
  ServiceFragment,
  AllServicesQuery,
  AllServicesDocument,
  AllLocationsQuery,
  LocationFragment,
  AllLocationsDocument,
} from "../graphql-operations";

import Hero from "../components/landing/Hero";
import LetUsHelp from "../components/landing/LetUsHelp";
import OurServices from "../components/landing/OurServices";
import Testimonials from "../components/landing/Testimonials";
import WhyChooseUs from "../components/landing/WhyChooseUs";

type HomeProps = {
  callToAction: string | null | undefined;
  url: string | null | undefined;
  testimonials: TestimonialFragment[];
  services: ServiceFragment[];
  locations: LocationFragment[];
};

const transformQueryResponseToProps = (
  data: AllIntroductionsQuery,
  testimonialData: AllTestimonialsQuery,
  serviceData: AllServicesQuery,
  locationData: AllLocationsQuery
): HomeProps => {
  const allIntroduction: IntroductionFragment[] = data?.allIntroduction;
  const introduction = allIntroduction[0];
  const { callToAction, image } = introduction;
  const url = image?.asset?.url;

  const allTestimonial: TestimonialFragment[] = testimonialData?.allTestimonial;
  const testimonials = allTestimonial;

  const allService: ServiceFragment[] = serviceData?.allService;
  const services = allService;

  const allLocation: LocationFragment[] = locationData.allLocation;
  const locations = allLocation;

  return {
    callToAction,
    url,
    testimonials,
    services,
    locations,
  };
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const [
    { data: introductionData },
    { data: testimonialData },
    { data: serviceData },
    { data: locationData },
  ] = await Promise.all([
    client.query<AllIntroductionsQuery>({
      query: AllIntroductionsDocument,
    }),
    client.query<AllTestimonialsQuery>({
      query: AllTestimonialsDocument,
    }),
    client.query<AllServicesQuery>({
      query: AllServicesDocument,
    }),
    client.query<AllLocationsQuery>({
      query: AllLocationsDocument,
    }),
  ]);
  return {
    props: transformQueryResponseToProps(
      introductionData,
      testimonialData,
      serviceData,
      locationData
    ),
  };
};

const Home: NextPage<HomeProps> = ({
  callToAction,
  url,
  testimonials,
  services,
}: HomeProps) => {
  return (
    <>
      <Head>
        <title>Hands on Physiotherapy and Rehab Centre</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="theme-color" content="#0072C6" key="theme" />
        <meta
          name="description"
          content="physiotherapy and rehab centre located in Markham, Ontario"
        />
        <meta name="keywords" content="physiotherapy" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="min-h-screen flex flex-col">
        <Hero callToAction={callToAction} url={url} />
        <WhyChooseUs />
        <OurServices hasShowMore={true} services={services} />
        <Testimonials hasShowMore={true} testimonials={testimonials} />
        <LetUsHelp />
      </section>
    </>
  );
};

export default Home;