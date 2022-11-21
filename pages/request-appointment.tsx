import { Fragment, SetStateAction, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps, NextPage } from "next";

import client from "../apollo-client";
import {
  AllLocationsDocument,
  AllLocationsQuery,
  AllServicesDocument,
  AllServicesQuery,
  LocationFragment,
} from "../graphql-operations";

import { useForm, Controller } from "react-hook-form";
import { useForm as useFormSpree } from "@formspree/react";

import { Transition } from "@headlessui/react";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

type FormValues = {
  firstName: string;
  lastName: string;
  time: string;
  ReactDatepicker: Date;
  subject: string;
  email: string;
  phone: string;
  message: string;
};

type RequestAppointmentProps = {
  services: AllServicesQuery["allService"];
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<
  RequestAppointmentProps
> = async () => {
  const [{ data: serviceData }, { data: locationData }] = await Promise.all([
    client.query<AllServicesQuery>({
      query: AllServicesDocument,
    }),
    client.query<AllLocationsQuery>({
      query: AllLocationsDocument,
    }),
  ]);

  return {
    props: {
      services: serviceData?.allService ?? [],
      locations: locationData?.allLocation ?? [],
    },
    revalidate: 200,
  };
};

const RequestAppointment: NextPage<RequestAppointmentProps> = ({
  services,
}: RequestAppointmentProps) => {
  const [formSpreeState, sendToFormSpree] = useFormSpree("xvoywvlv");
  const [userChoice, setUserChoice] = useState("");
  const [checkedPhone, setCheckedPhone] = useState(false);
  const [checkedEmail, setCheckedEmail] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      ReactDatepicker: new Date(),
      time: "",
      subject: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    sendToFormSpree(data);

    formSpreeState.submitting;

    setTimeout(() => {
      formSpreeState.succeeded;
    }, 2000);
  };

  const handleUserChoice = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setUserChoice(e.target.value);
  };

  const handleUserPreferredPhone = () => {
    setCheckedPhone(!checkedPhone);
  };

  const handleUserPreferredEmail = () => {
    setCheckedEmail(!checkedEmail);
  };

  return (
    <>
      <Head>
        <title>
          Request Appointment | Hands on Physiotherapy and Rehab Centre
        </title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#327CDF" />
        <meta
          name="description"
          content="request appointment at Hands on Physiotherapy and Rehab Centre"
        />
        <meta
          name="keywords"
          content="request appointment, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Image
        src="/images/contact/contactBanner.png"
        alt="Banner image with colored striped shapes and an image of someone holding a phone the middle"
        height={423}
        width={2560}
        className="object-cover object-center max-h-64 w-full"
        priority
      />
      <div className="bg-blue-550 w-full">
        <div className="max-w-screen-xl m-auto w-11/12">
          <h1 className="text-3xl sm:text-5xl text-center py-6 font-bold text-white">
            Your <span className="text-green-450">care</span> is our goal
          </h1>
        </div>
      </div>
      <section
        id="request-appointment"
        className="flex flex-col relative dark:bg-gray-900 py-6 h-full max-w-screen-xl m-auto w-95% sm:w-11/12"
      >
        <nav className="flex my-10" aria-label="Breadcrumb">
          <ol className="inline-flex flex-wrap items-center gap-y-3 space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-lg font-medium md:ml-2 dark:hover:text-blue-450  cursor-pointer text-gray-750 dark:text-white hover:text-blue-450"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link
                  href="/services"
                  className="ml-1 text-lg font-medium md:ml-2 dark:hover:text-blue-450 cursor-pointer text-gray-750 dark:text-white hover:text-blue-450"
                >
                  Services
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-lg font-medium md:ml-2 cursor-pointer text-gray-750 dark:text-white hover:text-blue-450">
                  Request Appointment
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h2 className="my-5 text-xl text-blue-550 dark:text-blue-350 font-semibold">
          Consulted by an experienced Clinician
        </h2>

        <p className="font-roboto text-left text-black dark:text-white text-lg mb-10">
          Ouc Clinic believes in "your care is our goal", we have a dynamic and
          supervised active approach to our patient's rehabilitation while
          keeping an optimistic point of view on your path to recovery.
        </p>

        <div className="flex flex-col-reverse gap-3 mb-20 md:gap-12 xl:flex-row relative rounded-lg bg-white dark:bg-gray-800 shadow-md px-2 mobileSm:px-6 py-6 h-full dark:border dark:border-1 dark:border-slate-700">
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="contact-form"
            className="w-full flex-1 m-auto pt-4 xl:pt-0 bg-white dark:bg-gray-800"
          >
            <div className="flex flex-col space-y-8">
              <h2 className="text-2xl text-gray-550 dark:text-white font-monsterrat font-semibold">
                Let's get to know you{" "}
              </h2>
              <div className="flex flex-col justify-evenly gap-4 gap-y-8 sm:flex-row">
                <div className="flex flex-col w-full">
                  {errors.firstName && (
                    <span className="absolute mt-24 ml-2 text-red-500 uppercase">
                      required
                    </span>
                  )}
                  <label
                    htmlFor="firstName"
                    className="block mb-2 mt-5 text-sm text-gray-850 dark:text-white"
                  >
                    Legal First Name
                  </label>
                  <input
                    placeholder="First Name"
                    className="rounded-md bg-blue-150 border border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full mb-2 sm:mb-0"
                    {...register("firstName", {
                      required: true,
                      maxLength: 30,
                    })}
                  />
                </div>
                <div className="flex flex-col w-full">
                  {errors.lastName && (
                    <span className="absolute mt-24 ml-2 text-red-500 uppercase">
                      required
                    </span>
                  )}
                  <label
                    htmlFor="lastName"
                    className="block mb-2 mt-5 text-sm text-gray-900 dark:text-white"
                  >
                    Legal Last Name
                  </label>
                  <input
                    placeholder="Last Name"
                    className="rounded-md bg-blue-150 border border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full"
                    {...register("lastName", { required: true, maxLength: 30 })}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-evenly gap-4 gap-y-8 sm:flex-row">
                <div className="flex flex-col w-full">
                  {errors.email && (
                    <span className="absolute mt-24 ml-2 text-red-500 uppercase">
                      required
                    </span>
                  )}
                  <label
                    htmlFor="email"
                    className="block mb-2 mt-5 text-sm text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="rounded-md bg-blue-150 border border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full mb-2 sm:mb-0"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                </div>

                <div className="flex flex-col w-full text-left">
                  {errors.phone && (
                    <span className="absolute mt-24 ml-2 text-red-500 uppercase">
                      Provide valid number
                    </span>
                  )}
                  <label
                    htmlFor="phone"
                    className="block mb-2 mt-5 text-sm text-gray-900 dark:text-white"
                  >
                    Phone
                  </label>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      validate: (value) => isValidPhoneNumber(value),
                    }}
                    render={({ field: { onChange, value } }) => (
                      <PhoneInput
                        className="rounded-md bg-blue-150 border border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full"
                        placeholder="Phone Number"
                        value={value}
                        onChange={onChange}
                        defaultCountry="CA"
                        id="phone-input"
                      />
                    )}
                  />
                </div>
              </div>
              <p className="text-xl dark:text-white">
                What is your preferred method of contact?
              </p>
              <div className="flex flex-col gap-64 gap-y-8 sm:flex-row">
                <label
                  htmlFor="phone"
                  className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  <input
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox"
                    checked={checkedPhone}
                    onChange={handleUserPreferredPhone}
                  />{" "}
                  Phone
                </label>
                <label
                  htmlFor="email"
                  className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  <input
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox"
                    checked={checkedEmail}
                    onChange={handleUserPreferredEmail}
                  />{" "}
                  Email
                </label>
              </div>
              <h3 className="text-2xl text-gray-550 dark:text-white font-monsterrat font-semibold">
                When would you like to come in?
              </h3>
              <div className="flex flex-col justify-evenly gap-4 gap-y-8 sm:flex-row">
                <div className="flex flex-col w-full">
                  {errors.ReactDatepicker && (
                    <span className="absolute mt-24 ml-2 text-red-500 uppercase">
                      required
                    </span>
                  )}
                  <label
                    htmlFor="date"
                    className="block mb-2 mt-5 text-sm text-gray-900 dark:text-white"
                  >
                    Preferred Date
                  </label>
                  <Controller
                    control={control}
                    name="ReactDatepicker"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <ReactDatePicker
                        className="input block w-full cursor-pointer bg-blue-150 border border-slate-200 rounded-md hover:border-green-350 py-2 px-4 font-opensans"
                        placeholderText="Select date"
                        onChange={(e) => onChange(e)}
                        onBlur={onBlur}
                        selected={value}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col w-full">
                  {errors.time && (
                    <span className="absolute mt-24 ml-2 text-red-500 uppercase">
                      required
                    </span>
                  )}
                  <label
                    htmlFor="time"
                    className="block mb-2 mt-5 text-sm text-gray-900 dark:text-white"
                  >
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    className="rounded-md border font-opensans bg-blue-150 border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full mb-3"
                    {...register("time", { required: true, maxLength: 30 })}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-8">
                <h3 className="text-2xl text-gray-550 dark:text-white font-monsterrat font-semibold">
                  What service would you like?
                </h3>
                <label
                  htmlFor="subject"
                  className="block mt-4 text-sm text-gray-900 dark:text-white"
                >
                  Service
                </label>
                <select
                  placeholder="Subject"
                  className="cursor-pointer rounded-md border bg-blue-150 border-slate-200 px-4 py-2 w-full outline-none hover:border-green-350 focus:border-green-350"
                  {...register("subject", {
                    required: true,
                  })}
                  value={userChoice}
                  onChange={handleUserChoice}
                >
                  {services.map((service) => (
                    <option
                      key={service.name ?? "Service name"}
                      value={service.name ?? "Service name"}
                    >
                      {service.name}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <span className="absolute mt-subjectRemAppointment ml-2 text-red-500 uppercase">
                    required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="mb-4 block text-sm text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="rounded-md bg-blue-150 border border-gray-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350  resize-none"
                  {...register("message", {
                    required: true,
                    minLength: 5,
                    maxLength: 1200,
                  })}
                />
                {errors.message && (
                  <span className="absolute mt-44 ml-2 text-red-500 uppercase">
                    required (max 1200 Chars)
                  </span>
                )}
              </div>
              <div className="flex">
                <button
                  type="submit"
                  value="Send"
                  className="w-full rounded-md bg-blue-650 px-14 py-4 mt-4 text-sm font-button bold uppercase text-white hover:text-blue-550 hover:bg-green-350 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="flex-none xl:flex-1 h-64 xl:h-auto ">
            <iframe
              title="Google Maps"
              style={{ width: "100%", height: "100%" }}
              width="500"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Hands%20on%20physioptherapy%20Markham&t=&z=13&ie=UTF8&iwloc=&output=embed"
              scrolling="no"
              className="rounded-md shadow-md dark:shadow-none"
            ></iframe>
          </div>
        </div>

        {formSpreeState.submitting && (
          <Transition
            as={Fragment}
            show={formSpreeState.submitting}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="flex flex-col justify-center items-center fixed  top-0 left-0 h-full w-full  bg-blue-150 bg-opacity-90">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
              <p className="mt-10 text-xl font-roboto uppercase text-accent font-bold">
                sending...
              </p>
            </div>
          </Transition>
        )}
        {formSpreeState.succeeded && (
          <Transition
            as={Fragment}
            show={formSpreeState.succeeded}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="flex flex-col justify-center items-center fixed top-0 left-0 h-full w-full bg-blue-150">
              <div className="flex flex-col md:flex-row"></div>
              <div className="flex flex-col items-center bg-slate-200 p-10 rounded-xl shadow-md text-center mx-3">
                <p className="mt-10 text-xl text-blue-550 font-roboto text-accent font-bold uppercase">
                  message sent!
                </p>
                <p className="text-sm font-roboto text-blue-350 my-5 sm:text-lg">
                  A member of our staff will get back to you as soon as
                  possible!
                </p>
                <Link href="/">
                  <button className="rounded-md bg-blue-550 px-10 py-5 text-sm font-roboto bold uppercase text-white hover:bg-green-350 hover:text-blue-550 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    RETURN HOME
                  </button>
                </Link>
              </div>
            </div>
          </Transition>
        )}
        {formSpreeState.errors && (
          <Transition
            as={Fragment}
            show={formSpreeState.errors.length > 0}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="flex flex-col justify-center items-center fixed   top-0 left-0 h-full w-full bg-blue-150 bg-opacity-90">
              <p className="mt-10 text-xl text-accent font-bold">
                We apologize for the inconvenience, something went wrong.
              </p>
              <p className="text-lg">Please try again in a few minutes.</p>
            </div>
          </Transition>
        )}
      </section>
    </>
  );
};

export default RequestAppointment;
