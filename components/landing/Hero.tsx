import Image from "next/image";
import ContactDialog from "../contact/ContactDialog"

type HeroProps = {
  callToAction: string | null | undefined;
  url: string | null | undefined;
};

function Hero({ callToAction, url }: HeroProps) {
  return (
    <>
      <div className="max-w-screen-xl m-auto w-11/12 ">
        <div className="grid w-full my-32 mx-auto place-items-center bg-cover bg-center flex bg-base-200">
          <div className="z-0 flex items-center justify-center max-w-7xl gap-6 flex-col lg:flex-row lg:items-start">
            <div className="m-auto shrink-0">
              <Image
                src={url ?? ""}
                className="rounded-lg shadow-2xl"
                alt="Image for Hands on Physiotherapy and Rehab Centre"
                height={0}
                width={445}
              />
            </div>
            <div className="flex flex-col gap-10 self-center ">
              <div className="flex flex-col justify-center">
                <div className="self-center lg:self-start ">
                  <h1 className="font-merriweather font-bold text-center text-4xl mobile:text-5xl sm:text-6xl xl:text-7xl flex flex-col felx-wrap text-blue-350 capitalize lg:text-left ">
                    <span>hands on</span>
                    <span>physiotherapy</span>
                  </h1>
                  <h2 className="font-merriweather uppercase text-xl text-center font-regular flex-1 text-green-350 capitalize py-4 sm:text-3xl lg:text-left ">
                    rehab centre - pelvic health
                  </h2>
                </div>
                <h3 className="self-center text-blue-550 text-base px-2 sm:text-xl xl:text-2xl">"{callToAction}"</h3>
              </div>
              <ContactDialog></ContactDialog>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Hero