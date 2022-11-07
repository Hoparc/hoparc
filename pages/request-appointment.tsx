import Link from "next/link";
import { Fragment } from "react";

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

function RequestAppointment() {
  const [formSpreeState, sendToFormSpree] = useFormSpree("mdobokkz");

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

  const handleReset = () => reset();

  return (
    <section
      id="request-appointment"
      className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 animate-fade-in-up min-h-screen"
    >
      <div className="flex pb-12 flex-col items-center justify-center">
        <h1 className="my-5 font-bold text-7xl tracking-tight sm:text-4xl text-center font-title uppercase px-4 bg-gradient-to-r from-blue-350 via-green-350 to-blue-550 bg-clip-text fill-transparent [-webkit-text-fill-color:transparent]">
          Your <strong>care</strong> is our goal.
        </h1>
        <p className="mt-3  text-xl text-black font-light sm:mt-4 text-left px-3">
          We are a multidisciplinary clinic with experience in the assessment,
          diagnosis and treatment of orthopedic, neurological, musculoskeletal,
          pelvic health, geriatric, headache, kid's/adult's sports injuries,
          motor vehicle injuries, slip and fall, postural and work-related
          injuries and your everyday aches and pains. We offer high quality,
          effective care to the people of Box Grove, in the heart of Markham
          city. Our HOPARC's team includes Physiotherapist, Pelvic Health
          Physiotherapist, Massage Therapists, Chiropodist, Podiatrist etc.
        </p>
        <p className="mt-3  text-xl text-black font-light sm:mt-4 text-left px-3">
          Our clinic believes in "your care is our goal" and we have an
          optimistic, dynamic, supervised active approach to rehabilitation. Our
          physiotherapists at Hands on Physio use manual therapy techniques, Hot
          stone soft tissue release, Mobilization soft tissue release technique,
          different modalities, exercise programs which include assistive
          support exercising with supervised ex program and personalized home ex
          program, taping, education and the latest in modern therapy equipment
          in their approach to treatment.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full mb-2 sm:mb-0"
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
                  className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full"
                  {...register("lastName", { required: true, maxLength: 30 })}
                />
              </div>
            </div>
          </div>
          <h3 className="text-3xl">When would you like to come in?</h3>
          <label htmlFor="date" className="flex-shrink-0 text-xl">
            Preferred Date
          </label>
          <Controller
            control={control}
            name="ReactDatepicker"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <ReactDatePicker
                className="input block w-full"
                placeholderText="Select date"
                onChange={(e) => onChange(e)}
                onBlur={onBlur}
                selected={value}
              />
            )}
          />
          <label htmlFor="time" className="flex-shrink-0 text-xl">
            Preferred Time
          </label>
          <div className="flex flex-col w-full">
            {errors.time && (
              <span className="absolute mt-10 ml-2 text-red-500">required</span>
            )}
            <input
              type="time"
              className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full"
              {...register("time", { required: true, maxLength: 30 })}
            />
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
                className="rounded-md border border-slate-200 px-4 py-2 w-full outline-none hover:border-green-350 focus:border-green-350"
                {...register("subject", {
                  required: true,
                  minLength: 5,
                  maxLength: 30,
                })}
              >
                <option value="physiotherapy">Physiotherapy</option>
                <option value="pelvic health physiotherapy">
                  Pelvic Health Physiotherapy
                </option>
                <option value="massage therapy">Massage Therapy</option>
                <option value="thai massage">Thai Massage</option>
                <option value="chiropractor">Chiropractor</option>
                <option value="acupuncture">Acupuncture</option>
                <option value="hot stone physiotherapy">
                  Hot Stone Physiotherapy
                </option>
              </select>
              {errors.subject && (
                <span className="absolute mt-10 ml-2 text-red-500">
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
              rows={4}
              placeholder="Hi, I'd like to request an appointment!"
              className="rounded-md border border-gray-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 md:col-span-2 resize-none"
              {...register("message", {
                required: true,
                minLength: 5,
                maxLength: 500,
              })}
            />
            {errors.message && (
              <span className="absolute mt-28 ml-2 text-red-500">required</span>
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
                className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full mb-2 sm:mb-0"
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
                {...register("phone", { required: true })}
                name="phone"
                control={control}
                rules={{
                  validate: (value) => isValidPhoneNumber(value),
                }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-green-350 focus:border-green-350 w-full"
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
          <div className="flex gap-6 mt-2">
            <input
              type="Submit"
              value="Send"
              className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-roboto bold uppercase text-white hover:bg-green-350 hover:text-blue-550 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            />
            <button
              onClick={handleReset}
              className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-roboto bold uppercase text-white hover:bg-red-700 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Clear Fields
            </button>
          </div>
          {/* <div className="flex gap-2 mt-6">
            <button
              type="button"
              className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-roboto bold uppercase text-white hover:bg-green-350 hover:text-blue-550 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Request Appointment{" "}
              <HiMail className="ml-2 h-5 w-5 inline-block" />
            </button>
          </div> */}
          {/* <div className="flex gap-2 mt-6">
            <input
              type="submit"
              value="Request Appointment"
              className="rounded-lg bg-blue-500 text-sm px-6 py-2 font-roboto font-bold uppercase text-white hover:bg-green-350 hover:text-blue-550 cursor-pointer"
            />
          </div> */}
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
              We'll get back to you as soon as possible!
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
  );
}

export default RequestAppointment;
