import React from "react";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";

type TermsProps = {
  title: string;
  children?: React.ReactNode;
};

function Terms({ title, children }: TermsProps) {
  return (
    <>
      <h2 className="mt-12 text-xl font-bold sm:text-2xl">{title}</h2>
      <div className="mt-4 text-xl font-light">{children}</div>
    </>
  );
}

const TermsOfUse = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-4 text-xl font-light">
          Welcome to the Hands On Physiotherapy and Rehab Centre website (the
          “Site”). By accessing, browsing or using this Site, you acknowledge
          that you have read, understood and agreed to be bound by these Terms
          of Use (these “Terms”). If you do not agree to these Terms, you should
          not use or access this Site.
        </p>
        <p className="mt-4 text-xl font-light">
          Hands On Physiotherapy and Rehab Centre reserves the right to revise
          these Terms at any time by updating this posting. You are encouraged
          to review these Terms each time you use the Site because your use of
          the Site after the posting of changes will constitute your acceptance
          of the changes. We grant you a personal, limited, non-transferable
          non-exclusive, license to access and use the Site. We reserve the
          right, in our sole discretion and without notice to you, to revise the
          products and services available on the Site and to change, suspend or
          discontinue any aspect of the Site and we will not be liable to you or
          to any third party for doing so. We may also impose rules for and
          limits on use of the Site or restrict your access to part, or all, of
          the Site without notice or penalty. Your continued use of the Site
          will constitute your acceptance of any such changes.
        </p>
        <Terms title="1. Use of the Site">
          <p>
            You may use the Site only for your own non-commercial personal use
            and in compliance with these Terms. You are responsible for your own
            communications, including the transmission, uploading or posting of
            information and are responsible for the consequences of such
            communications to the Site. We require all Members to agree not to
            use the Site, and specifically prohibit any use of the Site, for any
            of the following purposes:
          </p>
          <br />
          <p>
            Posting, communicating or transmitting any material that infringes
            on any intellectual property, publicity or privacy right of another
            person or entity Posting any information which is untrue, inaccurate
            or not your own. Engaging in conduct that would constitute a
            criminal offense or give rise to civil liability or otherwise
            violate any law or regulation.
          </p>
          <br />
          <p>
            Attempting to interfere in any way with the Site's or Hands On
            Physiotherapy and Rehab Centre' network security, or attempting to
            use the Site's service to gain unauthorized access to any other
            computer system. You are responsible for maintaining the
            confidentiality of your account and password. You agree to accept
            responsibility for all activities that occur under your account or
            password. You agree to immediately notify us in the event of any
            unauthorized use of your account or other breach of security.
          </p>
        </Terms>

        <Terms title="2. Additional Terms and Conditions">
          <p>
            You agree that additional terms and conditions may apply to specific
            products, orders or your use of certain portions of the Site,
            including with respect to ordering, shipping and return policies and
            membership reward programs (“Additional Terms”), which Additional
            Terms are made part of these Terms by reference. If there is a
            conflict between these Terms and the Additional Terms, the
            Additional Terms shall control.
          </p>
        </Terms>

        <Terms title="3. Membership">
          <p>
            The Site is available to registered users who are 18 years and older
            and who have not been suspended or removed by Hands On Physiotherapy
            and Rehab Centre for any reason (a “Member”). We reserve the right
            to revoke your membership for any reason at any time including as a
            result of a violation of these Terms of the Privacy Policy, without
            notice. Membership is void where prohibited by law. In order to
            redeem earnings from activities on the Site, you must A) have
            confirmed your email address by responding to any email sent to you
            from Klapta Research Services, AND B) completed a minimum of five
            (5) surveys that have all been validated by the client.
          </p>
          <br />
          <p>
            A completed survey is defined as a survey that has been legitimately
            started by the Site, taken by you as a Member, all questions are
            successfully answered, and you have been returned to the Site upon
            successful completion of the survey. Members who have not completed
            both A) and B) will be denied redemption of earned points until both
            requirements have been fulfilled.
          </p>
        </Terms>

        <Terms title="4. Product Information; Limitation on Quantities">
          <p>
            Excluding any content which may be submitted by Members from time to
            time, we strive to ensure that the information on the Site is
            complete and reliable. Certain information may contain pricing
            errors, typographical errors and other errors or inaccuracies which
            we may correct without liability. We also reserve the right to limit
            quantities purchased by Members and to revise, suspend, or terminate
            an event or promotion at any time without notice (including after an
            order has been submitted and/or acknowledged). We do not guarantee
            that all products described on our Site will be available.
          </p>
        </Terms>

        <Terms title="5. Propietary Rights">
          <p>
            You acknowledge and agree that the content (other than content that
            may be submitted by Members), materials, text, images, videos,
            graphics, trademarks, logos, button icons, music, software and other
            elements available on the Site are the property of Hands On
            Physiotherapy and Rehab Centre or our licensors and are protected by
            copyright, trademark and/or other proprietary rights and laws. You
            agree not to sell, license, rent, distribute, copy, reproduce,
            transmit, publicly display, publicly perform, publish, adapt, edit,
            modify or create derivative works from any content or materials on
            the Site. Hands On Physiotherapy and Rehab Centre and the Hands On
            Physiotherapy and Rehab Centre logo are registered trademarks of
            Hands On Physiotherapy and Rehab Centre All other trademarks are the
            property of their respective owners.
          </p>
        </Terms>

        <Terms title="6. Submitted Content">
          <p>
            Hands On Physiotherapy and Rehab Centre does not claim ownership of
            any materials you make available through the Site. With respect to
            any materials you submit or make available for inclusion on the
            Site, you grant Hands On Physiotherapy and Rehab Centre a perpetual,
            irrevocable, non-terminable, worldwide, royalty-free and
            non-exclusive license to use, copy, distribute, publicly display,
            modify, create derivative works, and sublicense such materials or
            any part of such materials. You hereby represent, warrant and
            covenant that any materials you provide do not include
            anything(including, but not limited to, text, images, music or
            video) to which you do not have the full right to grant Hands On
            Physiotherapy and Rehab Centre the license specified above. You
            further represent, warrant and covenant that any materials you
            provide will not contain libelous or otherwise unlawful, abusive or
            obscene material. Hands On Physiotherapy and Rehab Centre will be
            entitled to use any content submitted by you without incurring
            obligations of confidentiality, attribution or compensation to you.
          </p>
        </Terms>

        <Terms title="7. Disclaimers">
          <p>
            You assume all responsibility and risk with respect to your use of
            the Site. THE SITE, AND ALL CONTENT, MERCHANDISE, AND OTHER
            INFORMATION ON OR ACCESSIBLE FROM OR THROUGH THIS SITE OR A “LINKED”
            SITE ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT
            WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT
            LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, NONINFRINGEMENT, SECURITY OR ACCURACY.
            SPECIFICALLY, BUT WITHOUT LIMITATION, Hands On Physiotherapy and
            Rehab Centre DOES NOT WARRANT THAT: (1) THE INFORMATION ON THIS SITE
            IS CORRECT, ACCURATE OR RELIABLE; (2) THE FUNCTIONS CONTAINED ON
            THIS SITE WILL BE UNINTERRUPTED OR ERROR-FREE; OR (3) DEFECTS WILL
            BE CORRECTED, OR THAT THIS SITE OR THE SERVER THAT MAKES IT
            AVAILABLE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
          <br />
          <p>
            Hands On Physiotherapy and Rehab Centre makes no warranties of any
            kind regarding any non-Hands On Physiotherapy and Rehab Centre sites
            to which you may be directed or hyperlinked from this Site.
            Hyperlinks are included solely for your convenience, and Hands On
            Physiotherapy and Rehab Centre makes no representations or
            warranties with regard to the accuracy, availability, suitability or
            safety of information provided in such non-Hands On Physiotherapy
            and Rehab Centre sites. Hands On Physiotherapy and Rehab Centre does
            not endorse, warrant or guarantee any products or services offered
            or provided by or on behalf of third parties on the Site.
          </p>
        </Terms>

        <Terms title="8. Indemnification">
          <p>
            You agree to indemnify, hold harmless, and defend Hands On
            Physiotherapy and Rehab Centre, its parent, subsidiaries, divisions,
            and affiliates, and their respective officers, directors, employees,
            agents and affiliates from any and all claims, liabilities, damages,
            costs and expenses of defence, including attorneys’ fees, in any way
            arising from or related to your use of the Site, your violation of
            these Terms or the Privacy Policy, content posted to the Site by
            you, or your violation of any law or the rights of a third party.
          </p>
        </Terms>

        <Terms title="9. Limitation of Liability">
          <p>
            IN NO EVENT SHALL EPITOME RESEARCH SERVICES LLP , ITS AFFLIATES OR
            ANY OF THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
            SUCCESSORS, SUBSIDIARIES, SUPPLIERS, AFFILIATES, OR THIRD PARTIES
            PROVIDING INFORMATION ON THIS SITE BE LIABLE TO ANY USER OF THE SITE
            OR ANY OTHER PERSON OR ENTITY FOR ANY DIRECT, INDIRECT, SPECIAL,
            INCIDENTAL, PUNITIVE, CONSEQUENTIAL OREXEMPLARY DAMAGES (INCLUDING,
            BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, OR
            LOSS OF USE) ARISING OUT OF THE USE OR INABILITY TO USE THE SITE,
            WHETHER BASED UPON WARRANTY, CONTRACT, TORT, OR OTHERWISE, EVEN IF
            EPITOME RESEARCH SERVICES LLP HAS BEEN ADVISED OF OR SHOULD HAVE
            KNOWN OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES. IN NO EVENT
            SHALL THE TOTAL LIABILITY OF EPITOME RESEARCH SERVICES LLP , ITS
            AFFILIATES OR ANY OF THEIR RESPECTIVE OFFICERS, DIRECTORS,
            EMPLOYEES, AGENTS, SUCCESSORS, SUBSIDIARIES, SUPPLIERS, AFFILIATES
            OR THIRD PARTIES PROVIDING INFORMATION ON THIS SITE TO YOU FOR ALL
            DAMAGES, LOSSES, AND CAUSES OF ACTION RESULTING FROM YOUR USE OF
            THIS SITE, WHETHER IN CONTRACT, TORT (INCLUDING, BUT NOT LIMITED TO,
            NEGLIGENCE) OR OTHERWISE, EXCEED THE AMOUNT YOU PAID TO EPITOME
            RESEARCH SERVICES LLP IN CONNECTION WITH THE EVENT GIVING RISE TO
            SUCH LIABILITY.
          </p>
          <br />
          <p>
            You hereby acknowledge that the preceding paragraph shall apply to
            all content, merchandise and services available through the Site.
            Because some states do not allow limitations on implied warranties
            or the exclusion or limitation of certain damages, all of the above
            disclaimers or exclusions may not apply to all users.
          </p>
        </Terms>

        <Terms title="10. International Use">
          <p>
            We control and operate the Site from the India. We make no
            representation that materials on the Site are appropriate or
            available for use outside the India. If you choose to access this
            Site from outside the India, you do so at your own initiative and
            are responsible for compliance with local laws, if and to the extent
            local laws are applicable.
          </p>
        </Terms>

        <Terms title="11. Risk of Loss">
          <p>
            Any merchandise purchased from our Site will be shipped by a
            third-party carrier. As a result, title and risk of loss for such
            merchandise will pass to you upon our delivery to the carrier.
          </p>
        </Terms>

        <Terms title="12. Copyright Infringement; Notice and Take Down Procedures">
          <p>
            Hands On Physiotherapy and Rehab Centre specifically prohibits the
            posting of any content that violates or infringes the copyright
            rights and/or other intellectual property rights (including rights
            of privacy and publicity) of any person or entity. If you believe
            that any material contained on this Site infringes your copyright or
            other intellectual property rights, you should notify us of your
            copyright infringement claim in accordance with the following
            procedure. Physical or electronic signature of a person authorized
            to act on behalf of the owner of an exclusive right that is
            allegedly infringed; Identification of the copyrighted work claimed
            to have been infringed, or, if multiple copyrighted works at a
            single online site are covered by a single notification, a
            representative list of such works at that site;Identification of the
            material that is claimed to be infringing or to be the subject of
            infringing activity and that is to be removed or access to which is
            to be disabled, and information reasonably sufficient to permit the
            service provider to locate the material; Information reasonably
            sufficient to permit the service provider to contact the complaining
            party, such as an address, telephone number, and, if available, an
            electronic mail address at which the complaining party may be
            contacted; A statement that the complaining party has a good faith
            belief that use of the material in the manner complained of is not
            authorized by the copyright owner, its agent, or the law; and A
            statement that the information in the notification is accurate, and
            under penalty of perjury, that the complaining party is authorized
            to act on behalf of the owner of an exclusive right that is
            allegedly infringed.
          </p>
        </Terms>
        <p className="mt-4 text-xl font-light">
          To contact us with any questions or concerns in connection with these
          Terms or the Site, or to provide any notice under these terms, please
          contact us.
        </p>
        <address className="font-roboto not-italic text-xl font-light flex flex-col justify-center mt-4 ">
          <p>338 Copper Creek Dr,</p>
          <p>Markham On L6B 1N8, Canada</p>
          <p>
            <a
              className="underline hover:text-green-350 hover:no-underline"
              href="tel: +1(289) 554-9090"
            >
              Phone: +1 (289) 554-9090
            </a>
          </p>
          <p>
            <a
              className="underline hover:text-green-350 hover:no-underline"
              href="fax: +1(905) 201-9909"
            >
              Fax: +1 (905) 201-9909
            </a>
          </p>
          <p>
            <a
              className="underline hover:text-green-350 hover:no-underline"
              href="mailto:info@hoparc.com?subject=Book%20appointment"
            >
              info@hoparc.com
            </a>
          </p>
        </address>
      </section>
      <Footer />
    </>
  );
};

export default TermsOfUse;
