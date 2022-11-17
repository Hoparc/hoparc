import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  callToAction: string | null | undefined;
  url: string | null | undefined;
};

function Hero({ callToAction, url }: HeroProps) {
  return (
    <>
      <div className="relative">
        <Image
          src="/images/landing/heroGraphic.png"
          alt="Image for Hands on Physiotherapy and Rehab Centre"
          height={846}
          width={500}
          quality={100}
          className="absolute bottom-0 left-0 w-28 mobileSm:w-36 md:w-52 lg:w-60 2xl:w-72"
          priority
        />

        {/* Hero Image container */}
        <div className="">
          <Image
            className=" bg-cover w-96 h-full right-0 absolute hidden lg:block m-auto"
            src={url ?? ""}
            alt="Image for Hands on Physiotherapy and Rehab Centre"
            height={846}
            width={564}
            quality={100}
            priority
          />
        </div>

        {/* Wrapper container */}
        <div className="max-w-screen-hero m-auto w-11/12 relative py-40">

          {/* Hero text and button outer container  */}
          <div className="flex justify-center ">

            {/* Hero text and button inner container  */}
            <div className="flex flex-col p-2 max-w-min hero:w-5/12 hero:max-w-fit z-10 bg-transparent sm:bg-blue-150 rounded-md">
              <h1 className="font-poppins font-bold text-center text-4xl mobile:text-5xl sm:text-7xl flex flex-col felx-wrap text-blue-350 capitalize drop-shadow-md lg:text-left">
                {/* Hero text */}
                <span>hands on</span>
                <span>physiotherapy</span>
              </h1>
              <h2 className="text-xl mobile:text-2xl sm:text-3xl lg:text-4.5xl text-center font-roboto font-bold text-green-350 drop-shadow-sm capitalize py-4 lg:text-left ">
                rehab centre & pelvic health
              </h2>
              <h3 className="font-roboto self-start dark:text-blue-350 text-gray-850 text-base px-2">
                "{callToAction}"
              </h3>
              {/* button */}
              <Link href="/request-appointment">
                <button
                  className="bg-blue-550 text-base w-full text-white font-button mt-6 px-4 py-2 hover:bg-green-350 hover:text-blue-550 rounded-sm"
                  type="button"
                >
                  Request Appointment
                </button>
              </Link>
            </div>
          </div>
          {/* End of wrapper container */}
        </div >
      </div>
    </>
  );
};

export default Hero