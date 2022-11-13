import { Fragment, SetStateAction, useState } from "react";

import Head from "next/head";
import Link from "next/link";
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

      <section
        id="request-appointment"
        className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 animate-fade-in-up min-h-screen"
      >
        <div className="flex pb-12 flex-col items-center justify-center bg-blue-550 rounded-t-xl">
          <h1 className="my-5 font-bold text-7xl tracking-tight sm:text-4xl text-center font-title uppercase text-white px-4 bg-clip-text ">
            Your <strong className="text-green-350">care</strong> is our goal.
          </h1>
          <p className="mt-3 text-xl text-white font-light sm:mt-4 text-left px-5 md:px-20">
            We are a multidisciplinary clinic with experience in the assessment,
            diagnosis and treatment of orthopedic, neurological,
            musculoskeletal, pelvic health, geriatric, headache, kid's/adult's
            sports injuries, motor vehicle injuries, slip and fall, postural and
            work-related injuries and your everyday aches and pains. We offer
            high quality, effective care to the people of Box Grove, in the
            heart of Markham city. Our HOPARC's team includes Physiotherapist,
            Pelvic Health Physiotherapist, Massage Therapists, Chiropodist,
            Podiatrist etc.
          </p>
          <p className="mt-3 text-xl text-white font-light sm:mt-4 text-left px-5 md:px-20">
            Our clinic believes in "your care is our goal" and we have an
            optimistic, dynamic, supervised active approach to rehabilitation.
            Our physiotherapists at Hands on Physio use manual therapy
            techniques, Hot stone soft tissue release, Mobilization soft tissue
            release technique, different modalities, exercise programs which
            include assistive support exercising with supervised ex program and
            personalized home ex program, taping, education and the latest in
            modern therapy equipment in their approach to treatment.
          </p>
        </div>
        <div className="bg-blue-350 py-4"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white py-8 px-2 rounded-b-xl shadow-md lg:p-8 sm:px-4">
          <h2 className="text-3xl">Let's get to know you</h2>
          <div className="flex flex-col space-y-6">
            <div className="grid grid-cols-1 space-y-6">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <div className="flex flex-col justify-evenly gap-4 sm:flex-row">
                <div className="flex flex-col w-full">
                  {errors.firstName && (
                    <span className="absolute mt-10 ml-2 text-red-500">
                      required
                    </span>
                  )}
                  <input
                    placeholder="First Name"
                    className="rounded-md border bg-blue-150 border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full mb-2 sm:mb-0"
                    {...register("firstName", {
                      required: true,
                      maxLength: 30,
                    })}
                  />
                </div>

                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <div className="flex flex-col w-full">
                  {errors.lastName && (
                    <span className="absolute mt-10 ml-2 text-red-500">
                      required
                    </span>
                  )}
                  <input
                    placeholder="Last Name"
                    className="rounded-md border bg-blue-150 border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full"
                    {...register("lastName", { required: true, maxLength: 30 })}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-slate-200 rounded-xl lg:flex-row lg:pl-4">
              <div className="flex flex-col flex-1 justify-around py-4 gap-4">
                <h3 className="text-3xl mx-auto lg:mx-0">When would you like to come in?</h3>
                {errors.ReactDatepicker && (
                  <span className="absolute mt-10 ml-2 text-red-500">
                    Please enter a date.
                  </span>
                )}
                <div className="pl-8 lg:pl-0">
                  <label htmlFor="date" className="flex-shrink-0 text-xl">
                    Preferred Date
                  </label>
                  <Controller
                    control={control}
                    name="ReactDatepicker"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <ReactDatePicker
                        className="input block w-40 cursor-pointer bg-blue-150 border border-slate-200 rounded-md hover:border-green-350 py-2 px-4"
                        placeholderText="Select date"
                        onChange={(e) => onChange(e)}
                        onBlur={onBlur}
                        selected={value}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col w-full pl-8 lg:pl-0">
                  {errors.time && (
                    <span className="absolute mt-timeRequiredRem ml-2 text-red-500">
                      required
                    </span>
                  )}
                  <label htmlFor="time" className="flex-shrink-0 text-xl">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    className="rounded-md border bg-blue-150 border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-40"
                    {...register("time", { required: true, maxLength: 30 })}
                  />
                </div>
              </div>
              <div className="flex-1 shadow-md rounded-xl h-full lg:h-full">
                <iframe
                  style={{ width: "100%", borderRadius: "15px" }}
                  width="500"
                  height="400"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Hands%20on%20physioptherapy%20Markham&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  scrolling="no"
                >
                </iframe>
              </div>
            </div>
            <h4 className="text-3xl">Which service would you like?</h4>
            <div className="flex-1">
              <div className="flex mb-2 items-center">
                <label
                  htmlFor="subject"
                  className="text-gray-200 font-semibold flex-shrink-0 text-xl sr-only"
                >
                  Subject
                </label>
                <select
                  placeholder="Subject"
                  className="rounded-md border bg-blue-150 border-slate-200 px-4 py-2 w-full outline-none hover:border-green-350 focus:border-green-350 cursor-pointer"
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
                  <span className="absolute mt-14 ml-2 text-red-500">
                    required
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">
                Leave us a message!
              </label>
              <textarea
                rows={5}
                placeholder="Hi, I'd like to request an appointment!"
                className="rounded-md border bg-blue-150 border-gray-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 md:col-span-2 resize-none"
                {...register("message", {
                  required: true,
                  minLength: 5,
                  maxLength: 500,
                })}
              />
              {errors.message && (
                <span className="absolute mt-8.6rem ml-2 text-red-500">
                  required
                </span>
              )}
            </div>
            <h3 className="text-3xl mb-8">
              What is the best way for us to reach you?
            </h3>
            <div className="flex flex-col justify-evenly gap-2 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="flex flex-col w-full">
                {errors.email && (
                  <span className="absolute mt-10 ml-2 text-red-500">
                    required
                  </span>
                )}
                <input
                  type="text"
                  placeholder="Email"
                  className="rounded-md border bg-blue-150 border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full mb-2 sm:mb-0"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
              </div>
              <label htmlFor="phone"></label>
              <div className="flex flex-col w-full text-left">
                {errors.phone && (
                  <span className="absolute mt-10 ml-2 text-red-500">
                    Provide valid number
                  </span>
                )}
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    validate: (value) => isValidPhoneNumber(value),
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full bg-blue-150"
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
            <div className="flex">
              <button
                type="submit"
                value="Send"
                className="rounded-md bg-blue-550 px-14 py-4 mt-4 text-sm font-roboto bold uppercase text-white hover:bg-green-350 hover:text-blue-550 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Send
              </button>
            </div>
          </div>
        </form>
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
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-white bg-opacity-90">
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
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-white">
              <div className="flex flex-col md:flex-row"></div>

              <p className="mt-10 text-xl text-blue-550 font-roboto text-accent font-bold uppercase">
                message sent!
              </p>
              <p className="text-sm font-roboto text-blue-350 my-5 sm:text-lg">
                A member of our staff will get back to you as soon as possible!
              </p>
              <Link href="/">
                <button className="rounded-md bg-blue-550 px-10 py-5 text-sm font-roboto bold uppercase text-white hover:bg-green-350 hover:text-blue-550 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  RETURN HOME
                </button>
              </Link>
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
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-white bg-opacity-90">
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
