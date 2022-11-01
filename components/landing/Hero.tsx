import Image from "next/image";

function Hero() {

  return (
    // <div className="max-w-screen-xl m-auto">
    //   <div className="">

    //     <div className="flex flex-col gap-x-8 md:flex-row mx-10">
    //       <div className="object-cover h-33vh relative h-44 md:h-26 w-11/12 md:w-1/2 md:mx-5">
    //         <Image
    //           src="/images/landing/heroImg.webp"
    //           alt="physiotherapist massaging womans neck"
    //          fill

    //         />
    //       </div>
    //       <div className="flex-col gap-y-6 w-full">
    //         <div className="flex">
    //           <h1 className="flex flex-row font-merriweather font-bold text-7xl">Hands On Physiotherapy</h1>
    //         </div>
    //         <div className="flex">
    //           <h2 className="font-merriweather font-regular text-4xl">Rehab Centre & Pelvic Health</h2>
    //         </div>
    //         <div className="flex">
    //           <p>Hands on physio is a multidisciplinary clinic specialized in the assessment, diagnosis and treatment of orthopedic, neurological, musculoskeletal, pelvic health, geriatric, kids/ adults’ sports injuries, Motor Vehicle Injuries, Slip and fall, postural and work-related injuries and your everyday aches and pains.</p>
    //         </div>
    //         <button className="bg-blue-350 text-white w-full px-4 py-2">
    //           Make Appointment
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    <div className="max-w-screen-xl m-auto w-11/12 ">
      <div className="flex flex-col pb-4 lg:-mt-[1rem] lg:col-span-5 items-center lg:items-start animate-fade-in-up overflow-visible">
              <h1 className="font-title text-5xl sm:text-7xl text-white uppercase leading-normal sm:leading-none">
                {"Your"} <strong>care</strong>
              </h1>
              <h2 className="font-title text-4xl sm:text-6xl text-white uppercase py-4 sm:py-8">
                is
              </h2>
              <h1 className="font-title text-4xl sm:text-6xl text-white uppercase py-4 sm:py-8">
                our
              </h1>
              <h1 className="font-title text-5xl sm:text-7xl text-white uppercase">
                <strong>goal</strong>
              </h1>
            </div>
    </div>
  );

};

export default Hero