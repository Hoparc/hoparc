import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  callToAction: string | null | undefined;
  url: string | null | undefined;
};

function Hero({ callToAction, url }: HeroProps) {
  return (
    <>
      {/* Hero Img */}

      <div className="max-w-screen-hero m-auto w-full relative h-full">

        <Image
          src="/images/landing/heroGraphic.png"
          alt="Graphic design for hero section"
          height={846}
          width={500}
          quality={100}
          className="absolute bottom-0 left-0 w-0 mobileSm:w-20 mobile:w-24 sm:w-36 md:w-48 lg:w-60 2xl:w-60"
          priority
        />

        <div className="flex justify-center lg:justify-between h-full">
          {/* Hero Text */}
          <div className="flex flex-col py-24 sm:py-40 395Break:m-10 xl:ml-80 lg:mr-12 lg:ml-24 max-w-xl z-10 self-center ">
            <h1 className="font-poppins font-bold text-center text-4xl mobile:text-5xl sm:text-7xl flex flex-col felx-wrap text-blue-350 capitalize drop-shadow-md lg:text-left">
              {/* Hero text */}
              <span>hands on</span>
              <span>physiotherapy</span>
            </h1>
            <h2 className="text-xl 395Break:text-2xl mobile:text-3xl sm:text-4.5xl text-center font-roboto font-bold text-green-350 drop-shadow-sm capitalize py-4 lg:text-left ">
              rehab centre & pelvic health
            </h2>
            <h3 className="font-roboto self-start dark:text-white text-gray-850 text-base px-4 mobileXl:px-2">
              "{callToAction}"
            </h3>
            {/* button */}
            <div className="lg:w-full w-3/4 m-auto">
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

          <div className="hidden lg:block h-850px w-564">
            <Image
              style={{ objectFit: "cover", width: "100%"}}
              src={url ?? ""}
              className="h-full"
              alt="Image for Hands on Physiotherapy and Rehab Centre"
              height={1}
              width={864}
              quality={100}
              priority
            />
          </div>

        </div>

      </div>
    </>

  );
};

export default Hero