import Image from "next/image";

function Hero() {

  return (
    <>
      <div className="max-w-screen-xl m-auto w-11/12 ">
        <div className="grid w-full m-auto place-items-center bg-cover bg-center flex min-h-screen bg-base-200">
          <div className="z-0 flex items-center justify-center max-w-7xl gap-6 flex-col-reverse lg:flex-row lg:items-start">

            <div className="flex flex-col gap-11 items-center lg:items-start">

              <h1 className="flex flex-col gap-3 text-5xl text-left font-bold uppercase text-blue-350 text-center lg:text-start ">
                your care
                <span>is</span>
                <span>our</span>
                <span> goal</span>
              </h1>

              <h2 className="font-merriweather font-regular text-4xl capitalize text-green-350 text-center lg:text-left">hands on physiotherapy</h2>

              <button className="bg-blue-350 text-base text-white font-button w-full px-4 py-2">
                Make Appointment
              </button>

            </div>
            <div className="m-auto">
              <Image
                src="/images/landing/heroImg.webp" className="max-w-xl rounded-lg shadow-2xl" alt="image"
                height={100}
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-550 flex px-28 py-40">
        <div className="max-w-screen-xl m-auto w-11/12 flex flex-col items-center gap-11">
          <h2 className="capitalize text-white text-5xl font-roboto font-light text-center">why choose us?</h2>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/images/landing/customerSatisfactionIcon.png" className="max-w-xl" 
                alt="Icon for customer satisfaction representing a medal with the number one inside it"
                height={120}
                width={120}
              />
              <h3 className="capitalize text-white font-roboto text-2xl text-center">customer satisfaction</h3>
              <p className="text-white text-center font-base font-opensans">We provide the quality of the services that will make a positive difference in our customers lives.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/images/landing/workEthicIcon.png" className="max-w-xl" alt="Icon for strong work ethic representing a series of check boxes"
                height={120}
                width={120}
              />
              <h3 className="capitalize text-white font-roboto text-2xl text-center">strong work ethic</h3>
              <p className="text-white text-center font-base font-opensans">We work together, across boundaries, to meet the needs of our customers.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/images/landing/integrityIcon.png" className="max-w-xl" alt="Icon for integrity representing two hands shaking"
                height={120}
                width={120}
              />
              <h3 className="capitalize text-white font-roboto text-2xl text-center">Integrity</h3>
              <p className="text-white text-center font-base font-opensans">We uphold the highest standards of integrity in all of our actions.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/images/landing/skillIcon.png" className="max-w-xl" 
                alt="Icon for skill based training representing a person standing next to a bar chart that shows exponential upwards growth and a gear icon symbolizing the persons skills being worked on"
                height={120}
                width={120}
              />
              <h3 className="capitalize text-white font-roboto text-2xl text-center">skill based training</h3>
              <p className="text-white text-center font-base font-opensans">We are personally accountable for delivering on our commitments.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default Hero