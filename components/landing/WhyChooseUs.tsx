import Image from "next/image"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function WhyChooseUs() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div ref={ref}>
      <div className="w-full bg-blue-550 py-28">
        <motion.div
          className="max-w-screen-mobileSm m-auto w-3/4 md:w-95% md:max-w-screen-xl"
          variants={containerVariants}
          initial={inView ? "visible" : "hidden"}
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="capitalize text-white text-3xl sm:text-5xl font-roboto font-bold text-center mb-12">
            why choose us?
          </h2>
          <div className="flex flex-col gap-4 mx-auto lg:flex-row">
            <motion.div
              className="flex flex-col md:flex-row flex-1 gap-4"
              variants={childVariants}
            >
              <motion.div
                className="flex flex-col flex-1 items-center gap-4"
                variants={childVariants}
              >
                <Image
                  src="/images/landing/customerSatisfactionIcon.png"
                  className="max-w-xl"
                  alt="Icon for customer satisfaction representing a medal with the number one inside it"
                  height={120}
                  width={120}
                />
                <motion.h3
                  className="capitalize text-white font-roboto font-bold text-xl sm:text-2xl text-center"
                  variants={childVariants}
                >
                  customer satisfaction
                </motion.h3>
                <motion.p
                  className="text-white text-center font-base font-roboto"
                  variants={childVariants}
                >
                  We provide the quality of the services that will make a
                  positive difference in our customers lives.
                </motion.p>
              </motion.div>
              <motion.div
                className="flex flex-col flex-1 items-center gap-4"
                variants={childVariants}
              >
                <Image
                  src="/images/landing/workEthicIcon.png"
                  className="max-w-xl"
                  alt="Icon for strong work ethic representing a series of check boxes"
                  height={120}
                  width={120}
                />
                <motion.h3
                  className="capitalize text-white font-roboto font-bold  text-2xl text-center"
                  variants={childVariants}
                >
                  strong work ethic
                </motion.h3>
                <motion.p
                  className="text-white text-center font-base font-roboto"
                  variants={childVariants}
                >
                  We work together, across boundaries, to meet the needs of our
                  customers.
                </motion.p>
              </motion.div>
            </motion.div>

            <div className="flex flex-col md:flex-row flex-1 gap-4">
              <motion.div
                className="flex flex-col flex-1 items-center gap-4"
                variants={childVariants}
              >
                <Image
                  src="/images/landing/integrityIcon.png"
                  className="max-w-xl"
                  alt="Icon for integrity representing two hands shaking"
                  height={120}
                  width={120}
                />
                <motion.h3
                  className="capitalize text-white font-roboto font-bold text-xl sm:text-2xl text-center"
                  variants={childVariants}
                >
                  Integrity
                </motion.h3>
                <motion.p
                  className="text-white text-center font-base font-roboto"
                  variants={childVariants}
                >
                  We uphold the highest standards of integrity in all of our
                  actions.
                </motion.p>
              </motion.div>
              <motion.div
                className="flex flex-col flex-1 items-center gap-4"
                variants={childVariants}
              >
                <Image
                  src="/images/landing/skillIcon.png"
                  className="max-w-xl"
                  alt="Icon for skill based training representing a person standing next to a bar chart that shows exponential upwards growth and a gear icon symbolizing the persons skills being worked on"
                  height={120}
                  width={120}
                />
                <motion.h3
                  className="capitalize text-white font-roboto font-bold  text-2xl text-center"
                  variants={childVariants}
                >
                  skill based training
                </motion.h3>
                <motion.p
                  className="text-white text-center font-base font-roboto"
                  variants={childVariants}
                >
                  We are personally accountable for delivering on our
                  commitments.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
