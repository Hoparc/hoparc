import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import client from "../apollo-client";

import {
  LocationFragment,
  AllLocationsQuery,
  AllLocationsDocument,
} from "../graphql-operations";

import ContactForm from "../components/contact/ContactForm";

type ContactProps = {
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<ContactProps> = async () => {
  const { data: locationData } = await client.query<AllLocationsQuery>({
    query: AllLocationsDocument,
  });

  const allLocation: LocationFragment[] = locationData.allLocation;
  const locations = allLocation;

  return {
    props: {
      locations,
    },
  };
};

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Hands on Physiotherapy and Rehab Centre</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#327CDF" key="theme" />
        <meta
          name="description"
          content="Contact page for Hands on Physiotherapy and Rehab Centre"
        />
        <meta
          name="keywords"
          content="hands on physiotherapy and rehab centre contact"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="min-h-screen flex flex-col bg-blue-150">
        <div className="max-w-screen-xl m-auto w-11/12">
          <div
            className="mx-auto lg:mx-20 bg-blue-550 rounded-lg m-20 "
            id="contact"
          >
            <div className="flex flex-col justify-evenly md:flex-row md:align-center gap-5 py-6 px-2">
              <div className="flex flex-col self-center md:self-start md:pt-0">
                <h2 className="mb-6 text-2xl text-green-350 font-roboto text-white uppercase text-center md:text-left">
                  Locate us
                </h2>
                <address className="font-roboto not-italic text-blue-150 text-lg flex flex-col text-center md:text-left">
                  <p>338 Copper Creek Dr.</p>
                  <p>Markham, ON L6B 1N8, Canada</p>
                </address>
              </div>
              <div className="flex flex-col self-center md:self-start md:pt-0 ">
                <h2 className="mb-6 text-2xl font-roboto text-green-350 text-white uppercase text-center md:text-left">
                  Contact
                </h2>
                <p className="font-normal font-roboto text-blue-150 hover:text-green-350 text-lg text-center md:text-left">
                  Phone: {""}
                  <a href="tel: +1(289) 554-9090" className="underline">
                    +1 (289) 554-9090
                  </a>
                </p>
                <p className="font-normal font-roboto text-blue-150 hover:text-green-350 text-lg text-center md:text-left">
                  Fax: {""}
                  <a href="+1(905) 201-9909" className="underline">
                    +1 (905) 201-9909
                  </a>
                </p>
                <p className="font-normal font-roboto text-blue-150 hover:text-green-350 text-lg">
                  Email: {""}
                  <a
                    className="underline"
                    href="mailto:info@hoparc.com?subject=Book%20Appointment"
                  >
                    info@hoparc.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-center font-roboto text-white text-base p-4 text-center bg-blue-350">
              <p>
                Please leave your information and we will contact you as soon as
                possible!
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
