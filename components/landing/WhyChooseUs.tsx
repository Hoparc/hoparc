import Image from "next/image"

function WhyChooseUs() {
  return (
    <div className="w-full bg-blue-550 py-28 ">
      <div className="max-w-screen-2xl m-auto w-11/12">
        <h2 className="capitalize text-white text-3xl sm:text-5xl font-roboto font-light text-center mb-12">
          why choose us?
        </h2>
        <div
          className="flex flex-col gap-6 flex-wrap mx-auto lg:flex-row 
        w-10/12 mobileXl:w-6/12 md:w-4/12 lg:w-4/12 xl:w-full"
        >
          <div className="flex flex-col flex-1 items-center gap-4">
            <Image
              src="/images/landing/customerSatisfactionIcon.png"
              className="max-w-xl"
              alt="Icon for customer satisfaction representing a medal with the number one inside it"
              height={120}
              width={120}
            />
            <h3 className="capitalize text-white font-roboto text-xl sm:text-2xl text-center">
              customer satisfaction
            </h3>
            <p className="text-white text-center font-base font-opensans">
              We provide the quality of the services that will make a positive
              difference in our customers lives.
            </p>
          </div>
          <div className="flex flex-col flex-1 items-center gap-4">
            <Image
              src="/images/landing/workEthicIcon.png"
              className="max-w-xl"
              alt="Icon for strong work ethic representing a series of check boxes"
              height={120}
              width={120}
            />
            <h3 className="capitalize text-white font-roboto text-2xl text-center">
              strong work ethic
            </h3>
            <p className="text-white text-center font-base font-opensans">
              We work together, across boundaries, to meet the needs of our
              customers.
            </p>
          </div>

          <div className="flex flex-col flex-1 items-center gap-4">
            <Image
              src="/images/landing/integrityIcon.png"
              className="max-w-xl"
              alt="Icon for integrity representing two hands shaking"
              height={120}
              width={120}
            />
            <h3 className="capitalize text-white font-roboto text-2xl text-center">
              Integrity
            </h3>
            <p className="text-white text-center font-base font-opensans">
              We uphold the highest standards of integrity in all of our
              actions.
            </p>
          </div>
          <div className="flex flex-col flex-1 items-center gap-4">
            <Image
              src="/images/landing/skillIcon.png"
              className="max-w-xl"
              alt="Icon for skill based training representing a person standing next to a bar chart that shows exponential upwards growth and a gear icon symbolizing the persons skills being worked on"
              height={120}
              width={120}
            />
            <h3 className="capitalize text-white font-roboto text-2xl text-center">
              skill based training
            </h3>
            <p className="text-white text-center font-base font-opensans">
              We are personally accountable for delivering on our commitments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
