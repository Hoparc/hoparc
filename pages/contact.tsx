import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Fragment } from "react";

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

const Contact: NextPage<ContactProps> = ({ locations }: ContactProps) => {
  return (
    <div>
      {locations?.map((location) => (
        <Fragment key={location.__typename}>
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
            <Image
              src="/images/contact/contactBanner.png"
              alt="Banner image with colored striped shapes and an image of someone holding a phone the middle"
              height={423}
              width={2560}
              className="object-cover object-center max-h-64 w-full"
              priority
            />
            <div className="bg-blue-350 w-full">
              <div className="max-w-screen-xl m-auto w-11/12">
                <h2 className="text-3xl text-left py-3 font-bold uppercase text-white">
                  contact
                </h2>
              </div>
            </div>
            <div className="max-w-screen-xl m-auto w-95% sm:w-11/12">
              <div
                className="mx-auto lg:mx-20 bg-blue-550 rounded-xl m-20 "
                id="contact"
              >
                <div className="flex flex-col gap-5 py-6 px-2">
                  <div className="flex flex-col">
                    <div className="flex flex-col items-center px-6 md:px-36 sm:px-10 md:pt-0 ">

                      <p className="font-roboto italic text-blue-150 text-base mb-4">
                        Feel free to fill in the form below or contact us directly with any questions you
                        may have or with any scheduling inquiries. We keep your
                        information private and will not share it with third
                        parties.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 w-full m-auto gap-y-5 sm:flex-row">
                    <div className="flex flex-col flex-1 items-center md:pt-0">
                      <h2 className="mb-6 text-2xl text-green-350 font-roboto uppercase text-center">
                        Hands on physiotherapy
                      </h2>
                      <div>
                        <address className="font-roboto not-italic text-base text-blue-150  flex flex-col ">
                          <a
                            className="flex flex-col underline hover:text-green-350 hover:no-underline"
                            target={"_blank"}
                            href="https://www.google.com/maps?ll=43.871323,-79.218709&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=3757030601779132263"
                            aria-label="link to google maps location of Hands On Physiotherapy And Rehab Centre/Pelvic Health"
                          >
                            <span>
                              {location.address}
                            </span>
                            <span>
                              {location.addresslinen}
                            </span>
                          </a>
                        </address>
                        <p className="font-normal text-base font-roboto text-blue-150 hover:text-green-350">
                          Phone: {""}
                          <a href="tel: +1(289) 554-9090" className="underline">
                            {location.phone}
                          </a>
                        </p>
                        <p className="font-normal text-base font-roboto text-blue-150 hover:text-green-350">
                          Fax: {""}
                          <a href="+1(905) 201-9909" className="underline">
                            {location.fax}
                          </a>
                        </p>
                        <p className="font-normal text-base font-roboto text-blue-150 hover:text-green-350">
                          Email: {""}
                          <a
                            className="underline italic"
                            href="mailto:info@hoparc.com?subject=Book%20Appointment"
                          >
                            {location.email}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 items-center md:pt-0">
                      <h2 className="mb-6 text-2xl text-green-350 font-roboto  uppercase text-left">
                        Store Hours
                      </h2>
                      <ul className="font-roboto text-base text-slate-200 text-left">
                        <li>Sunday: {location.sunday}</li>
                        <li>Monday: {location.monday}</li>
                        <li>Tuesday: {location.tuesday}</li>
                        <li>Wednesday: {location.wednesday}</li>
                        <li>Thursday: {location.thursday}</li>
                        <li>Friday: {location.friday}</li>
                        <li>Saturday: {location.saturday}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="py-4 bg-blue-350">
                  <p></p>
                </div>
                <ContactForm />
              </div>
            </div>
          </section>
        </Fragment>
      ))}
    </div>
  );
};

export default Contact;