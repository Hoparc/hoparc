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
} from "../graphql-operations";

import Hero from "../components/landing/Hero";
import LetUsHelp from "../components/landing/LetUsHelp";
import OurServices from "../components/landing/OurServices/OurServices";
import Testimonials from "../components/landing/Testimonials/Testimonials";
import WhyChooseUs from "../components/landing/WhyChooseUs";

type HomeProps = {
  callToAction: string | null | undefined;
  url: string | null | undefined;
  testimonials: TestimonialFragment[];
};

const transformQueryResponseToProps = (
  data: AllIntroductionsQuery,
  testimonialData: AllTestimonialsQuery
): HomeProps => {
  const allIntroduction: IntroductionFragment[] = data?.allIntroduction;
  const introduction = allIntroduction[0];
  const { callToAction, image } = introduction;
  const url = image?.asset?.url;

  const allTestimonial: TestimonialFragment[] = testimonialData?.allTestimonial;
  const testimonials = allTestimonial;
  console.log(testimonials);

  return {
    callToAction,
    url,
    testimonials,
  };
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const [{ data: introductionData }, { data: testimonialData }] =
    await Promise.all([
      client.query<AllIntroductionsQuery>({
        query: AllIntroductionsDocument,
      }),
      client.query<AllTestimonialsQuery>({
        query: AllTestimonialsDocument,
      }),
    ]);
  return {
    props: transformQueryResponseToProps(introductionData, testimonialData),
  };
};

const Home: NextPage<HomeProps> = ({
  callToAction,
  url,
  testimonials,
}: HomeProps) => {
  return (
    <>
      <Head>
        <title>Hands on Physiotherapy and Rehab Centre</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#0072C6" key="theme" />
        <meta
          name="description"
          content="physiotherapy and rehab centre located in Markham, Ontario"
        />
        <meta name="keywords" content="physiotherapy" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="min-h-screen flex flex-col bg-slate-150">
        <Hero callToAction={callToAction} url={url} />
        <WhyChooseUs />
        <OurServices hasShowMore={true} />
        <Testimonials hasShowMore={true} testimonials={testimonials} />
        <LetUsHelp />
      </section>
    </>
  );
};

export default Home;