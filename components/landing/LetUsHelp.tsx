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

        <Link href="/request-appointment">
          <button
            className="bg-blue-550 dark:bg-blue-350 text-base text-white font-button w-full px-4 py-2 hover:bg-green-350 hover:text-blue-550 rounded-md"
            type="button"
          >
            Request Appointment
          </button>
        </Link>
      </div>
      <div className=" flex px-3 w-full lg:w-1/2 ">
        <p className="font-roboto text-lg text-gray-850 dark:text-white">
          <span className="flex justify-start text-5xl text-blue-350 font-roboto italic">
            "
          </span>
          <span className="text-4xl italic text-blue-350 font-roboto">O</span> ur Clinic
          believe in "your care is our goal" and we have an optimistic, dynamic,
          supervised active approach to rehabilitation. The physiotherapists at
          Hands on Physio use manual therapy techniques, Hot stone soft tissue
          release, Mobilization soft tissue release technique, different
          modalities, exercise programs which include assistive support
          exercising with supervised ex program and personalized home ex
          program, taping, education and the latest in modern therapy equipment
          in their approach to treatment.
          <span className="flex justify-end text-5xl text-blue-350 italic font-roboto">
            "
          </span>
        </p>
      </div>
    </div>

  );
}

export default LetUsHelp;
