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
          <div className="flex inset-0 overflow-y-auto">
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
                <Dialog.Panel className="h-min m-auto w-11/12 transform rounded-2xl transition-all fixed inset-0 overflow-auto" >
                  <button
                    aria-hidden="true"
                    aria-label="Close"
                    type="button"
                    className="flex justify-end w-full py-2 pr-10 bg-blue-550 font-roboto text-2xl uppercase text-white text-right hover:bg-green-350 hover:text-green-350"
                    onClick={closeDialog}
                  >
                    <div className="flex justify-center w-8 bg-blue-350 rounded-2xl hover:bg-blue-550">X</div>
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="bg-white pt-2 px-5 text-md font-medium leading-6 text-blue-550"
                  >
                    Please leave your information and we will contact you as soon as possible!
                  </Dialog.Title>
                  <ContactForm />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}


