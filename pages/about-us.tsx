import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";

import insurance from "../utils/data/insurance";

const AboutUs: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About Us | Hands on Physiotherapy and Rehab Centre</title>
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
      <Navbar />
      <section
        className="mx-auto my-12 max-w-screen-xl w-11/12 pt-2"
        id="about-us"
      >
        <div className="max-w-screen-xl m-auto w-11/12 ">
          <div className="grid w-full my-12 mx-auto place-items-center bg-cover bg-center flex bg-base-200">
            <div className="z-0 flex items-center justify-center max-w-7xl gap-6 flex-col ">
              <div className="flex flex-col gap-11 items-center lg:items-start">
                <h1 className="flex flex-col gap-3 text-5xl text-left font-bold uppercase text-blue-350 ">
                  About Us
                </h1>
              </div>
              <div className="m-auto">
                <Image
                  src="/images/about/aboutUs.png"
                  className="rounded-lg shadow-2xl w-full"
                  alt="image"
                  height={0}
                  width={445}
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="my-5 font-bold uppercase tracking-wide text-3xl bg-gradient-to-r from-blue-350 via-green-350 to-blue-550 bg-clip-text fill-transparent [-webkit-text-fill-color:transparent]">
          Who We Are
        </h2>
        <p className="mt-4 text-xl font-light">
          We are a multidisciplinary clinic with experience in the assessment,
          diagnosis and treatment of orthopedic, neurological, musculoskeletal,
          pelvic health, geriatric, headache, kid's/adult's sports injuries,
          motor vehicle injuries, slip and fall, postural and work-related
          injuries and your everyday aches and pains. We offer high quality,
          effective care to the people of Box Grove, in the heart of Markham
          city. Our HOPARC's team includes Physiotherapist, Pelvic Health
          Physiotherapist, Massage Therapists, Chiropodist, Podiatrist etc.
        </p>
        <h3 className="my-5 font-bold uppercase tracking-wide text-3xl bg-gradient-to-r from-blue-350 via-green-350 to-blue-550 bg-clip-text fill-transparent [-webkit-text-fill-color:transparent]">
          Our Purpose
        </h3>
        <p className="my-4 text-xl font-light">
          Hands on Physiotherapy and Rehab Centre specializes in treating ortho,
          musculoskeletal, neurological, pelvic floor, geriatric and sports
          injuries. Our purpose is to believe in, "Your Care, Pain Free Life is
          our Goal". An exceptional patient experience with "Hands on Treatment"
          on every visit and to create a great improvement and experience to all
          of our patients.
        </p>
        <div className="w-full bg-blue-550 flex py-10">
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

        <h4 className="uppercase my-5 font-bold uppercase tracking-wide text-3xl bg-gradient-to-r from-blue-350 via-green-350 to-blue-350 bg-clip-text fill-transparent [-webkit-text-fill-color:transparent]">
          We Accept
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2">
          {insurance.map((options, index) => (
            <div className="my-2.5 border-blue-550" key={index}>
              <Image
                src={options.image}
                alt={options.alt}
                height={250}
                width={250}
              />
            </div>
          ))}
        </div>
        <p className="my-10 italic">
          We submit claims on your behalf to your insurance provider as well as
          participating insurers on a third party portal that are able to access
          and if the insurance plan allows for assignment of benefits.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
