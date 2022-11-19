import { Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { useForm as useFormSpree } from "@formspree/react";
import Link from "next/link";

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

function ContactForm() {
  const [formSpreeState, sendToFormSpree] = useFormSpree("xvoywvlv");

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

  return (
    <section
      id="contact-form"
      className="relative rounded-lg bg-white dark:bg-gray-800 shadow-md px-2 my-20 mobileSm:px-6 py-6 h-full dark:border dark:border-1 dark:border-slate-700"
    >
      <div className="flex flex-col-reverse gap-3 md:gap-12 xl:flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="contact-form"
          className="w-full flex-1 m-auto pt-4 xl:pt-0"
        >
          <div className="flex flex-col space-y-8">
            <h2 className="text-2xl text-gray-550 dark:text-white font-monsterrat font-semibold">
              Let's get to know you
            </h2>
            <div className="flex flex-col justify-evenly gap-4 gap-y-8 sm:flex-row">
              <div className="flex flex-col w-full">
                {errors.firstName && (
                  <span className="absolute mt-10 ml-2 text-red-500 uppercase">
                    required
                  </span>
                )}
                <label
                  htmlFor="firstName"
                  className="block mb-2 mt-5 text-sm text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  placeholder="First Name"
                  className="rounded-md bg-blue-150 border border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full mb-2 sm:mb-0"
                  {...register("firstName", { required: true, maxLength: 30 })}
                />
              </div>
              <div className="flex flex-col w-full">
                {errors.lastName && (
                  <span className="absolute mt-10 ml-2 text-red-500 uppercase">
                    required
                  </span>
                )}
                <label
                  htmlFor="lastName"
                  className="block mb-2 mt-5 text-sm text-gray-900 dark:text-white"
                >
                  Last Name
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
                  <span className="absolute mt-10 ml-2 text-red-500 uppercase">
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
                  <span className="absolute mt-10 ml-2 text-red-500 uppercase">
                    Provide valid number
                  </span>
                )}
                <label
                  htmlFor="phone"
                  className="block mb-2 mt-5 text-sm text-gray-900 dark:text-white"
                >
                  Phone Number
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

            <div className="flex flex-col gap-8">
              <h3 className="text-2xl text-gray-550 dark:text-white font-monsterrat font-semibold">
                What can we help you with?
              </h3>
              <label
                htmlFor="subject"
                className="block text-sm text-gray-900 dark:text-white"
              >
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="rounded-md bg-blue-150 border border-slate-200 px-4 py-2 w-full outline-none hover:border-green-350 focus:border-green-350"
                {...register("subject", {
                  required: true,
                  minLength: 5,
                  maxLength: 30,
                })}
              />
              {errors.subject && (
                <span className="absolute mt-subjectRem ml-2 text-red-500 uppercase">
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
                <span className="absolute mt-8.6rem ml-2 text-red-500 uppercase">
                  required (max 1200 Chars)
                </span>
              )}
            </div>
            <div className="flex">
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
        <div className="flex-none xl:flex-1 h-64 xl:h-auto ">
          <iframe
            title="Google Maps"
            style={{ width: "100%", height: "100%" }}
            width="500"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Hands%20on%20physioptherapy%20Markham&t=&z=13&ie=UTF8&iwloc=&output=embed"
            scrolling="no"
            className="rounded-xl shadow-md dark:shadow-none"
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
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-white rounded-b-lg">
            <div className="flex flex-col md:flex-row"></div>
            <div className="flex flex-col items-center bg-slate-200 p-10 rounded-xl shadow-md text-center mx-3">
              <p className="mt-10 text-xl text-blue-550 font-roboto text-accent font-bold uppercase">
                message sent!
              </p>
              <p className="text-sm font-roboto text-blue-550 my-5 sm:text-lg">
                A member of our staff will get back to you as soon as possible!
              </p>
              <Link href="/">
                <button className="rounded-lg bg-blue-550 px-6 py-3 font-roboto uppercase text-white hover:bg-green-350 hover:text-blue-550">
                  return home
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
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-white bg-opacity-90">
            <p className="mt-10 text-xl text-accent font-bold">
              We apologize for the inconvenience, something went wrong.
            </p>
            <p className="text-lg">Please try again in a few minutes.</p>
          </div>
        </Transition>
      )}
    </section>
  );
}

export default ContactForm;
