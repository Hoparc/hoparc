import Head from "next/head";
import React from "react";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";

type PoliciesProps = {
  title: string;
  children?: React.ReactNode;
};

function Policies({ title, children }: PoliciesProps) {
  return (
    <>
      <h2 className="mt-12 text-xl font-bold sm:text-2xl">{title}</h2>
      <div className="mt-4 text-xl font-light">{children}</div>
    </>
  );
}

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Hands on Physiotherapy and Rehab Centre</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#327CDF" />
        <meta
          name="description"
          content="Privacy Policy at Hands on Physiotherapy and Rehab Centre"
        />
        <meta
          name="keywords"
          content="privacy policy, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Navbar />
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-xl font-light">
          The protection of personal and personal health information is an
          important principle to HOPARC. We are committed to collecting, using,
          and disclosing personal and personal health information responsibly
          and only to the extent necessary for the services we provide.
        </p>

        <Policies title="1. What is personal and personal health information?">
          <p>
            Personal information (PI) includes any identifying information about
            you. HOPARC collects personal information from you such as your
            name, date of birth, address, email and phone contact information
            and when you offer it as a means of payment, your credit card
            information (please note credit card information is not retained
            after a transaction is completed).
          </p>
          <br />
          <p>
            Personal Health Information (PHI) is any identifying information in
            writing or spoken about your physical or mental health; the
            provision of your health care; the eligibility or payment for your
            health care; the identity of the provider of your health care; and
            includes your health card number (a health care provider who does
            not use your health card for an authorized purpose cannot ask for
            the number).
          </p>
          <br />
          <p>
            HOPARC collects and generates personal and personal health
            information in the course of providing you with the services you, or
            someone else requests.
          </p>
        </Policies>

        <Policies title="2. Why does HOPARC need to collect use and disclose your personal or personal health information?">
          <p>
            To provide assessment, treatment or other services related to your
            injury or illness, functional restriction, disability or impairment
            and / or your claim for compensation or benefits. To obtain payment
            for the assessment and/or treatment or other services we provide,
            and determine any entitlement to insurance coverage or other
            benefits. To identify treatment outcomes and / or the extent of
            services provided, and share this information with HOPARC, payers
            (for example your insurance company) and referral sources. HOPARC
            also compiles information for its annonymous database which is used
            to compile statistics for quality improvement initiatives, for
            example improving overall performance in different programs, and
            clinical outcomes research. This information does not use your PI or
            PHI. HOPARC may also collect, use or disclose your personal or
            personal health information if required by law to do so.
          </p>
        </Policies>

        <Policies title="3. Giving your consent">
          <p>
            Your consent must be freely given. You need to understand the
            purposes for which HOPARC will collect, use or disclose your
            personal or personal health information before you give your consent
            and understand that you are able to withhold consent or may withdraw
            your consent, in whole or in part, after it has been given. You also
            need to understand the potential consequences of such refusal or
            withdrawal, which may include the inability of HOPARC to provide you
            with assessment, treatment or other services.
          </p>
          <br />
          <p>
            HOPARC will make all reasonable efforts to ensure that the purposes
            for which the information will be used are identified to you so that
            you can provide knowledgeable consent. In the clinics you will be
            asked to read and sign a consent form. If you are unable to read the
            consent, a verbal explanation will be provided so that you can
            reasonably understand how your personal or personal health
            information will be collected, used or disclosed. In other care
            settings, for example when receiving services in your home, you will
            be given a Privacy Notice to read with your family member or
            substitute decision maker, after an opportunity to ask questions,
            you can provide verbal consent and we will note your consent in your
            chart.
          </p>
        </Policies>

        <Policies title="4. Withdrawing your consent">
          <p>
            You have the right to withdraw your consent to the collection, use
            or disclosure of personal or personal health information in whole or
            in part, at any time upon providing reasonable written notice to the
            manager of the facility you are attending or to the care provider
            who visits you at home. The health care provider is responsible for
            informing you of any potential consequences that may result from the
            withdrawal of your consent, prior to you making such a decision (for
            example it may limit the ability of HOPARC to provide you with
            assessment, treatment or other services).
          </p>
          <br />
          <p>
            If you withdraw your consent it is not retroactive, and does not
            apply to personal or personal health information already collected,
            used or disclosed by HOPARC.
          </p>
        </Policies>

        <Policies title="5. Safety and Accuracy of Personal or Personal Health Information">
          <p>
            We strive to keep your personal or personal health information as
            accurate, complete and up-to-date as is necessary for the purposes
            for which it is to be used. If you return for a further course of
            treatment or service, the personal or personal health information in
            your file will be updated at that time.
          </p>
          <br />
          <p>
            HOPARC has established a variety of safeguards to protect personal
            and personal health information in its care, including
            organizational (for example: training HOPARC personnel about privacy
            obligations and having all personnel annually sign a
            "Confidentiality Obligation Agreement", performing an annual audit
            of privacy practices), physical (for example: locking filing
            cabinets, central filing of active charts, safe storage requirements
            for archived files, security systems) and technological safeguards
            (for example: encryption of mobile data devices, virus protection,
            computer backup, password entry to computer system).
          </p>
          <br />
          <p>
            HOPARC will retain your personal or personal health information for
            the time necessary to fulfill the purposes for which it was
            collected and to comply with its legal obligations and to meet
            regulatory requirements.
          </p>
        </Policies>

        <Policies title="6. Right of Access">
          <p>
            You may request access to your personal or personal health
            information in writing addressed to the manager or supervisor of the
            facility or program you are attending. You may also provide the
            written request to your care provider visiting you at home. If you
            require assistance in preparing the request, HOPARC personnel will
            help you.
          </p>
          <br />
          <p>
            HOPARC will provide a response to your request within 30 days,
            either providing access to the requested information, or providing a
            written notice of why an extension of the time to respond is
            required, or providing you with written reasons why access has been
            denied.
          </p>
          <br />
          <p>
            If your request for access is delayed or denied, you will be
            provided with information about the recourse available through the
            personnel of HOPARC (for contact information see the end of this
            notice).
          </p>
          <br />
          <p>
            There is no charge to look at a copy of your record however it is
            suggested that you do so when your therapist or care provider can be
            present to go over the material with you (and your family if
            required) to explain any medical or technical terms to avoid any
            misunderstanding and misinterpretation.
          </p>
          <br />
          <p>
            If you want to receive a copy of your information held by HOPARC,
            you will be informed of the fees ahead of time. The charge will
            depend on the number of pages you have requested, the location (if
            the record has to be retrieved from a records storage facility), the
            complexity and time it takes to recreate the record from an
            electronic records system etc. All fees associated with a request
            for copies of personal health information are calculated on a
            reasonable cost recovery basis only.
          </p>
        </Policies>

        <Policies title="7. Right to request correction or amendment">
          <p>
            You have the right to request the correction or amendment of any
            personal or personal health information held by HOPARC, if its
            accuracy and completeness is challenged and found to be deficient.
            HOPARC is obliged to correct a record that is not accurate or
            complete, unless current HOPARC personnel did not create the record,
            or the information to be amended consists of a professional opinion
            made in good faith.
          </p>
          <br />
          <p>
            If HOPARC does not agree to your request to correct or amend your
            personal or personal health information, this disagreement will be
            noted in your record, and your written request for the correction or
            amendment as well as the reasons for the refusal to amend will be
            included in your file.
          </p>
          <br />
          <p>
            When your personal or personal health information has been corrected
            or amended, or when a disagreement regarding amendment has occurred,
            all parties that have received the original personal or personal
            health information may be informed of the changes or informed of the
            disagreement if it is relevant to do so, and you instruct HOPARC
            personnel to take that action.
          </p>
        </Policies>

        <Policies title="8. Use of Cookies">
          <p>
            Web cookies are text files containing small amounts of information
            which are downloaded to the user's device when they browse a
            website. Cookies are then sent back to the originating website on
            each subsequent visit. Cookies allow websites to recognize the
            user's device.
          </p>
          <br />
          <p>
            Like many websites, ours uses cookies. Cookies are small text files
            that we put on your computer, that allow us to provide you with a
            better browsing experience. By using this website, you agree to let
            us use cookies. For a more detailed description.
          </p>
        </Policies>

        <Policies title="9. Limiting Collection">
          <p>
            HOPARC will limit the collection of Personal Information to that
            which is necessary for the purposes identified by HOPARC and
            pursuant to this Privacy Policy.
          </p>
        </Policies>

        <Policies title="10. Contact Us">
          <p>
            If you have any comments or questions about our privacy or security
            practices or about your Personal Information in our control,
            including its accuracy or integrity, or if you wish to change your
            preferences as to how we use and disclose your Personal Information:
          </p>
        </Policies>

        <p className="mt-4 text-xl font-light">
          Contact us by
          <span className="block">
            Phone: {""}
            <a
              className="underline hover:text-green-350 hover:no-underline"
              href="tel: +1(289) 554-9090"
            >
              +1 (289) 554-9090
            </a>
          </span>
          <span>
            Email: {""}
            <a
              className="underline hover:text-green-350 hover:no-underline"
              href="mailto:info@hoparc.com?subject=Book%20appointment"
            >
              info@hoparc.com
            </a>
          </span>
        </p>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
