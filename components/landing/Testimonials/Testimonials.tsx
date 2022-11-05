import React from "react";
import { useState } from "react";
import Image from "next/image";
import cn from "clsx";

interface TestimonialCardProps {
  name: string;
  review: string;
}

function TestimonialCard({ name, review }: TestimonialCardProps) {
  return (
    <>
      <figure className="group inline-flex p-6 mb-4 w-full relative flex-col-reverse bg-white highlight-white/5 rounded-lg">
        <figcaption className="flex items-center space-x-4">
          <div className="flex-auto">
            <div className="text-base text-black font-semibold">{name}</div>
            <div className="mt-0.5 text-black text-xs">{review}</div>
          </div>
        </figcaption>
      </figure>
    </>
  );
}

interface TestimonialsProps {
  hasShowMore?: boolean;
}

function Testimonials({ hasShowMore = false }: TestimonialsProps) {
  const [showMore, setShowMore] = useState(!hasShowMore);
  return (
    <div className="relative max-w-5xl mx-auto mt-10">
      <div className="flex pb-12 flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl text-center text-blue-550 font-title">
          People love us on <strong>Google!</strong>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl font-light sm:mt-4 text-center">
          Check out what they have to say!
        </p>
      </div>
      <div
        className={cn({
          ["max-h-[26.5rem]"]: !showMore,
          ["overflow-hidden"]: !showMore,
        })}
      >
        <div className="columns-1 md:columns-2 lg:colums-3">
          <TestimonialCard
            name="Monica"
            review="Mamta is an amazing physiotherapist. Just as others have mentioned, she is very knowledgeable and skillful. She is one of very few who does ultrasound therapy for clogged milk ducts and after one session my pain subsided greatly. Despite having to go topless for the treatment, she ensures that it doesn't get awkward by engaging in interesting conversations. I will definitely go to her for my other postpartum issues."
          />
          <TestimonialCard
            name="Janice Rego"
            review="About 2 years ago,I was proactively looking out for a knowledgeable and reliable physiotherapist..to my good luck, I found Hands on Pysiotherapy. Mamta and her husband Gungan were warm and welcoming.My first words to Mamta,at my first session was, Wow, I have never ever had any physiotherapist actually work hands on ...really true to their name. She is very knowledgeable, patient,flexible and passionate about her job.Her staff,too are very  caring and competent. I will never have to look for another physiotherapist...I am with the best."
          />
          <TestimonialCard
            name="Bushra Khan"
            review="Mamta is one of the best physiotherapists I have ever had. She has been very accommodating of schedules, and I have found permanent relief by doing the exercises she has recommended. I always feel well taken care of whenever I am there. I have always felt that I lived a life full of Chronic Pain, but she helped me realize with proper guidance and treatment, I was able to heal and recover. I would 100% recommend her services, as I believe the best way of finding out if the service here is the real deal, is by coming yourself :)"
          />
          <TestimonialCard
            name="Deborah Hope"
            review="What an amazing Physiotherapist.
            My first thought was, WOW! She actually works with her hands. She's knowledgeable, patient and very passionate about her job. The staff is friendly and caring and the clinic is always clean and I look forward to my physio appointments."
          />
          <TestimonialCard
            name="Kalim Luhar"
            review="By far the best physiotherapist. Mamta is very knowledgeable and experienced always taking care of my concerns personally. She is the healer. Front desk and massage therapist are also amazing. Always clean and welcoming environment. Thanks a lot guys for being so helpful."
          />
          <TestimonialCard
            name="M P"
            review="I had shoulder Tear and it was very painful. As per the doctor I have two choices either to take some injection in my shoulder or to go for physio. One of my friend recommended me this clinic. Though, I am here in Toronto I decided to give a try.  During my treatment I found Mamta is an expert physiotherapist. She, first examine my shoulder movements and and provide me treatment. She also told me to do some exercises at home and it really works. Completely satisfied by treatment. Thanks a lot."
          />
          <TestimonialCard
            name="Amanda Krishnakumar"
            review="Mamta is a great physiotherapist! She's thorough and explains everything, so that I can understand what exactly is the root of the problem. She's used different methods to help with the pain, and once resolved, she uses methods to help strengthen those muscles to help prevent future occurrences. The Thai masseuse, Rashida, is also amazing!"
          />
          <TestimonialCard
            name="Matt"
            review="Mamta is a knowledgeable and experienced physiotherapist I have seen so far. Provide satisfactory service and exercises which help me relieve and eliminate my shoulder problem. Physiotherapist put all her expertise to solve my problem and it works when I followed exercises she told me to do at home. Thanks a lot Hands On Physiotherapy team. Highly recommend to anyone."
          />
          <TestimonialCard
            name="Verni Niran"
            review="Mamta such a lovely person know her since this clinic was opened . she and  her massage therapist. Are all very knowledgeable , experienced Friendly and Kind people . clean and welcoming environment. Alway we get the best treatment. I wish them all good luck 👍🏽"
          />
          <TestimonialCard
            name="Dr. Pat"
            review="I rarely write reviews however I had a great experience and I feel much better after a long time. I had some back pain as I am aging everything just hurts as we can all agree upon. Great service and therapists. Nishana was such a wonderful young lady who helped the therapist with most of the therapies and is very lovely to talk to, calm and Sweet. My Physio therapist mata was great as well, excercise and ultrasound helped was a bit busy with patients sometimes. Check them out!"
          />
          <TestimonialCard
            name="Kim Silva"
            review="Great physiotherapist and wonderful experience so far. Very knowledgeable and passionate about her craft and has helped me tremendously already, I actually look forward to my physio appointment and will reccomend others to this practice."
          />
          <TestimonialCard
            name="Amit Murumkar"
            review="Wonderful experience. Extremely meticulous and thoroughly professional  physio and massage therapy service in the area. Got my painful bunion on the foot treated only with physio and without any surgery. Pain completely gone in only few visits. I strongly recommend this clinic to all."
          />
          <TestimonialCard
            name="Mayur Brahmbhatt"
            review="Mamtaben is a knowledgeable and result oriented physiotherapist. I have been to several physiotherapists for neck pain in last 6 years but  in vain. Mamtaben gave me relief from my neck pain in few sittings. "
          />
          <TestimonialCard
            name="Khyati Gupta"
            review="Incredibly friendly and informative about our concerns. Front desk and paramedical service provider are both very knowledgeable and welcome any questions. They listen to our concerns well and make sure were able to achieve a wellness goal."
          />
          <TestimonialCard
            name="Ashik Valookaran"
            review="It is a nice place for Physio. They helped me find out that I have a flat-foot which I need to be aware of from now on. They also gave me several techniques and work outs that will help me recover from my strength."
          />
          <TestimonialCard
            name="Hitesh Patel"
            review="She is so knowledgeable and honest practitioner... very well satisfied with her kindness and professionalism.....Really result oriented service."
          />
          <TestimonialCard
            name="Simrat Dhillon"
            review="Great experience. Very friendly and caring. Great ❤️❤️❤️"
          />
          <TestimonialCard
            name="kevalanandji Maharaj Khandvevale Baba"
            review="Result oriented,  quick & holistic care. Thanks"
          />
        </div>
        {hasShowMore && (
          <div
            className={cn("inset-x-0 flex justify-center absolute", {
              ["bg-gradient-to-t bottom-0 pb-0 pointer-events-none from-slate-150"]:
                !showMore,
            })}
          >
            {!showMore && (
              <button
                type="button"
                onClick={() => {
                  setShowMore(!showMore);
                }}
                className="relative focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center bg-blue-350 hover:bg-green-350 pointer-events-auto w-1/2 justify-center justify-between"
              >
                More Reviews
                <span> + </span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
