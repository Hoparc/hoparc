import { Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { useForm as useFormSpree} from "@formspree/react";
import  Link from "next/link"

import { Transition } from "@headlessui/react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import 'react-phone-number-input/style.css'


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
    control
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
    <section id="contact-form">
      <div className="relative z-20 rounded-md bg-white p-12 shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex flex-col space-y-5 mt-5">
            <div className="grid grid-cols-1 space-y-3">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                placeholder="First Name"
                className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-slate-400 focus:border-slate-400"
                {...register("firstName", { required: true, maxLength: 30 })}
              />

              {errors.lastName && <span>This field is required</span>}
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                placeholder="Last Name"
                className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-slate-400 focus:border-slate-400"
                {...register("lastName", { required: true, maxLength: 30 })}
              />

              {errors.lastName && <span>This field is required</span>}

              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-slate-400 focus:border-slate-400"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && <span>This field is required</span>}

              
              <label htmlFor="phone"></label>
              <Controller {...register("phone", { required: true })}
                name="phone"
                control={control}
                rules={{
                  validate: (value) => isValidPhoneNumber(value)
                }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-slate-400 focus:border-slate-400"
                    placeholder="Phone Number"
                    value={value}
                    onChange={onChange}
                    defaultCountry="CA"
                    id="phone-input"
                  />
                )}
              />
      
        {errors.phone && <span>This field is required</span>}
        
            </div>
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-slate-400 focus:border-slate-400"
              {...register("subject", {
                required: true,
                minLength: 5,
                maxLength: 30,
              })}
            />
            {errors.subject && <span>This field is required</span>}
            <label htmlFor="message" className="sr-only">
              Leave us a message!
            </label>
            <textarea
              rows={5}
              placeholder="Hi, I'd love to get to know more about the gym!"
              className="rounded-md border border-gray-200 px-4 py-2 outline-none hover:border-gray-400 focus:border-gray-400 md:col-span-2"
              {...register("message", {
                required: true,
                minLength: 5,
                maxLength: 500,
              })}
            />
            {errors.message && <span>This field is required</span>}
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={handleClick}
                className="rounded-lg bg-red-700 px-6 py-2 font-bold uppercase text-white hover:bg-red-600"
              >
                Reset
              </button>
              <input
                type="submit"
                className="rounded-lg bg-blue-750 px-6 py-2 font-bold uppercase text-white hover:bg-blue-700"
              />
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
              <p className="mt-10 text-xl text-accent font-bold">SENDING...</p>
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
              <div className="flex flex-col md:flex-row">
               
              </div>

              <p className="mt-10 text-xl text-accent font-bold">
                MESSAGE SENT!
              </p>
              <p className="text-lg my-5">We'll be in touch soon!</p>
              <Link href="/">
                <button className="rounded-lg bg-blue-750 px-6 py-2 font-bold uppercase text-white hover:bg-blue-700">
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
      </div>
    </section>
  );
}



export default ContactForm
