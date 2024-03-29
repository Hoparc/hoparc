import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function LetUsHelp() {
  return (
    <div className="w-full flex flex-col gap-y-6 mx-auto my-12 max-w-screen-xl justify-around lg:flex-row items-center">
      <div className="flex flex-col items-center justify-center grow-0">
        <h2 className="font-roboto font-bold text-blue-550 dark:text-white text-3xl sm:text-5xl text-center w-full">
          Let us Help
        </h2>

        <Image
          src="/images/landing/chevron.png"
          alt=""
          height={50}
          width={50}
        />

        <Link href="/book-appointment">
          <motion.button
            className="bg-blue-650 dark:bg-blue-950 text-base text-white font-button w-full px-4 py-2 hover:bg-green-350 hover:text-blue-550 rounded-sm"
            whileHover={{
              boxShadow: "0 4px 4px rgba(30, 109, 235, 0.4)",
              y: -5,
            }}
            whileTap={{
              boxShadow: "0 2px 2px rgba(30, 109, 235, 0.4)",
              y: 0,
            }}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
            type="button"
          >
            Book Appointment
          </motion.button>
        </Link>
      </div>
      <div className=" flex px-3 w-11/12 lg:w-1/2 ">
        <p className="font-roboto text-lg text-gray-850 dark:text-white">
          <span className="flex justify-start text-5xl text-blue-550 dark:text-white font-roboto italic">
            "
          </span>
          <span className="text-2xl sm:text-3xl text-blue-550 dark:text-green-350 font-roboto">
            Our Clinic Believes: "Your care is our goal."{" "}
          </span>
          We offer an optimistic, dynamic, a supervised active approach to
          rehabilitation. The physiotherapists at Hands On Physio use manual
          therapy techniques, Hot stone soft tissue release, Mobilization
          soft-tissue release technique, different modalities, exercise programs
          that include assistive support exercising with supervised ex program
          and personalized home ex program, taping, education, and the latest in
          modern therapy equipment in their approach to treatment.
          <span className="flex justify-end text-5xl text-blue-550 dark:text-white italic font-roboto">
            "
          </span>
        </p>
      </div>
    </div>
  );
}

export default LetUsHelp;
