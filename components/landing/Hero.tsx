import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  callToAction: string | null | undefined;
  url: string | null | undefined;
};

function Hero({ callToAction, url }: HeroProps) {
  return (
    <>
      <div className="relative py-24 sm:py-40">
        {/* Hero Img */}
        <Image
          src="/images/landing/heroGraphic.png"
          alt="Graphic design for hero section"
          height={846}
          width={1000}
          quality={100}
          className="absolute bottom-0 left-0 w-0 mobileSm:w-20 mobile:w-24 sm:w-36 md:w-48 lg:w-60 xl:w-60 2xl:w-0"
          priority={true}
        />

        <Image
          src="/images/landing/heroGraphicXl.png"
          alt="Graphic design for hero section"
          height={846}
          width={1000}
          quality={100}
          className="absolute bottom-0 left-0 h-full w-0 xl:w-3/12 2xl:w-4/12 "
          priority={true}
        />

        <div className="hidden lg:block lg:max-w-xxs xl:max-w-xs 2xl:max-w-sm 3xl:max-w-2.5xl w-full h-full absolute right-0 bottom-0">
          <Image
            style={{ objectFit: "cover", width: "100%" }}
            src={url ?? ""}
            className="h-full"
            alt="Image for Hands on Physiotherapy and Rehab Centre"
            height={1}
            width={864}
            quality={100}
            priority={true}
          />
        </div>

        <div className="max-w-screen-hero m-auto w-full h-full">
          <div className="flex justify-center h-full">
            {/* Hero Text */}
            <div className="flex flex-col 395Break:m-0 xl:ml-0 lg:mr-0 lg:ml-0 max-w-xl z-10 self-center">
              <h1 className="font-poppins font-bold text-center text-4xl mobile:text-5xl sm:text-7xl flex flex-col felx-wrap text-blue-350 capitalize drop-shadow-md lg:text-left">
                {/* Hero text */}
                <span>hands on</span>
                <span>physiotherapy</span>
              </h1>
              <h2 className="text-xl 395Break:text-2xl mobile:text-3xl sm:text-4.5xl text-center font-roboto font-bold text-green-350 drop-shadow-sm capitalize py-4 lg:text-left ">
                rehab centre & pelvic health
              </h2>
              <p className="font-roboto self-start text-center lg:text-left dark:text-white text-gray-850 text-base px-4 mobileXl:px-2">
                "{callToAction}"
              </p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero