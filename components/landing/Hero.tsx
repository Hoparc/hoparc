import Image from "next/image";

function Hero() {

  return (
    <div className="max-w-screen-xl m-auto w-11/12 ">
      <div className="grid w-full place-items-center py-24 bg-cover bg-center flex min-h-screen bg-base-200">
        <div className="z-0 flex items-center justify-center max-w-7xl gap-6 p-4 flex-col-reverse lg:flex-row lg:items-start">

          <div className="flex flex-col gap-11 items-center lg:items-start">

            <h1 className="flex flex-col gap-3 text-5xl text-left font-bold uppercase text-blue-350 text-center lg:text-start ">
              your care
              <span>is</span>
              <span>our</span>
              <span> goal</span>
            </h1>

            <h2 className="font-merriweather font-regular text-4xl capitalize text-green-350 text-center">hands on physiotherapy</h2>

            <button className="bg-blue-350 text-base text-white font-button w-full px-4 py-2">
              Make Appointment
            </button>

          </div>
          <Image
            src="/images/landing/heroImg.webp" className="max-w-xl rounded-lg shadow-2xl" alt="image"
            height={100}
            width={400}
          />
        </div>
      </div>
    </div>
  );

};

export default Hero