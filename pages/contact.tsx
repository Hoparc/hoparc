import { NextPage } from "next";
import Head from "next/head";

import ContactForm from "../components/contact/ContactForm";

const Contact: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-150">
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

      <div className="mx-5 lg:mx-64 my-12 lg:my-24 bg-slate-150" id="contact">
        <div className="my-10 flex flex-col md:flex-row items-center justify-center">
          <div className="p-6 mx-10 max-w-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase text-center md:text-left">
              Locate us
            </h2>
            <address className="font-normal text-gray-700 text-xl flex flex-col">
              <p>338 Copper Creek Dr.</p>
              <p>Markham, ON L6B 1N8, Canada</p>
            </address>
          </div>
          <div className="p-6 mx-10 max-w-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase text-center md:text-left">
              Contact
            </h2>
            <p className="font-normal text-gray-700 text-xl">
              Phone: {""}
              <a href="tel: +1(289) 554-9090" className="underline">
                +1 (289) 554-9090
              </a>
            </p>
            <p className="font-normal text-gray-700 text-xl">
              Fax: {""}
              <a href="+1(905) 201-9909" className="underline">
                +1 (905) 201-9909
              </a>
            </p>
            <p className="font-normal text-gray-700 text-xl">
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

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
