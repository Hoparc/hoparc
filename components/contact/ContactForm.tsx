import { Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useForm as useFormSpree } from "@formspree/react";
import Link from "next/link"


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
    reset,
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

  const handleClick = () => reset();

  return (
    <section id="contact-form" className="relative  rounded-b-lg bg-white shadow-md px-6 py-14 h-full">
      <form onSubmit={handleSubmit(onSubmit)} id="contact-form" className="h-full">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col justify-evenly gap-4 sm:flex-row">
            <label htmlFor="firstName" className="sr-only">
              First Name
            </label>
            <div className="flex flex-col w-full">
              {errors.firstName && <span className="absolute mt-10 ml-2 text-red-500 uppercase">required</span>}
              <input
                placeholder="First Name"
                className="rounded-md bg-blue-150 border border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full mb-2 sm:mb-0"
                {...register("firstName", { required: true, maxLength: 30 })}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              {errors.lastName && <span className="absolute mt-10 ml-2 text-red-500 uppercase">required</span>}
              <input
                placeholder="Last Name"
                className="rounded-md bg-blue-150 border border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full"
                {...register("lastName", { required: true, maxLength: 30 })}
              />
            </div>
          </div>
          <div className="flex flex-col justify-evenly gap-4 sm:flex-row">
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              {errors.email && <span className="absolute mt-10 ml-2 text-red-500 uppercase">required</span>}
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
              <label htmlFor="phone"></label>
              {errors.phone && (
                <span className="absolute mt-10 ml-2 text-red-500 uppercase">Provide valid number</span>
              )}
              <Controller
                {...register("phone", { required: true })}
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

          <div className="flex">
            <label htmlFor="subject" className="sr-only">
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
            {errors.subject && <span className="absolute mt-10 ml-2 text-red-500 uppercase">required</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="sr-only">
              Leave us a message!
            </label>
            <textarea
              rows={4}
              placeholder="Hi, I'd like to book an appointment!"
              className="rounded-md bg-blue-150 border border-gray-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350  resize-none"
              {...register("message", {
                required: true,
                minLength: 5,
                maxLength: 500,
              })}
            />
            {errors.message && <span className="absolute mt-32 ml-2 text-red-500 uppercase">required</span>}
          </div>
          <div className="flex justify-end gap-4 pt-5">
            <input
              type="submit" value="submit"
              className="rounded-lg bg-blue-500 text-sm px-6 py-4 font-roboto font-bold uppercase text-white hover:bg-green-350 hover:text-blue-850 w-full cursor-pointer"
            />
            <button
              onClick={handleClick}
              className="rounded-lg bg-red-500 uppercase text-sm px-6 py-2 font-roboto font-bold uppercase text-white hover:bg-green-350 hover:text-blue-850 w-full"
            >
              Reset
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
            <p className="mt-10 text-xl font-roboto uppercase text-accent font-bold">sending...</p>
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

            <p className="mt-10 text-xl text-blue-550 font-roboto text-accent font-bold uppercase">
              message sent!
            </p>
            <p className="text-sm font-roboto text-blue-550 my-5 sm:text-lg">We'll get back to you as soon as possible!</p>
            <Link href="/">
              <button className="rounded-lg bg-blue-350 px-6 py-2 font-roboto uppercase text-white hover:bg-green-350 hover:text-blue-850">
                return home
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

  );
}



export default ContactForm