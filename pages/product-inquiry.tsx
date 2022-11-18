import { Fragment, SetStateAction, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, NextPage } from "next";

import { HiChevronLeft } from "react-icons/hi";

import client from "../apollo-client";
import {
  AllLocationsDocument,
  AllLocationsQuery,
  AllProductsDocument,
  AllProductsQuery,
  LocationFragment,
} from "../graphql-operations";

import { useForm, Controller } from "react-hook-form";
import { useForm as useFormSpree } from "@formspree/react";

import { Transition } from "@headlessui/react";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

type FormValues = {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
};

type ProductInquiryProps = {
  products: AllProductsQuery["allProduct"];
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<ProductInquiryProps> = async () => {
  const [{ data: productData }, { data: locationData }] = await Promise.all([
    client.query<AllProductsQuery>({
      query: AllProductsDocument,
    }),
    client.query<AllLocationsQuery>({
      query: AllLocationsDocument,
    }),
  ]);

  return {
    props: {
      products: productData?.allProduct ?? [],
      locations: locationData?.allLocation ?? [],
    },
    revalidate: 200,
  };
};

const ProductInquiry: NextPage<ProductInquiryProps> = ({
  products,
}: ProductInquiryProps) => {
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
        <title>Product Inquiry | Hands on Physiotherapy and Rehab Centre</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#327CDF" />
        <meta
          name="description"
          content="product inquiry at Hands on Physiotherapy and Rehab Centre"
        />
        <meta
          name="keywords"
          content="product inquiry, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section
        id="product-inquiry"
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 animate-fade-in-up min-h-screen"
      >
        <div className="flex p-2">
          <Link href="/products">
            <span className="flex font-button text-xl items-center mb-2 cursor-pointer text-black dark:text-white hover:text-green-350 ">
              <HiChevronLeft
                className="block h-4 mr-2 mt-0.5"
                aria-hidden="true"
              />
              Back
            </span>
          </Link>
        </div>
        <div className="flex p-8 flex-col items-center justify-center bg-blue-550 rounded-t-xl">
          <h1 className="my-5 text-3xl sm:text-5xl tracking-tight text-center font-roboto font-bold uppercase text-white px-4 bg-clip-text ">
            We strive to put your{" "}
            <strong className="text-green-350">care</strong> first
          </h1>
        </div>
        <div className="bg-blue-350 py-4"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-gray-800 dark:border dark:border-1 dark:border-slate-700 py-8 px-2 rounded-b-xl shadow-md lg:p-8 sm:px-4"
        >
          <h2 className="text-2xl text-gray-550 dark:text-white font-monsterrat font-semibold">
            Let's get to know you
          </h2>
          <div className="flex flex-col space-y-6">
            <div className="grid grid-cols-1 space-y-3">
              <div className="flex flex-col justify-evenly gap-4 sm:flex-row">
                <div className="flex flex-col w-full">
                  {errors.firstName && (
                    <span className="absolute mt-10 ml-2 text-red-500">
                      required
                    </span>
                  )}
                  <label
                    htmlFor="firstName"
                    className="block mb-2 mt-5 text-sm text-gray-900 dark:text-white"
                  >
                    Legal First Name
                  </label>
                  <input
                    placeholder="First Name"
                    className="rounded-md border bg-blue-150 border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full mb-2 sm:mb-0 font-opensans"
                    {...register("firstName", {
                      required: true,
                      maxLength: 30,
                    })}
                  />
                </div>

                <div className="flex flex-col w-full">
                  {errors.lastName && (
                    <span className="absolute mt-10 ml-2 text-red-500">
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
                    className="rounded-md border bg-blue-150 border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full mb-2 sm:mb-0 font-opensans"
                    {...register("lastName", { required: true, maxLength: 30 })}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-evenly gap-2 sm:flex-row font-opensans">
              <div className="flex flex-col w-full">
                {errors.email && (
                  <span className="absolute mt-10 ml-2 text-red-500">
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
                      value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
              </div>
              <div className="flex flex-col w-full text-left">
                {errors.phone && (
                  <span className="absolute mt-10 ml-2 text-red-500">
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
            <p className="text-xl">What is your preferred method of contact?</p>
            <div className="flex flex-col gap-4">
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
              Which product would you like to purchase?
            </h3>
            <div className="flex-1 font-opensans">
              <div className="flex flex-col mb-2 items-start">
                <label
                  htmlFor="subject"
                  className="text-black font-semibold flex-shrink-0 text-md mb-2"
                >
                  Select Product
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
                  {products.map((product) => (
                    <option
                      key={product.name ?? "Product name"}
                      value={product.name ?? "Product name"}
                    >
                      {product.name}
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

            <div className="flex flex-col font-opensans pt-5 gap-5">
              <h3 className="text-2xl text-gray-550 dark:text-white font-monsterrat font-semibold">
                Have any questions for us?
              </h3>
              <label htmlFor="message">Message</label>
              <textarea
                rows={5}
                placeholder="Message"
                className="rounded-md bg-blue-150 border border-gray-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 md:col-span-2 resize-none"
                {...register("message", {
                  required: true,
                  minLength: 5,
                  maxLength: 500,
                })}
              />
              {errors.message && (
                <span className="absolute mt-textareaRem ml-2 text-red-500">
                  required
                </span>
              )}
            </div>

            <div className="flex ">
              <button
                type="submit"
                value="Send"
                className="w-full rounded-md bg-blue-650 px-14 py-4 mt-4 text-sm font-roboto bold uppercase text-white hover:bg-blue-750 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Submit
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
                <button className="rounded-lg bg-blue-350 px-6 py-2 font-bold uppercase text-white hover:bg-green-350">
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

export default ProductInquiry;
