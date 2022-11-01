import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";

import insurance from "../utils/data/insurance";

const AboutUs: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-150">
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
      <div className="mx-5 lg:mx-64 my-12 lg:my-24 bg-slate-150" id="about-us">
        <h2 className="my-5 font-bold uppercase tracking-wide text-4xl bg-gradient-to-r from-blue-350 via-green-350 to-blue-350 bg-clip-text fill-transparent [-webkit-text-fill-color:transparent]">
          About Us
        </h2>
        <p>
          Hands on Physiotherapy and Rehab Centre is a multidisciplinary clinic
          with experience in the assessment, diagnosis and treatment of
          orthopedic, neurological, musculoskeletal, pelvic health, geriatric,
          headache, kid's/adult's sports injuries, motor vehicle injuries, slip
          and fall, postural and work-related injuries and your everyday aches
          and pains. We offer high quality, effective care to the people of Box
          Grove, in the heart of Markham city. Our HOPARC's team includes
          Physiotherapist, Pelvic Health Physiotherapist, Massage Therapists,
          Chiropodist, Podiatrist etc.
        </p>
        <h3 className="my-5 font-bold uppercase tracking-wide text-3xl bg-gradient-to-r from-blue-350 via-green-350 to-blue-550 bg-clip-text fill-transparent [-webkit-text-fill-color:transparent]">
          Our Purpose
        </h3>
        <p>
          Hands on Physiotherapy and Rehab Centre specializes in treating ortho,
          musculoskeletal, neurological, pelvic floor, geriatric and sports
          injuries. Our purpose is to believe in, "Your Care, Pain Free Life is
          our Goal". An exceptional patient experience with "Hands on Treatment"
          on every visit and to create a great improvement and experience to all
          of our patients.
        </p>
        <h4 className="my-5 font-bold uppercase tracking-wide text-3xl bg-gradient-to-r from-blue-350 via-green-350 to-blue-350 bg-clip-text fill-transparent [-webkit-text-fill-color:transparent]">
          Our Values
        </h4>

        <p className="mb-2">Excellent in customer service</p>

        <p className="mb-2">
          Teamwork, discipline, punctuality, and one on one care
        </p>
        <p className="mb-2">Ongoing education and professional development</p>
        <p className="mb-2">Respect</p>
        <p className="mb-2">Your care free pain is our goal!</p>
        <p className="my-10">
          Hands on Physiotherapy and Rehab Centre submit claims on your behalf
          to your insurance provider as well as participating insurer on a third
          party portal that are able to access and if the insurance plan allows
          for assignment of benefits.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2">
          {insurance.map((options, index) => (
            <div className="my-2.5" key={index}>
              <Image
                src={options.image}
                alt={options.alt}
                height={250}
                width={250}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
