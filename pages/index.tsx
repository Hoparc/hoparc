import type { GetStaticProps, NextPage } from "next";
;import { NextSeo } from "next-seo";


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
      <NextSeo
        title="Hands on Physiotherapy and Rehab Centre - Markham, ON"
        description="We are a physiotherapy and rehab centre located in Markham, Ontario."
        canonical="https://hoparc.com/"
        openGraph={{
          url: "https://hoparc.com/",
          title: "Hands on Physiotherapy and Rehab Centre",
          description:
            "We are a physiotherapy and rehab centre located in Markham, Ontario.",
          site_name: "Hands on Physiotherapy and Rehab Centre",
          type: "website",
          locale: "en_CA",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "physiotherapy, rehab centre, rehab,",
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