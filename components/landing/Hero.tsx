import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  callToAction: string | null | undefined;
  url: string | null | undefined;
};

function Hero({ callToAction, url }: HeroProps) {
  return (
    <div className="max-w-screen-xl m-auto w-11/12">
      <div className="grid w-full my-32 mx-auto place-items-center bg-cover bg-center bg-base-200">
        <div className="z-0 flex items-center justify-center max-w-7xl gap-6 flex-col lg:flex-row lg:items-start">
          <div className="m-auto shrink-0">
            <Image
              src={url ?? ""}
              className="rounded-lg shadow-2xl w-10/12 m-auto bg-cover"
              alt="Image for Hands on Physiotherapy and Rehab Centre"
              height={500}
              width={350}
              priority
            />
          </div>
          <div className="flex flex-col gap-10 self-center ">
            <div className="flex flex-col justify-center">
              <div className="self-center lg:self-start ">
                <h1 className="font-poppins font-bold text-center text-4xl mobile:text-5xl sm:text-6xl xl:text-7xl flex flex-col felx-wrap text-blue-350 capitalize drop-shadow-md lg:text-left">
                  <span>hands on</span>
                  <span>physiotherapy</span>
                </h1>
                <h2 className=" text-xl text-center font-roboto font-bold flex-1 text-green-350 drop-shadow-md capitalize py-4 sm:text-3xl lg:text-left ">
                  rehab centre - pelvic health
                </h2>
              </div>
              <h3 className="font-roboto font-bold self-center dark:text-blue-350 text-blue-550 text-base px-2 sm:text-xl xl:text-2xl">
                "{callToAction}"
              </h3>
            </div>
            <Link href="/request-appointment">
              <button
                className="bg-blue-550 text-base text-white font-button w-full px-4 py-2 hover:bg-green-350 hover:text-blue-550 rounded-md outline outline-1 outline-blue-350 "
                type="button"
              >
                Request Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero