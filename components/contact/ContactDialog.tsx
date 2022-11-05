import { Fragment, useState } from "react";

import ContactForm from "./ContactForm";

import { Dialog, Transition } from "@headlessui/react";

export default function ContactDialog() {
  const [open, setOpen] = useState<boolean>(false);

  const openDialog = () => {
    setOpen(true);
  }

  const closeDialog = () => {
    setOpen(false);
  }


  return (
    <>
      <div className="flex justify-center">
        <button
          className="bg-blue-350 text-base text-white font-button w-full px-4 py-2 hover:bg-green-350 hover:text-blue-550 rounded-md"
          type="button"
          onClick={openDialog}
        >
          Make Appointment
        </button>
      </div>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDialog}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="m-auto w-11/12 transform rounded-2xl transition-all fixed top-2/4 left-2/4 translate-y-minus50 translate-x-minus50 overflow-y-scroll sm:w-10/12 xl:w-6/12">
                <div className="flex justify-end py-3 pr-10 bg-blue-550">
                  <button
                    aria-hidden="true"
                    aria-label="Close"
                    type="button"
                    className="font-roboto text-3xl uppercase text-white"
                    onClick={closeDialog}
                  >
                    <div className="bg-blue-350 rounded-3xl w-10 hover:text-blue-550 hover:bg-green-350 uppercase">x</div>
                  </button>
                </div>
                <Dialog.Title
                  as="h3"
                  className="bg-white pt-2 px-2 text-md font-medium leading-6 text-blue-550 break-words"
                >
                  Please leave your information and we will contact you as soon as possible!
                </Dialog.Title>
                <ContactForm />
              </Dialog.Panel>
            </Transition.Child>
          </div>

        </Dialog>
      </Transition>
    </>
  );
}



