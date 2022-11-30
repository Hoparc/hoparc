import Image from "next/image";
import Link from "next/link";

function LetUsHelp() {
  return (
    <div className="w-full flex flex-col gap-y-6 mx-auto my-12 max-w-screen-xl justify-around lg:flex-row items-center">
      <div className="flex flex-col items-center justify-center grow-0">
        <h2 className="font-roboto font-bold text-blue-550 dark:text-blue-350 text-3xl sm:text-5xl text-center w-full">
          Let us Help
        </h2>

        <Image
          src="/images/landing/chevron.png"
          alt=""
          height={50}
          width={50}
        />

        <Link href="/book-appointment">
          <button
            className="bg-blue-550 dark:bg-blue-350 text-base text-white dark:text-blue-850 font-button w-full px-4 py-2 hover:bg-green-350 hover:text-blue-550 rounded-sm"
            type="button"
          >
            Book Appointment
          </button>
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
