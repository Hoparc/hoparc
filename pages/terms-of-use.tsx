import { NextPage } from "next";
import Head from "next/head";

import client from "../apollo-client";
import {
  LocationFragment,
  AllLocationsQuery,
  AllLocationsDocument,
} from "../graphql-operations";

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

type TermsOfUseProps = {
  locations: LocationFragment[];
};

const TermsOfUse: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terms Of Use | Hands on Physiotherapy and Rehab Centre</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#327CDF" />
        <meta
          name="description"
          content="Terms of Use at Hands on Physiotherapy and Rehab Centre"
        />
        <meta
          name="keywords"
          content="terms of use, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-4 text-xl font-light">
          Welcome to the Hands On Physiotherapy and Rehab Centre website. By
          accessing, browsing or using this site, you acknowledge that you have
          read, understood and agreed to be bound by these terms of use. If you
          do not agree to these terms, you should not use or access this site.
        </p>
        <p className="mt-4 text-xl font-light">
          Hands On Physiotherapy and Rehab Centre reserves the right to revise
          these terms at any time by updating this posting. You are encouraged
          to review these terms each time you use the site because your use of
          the site after the posting of changes will constitute your acceptance
          of the changes. We grant you a personal, limited, non-transferable
          non-exclusive, license to access and use the site. We reserve the
          right, in our sole discretion and without notice to you, to revise the
          products and services available on the site and to change, suspend or
          discontinue any aspect of the site. We will not be liable to you or to
          any third party for doing so. We may also impose rules for and limits
          on use of the site or restrict your access to part, or all, of the
          site without notice or penalty. Your continued use of the site will
          constitute your acceptance of any such changes.
        </p>
        <Terms title="1. Use of the Site">
          <p>
            You may use the site only for your own non-commercial personal use
            and in compliance with these terms. You are responsible for your own
            communications, including the transmission, uploading or posting of
            information and are responsible for the consequences of such
            communications to the site. We require all members to agree not to
            use the site, and specifically prohibit any use of the site, for any
            of the following purposes.
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
            Attempting to interfere in any way with the site's or Hands On
            Physiotherapy and Rehab Centre' network security, or attempting to
            use the site's service to gain unauthorized access to any other
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
            products, orders or your use of certain portions of the site,
            including with respect to ordering, shipping and return policies and
            membership reward programs (“additional terms”). Additional Terms
            are made part of these terms by reference. If there is a conflict
            between these terms and the additional terms, the additional terms
            shall control.
          </p>
        </Terms>

        <Terms title="3. Membership">
          <p>
            The site is available to registered users who are 18 years and older
            and who have not been suspended or removed by Hands On Physiotherapy
            and Rehab Centre for any reason (a "member"). We reserve the right
            to revoke your membership for any reason at any time including as a
            result of a violation of these Terms of the Privacy Policy, without
            notice. Membership is void where prohibited by law. In order to
            redeem earnings from activities on the site, you must A) have
            confirmed your email address by responding to any email sent to you
            from Klapta Research Services, AND B) completed a minimum of five
            (5) surveys that have all been validated by the client.
          </p>
          <br />
          <p>
            A completed survey is defined as a survey that has been legitimately
            started by the site, taken by you as a member. All questions are
            successfully answered, and you have been returned to the site upon
            successful completion of the survey. Members who have not completed
            both A) and B) will be denied redemption of earned points until both
            requirements have been fulfilled.
          </p>
        </Terms>

        <Terms title="4. Product Information, Limitation on Quantities">
          <p>
            Excluding any content which may be submitted by members from time to
            time, we strive to ensure that the information on the site is
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
            may be submitted by members), materials, text, images, videos,
            graphics, trademarks, logos, button icons, music, software and other
            elements available on the site are the property of Hands On
            Physiotherapy and Rehab Centre or our licensors and are protected by
            copyright, trademark and/or other proprietary rights and laws. You
            agree not to sell, license, rent, distribute, copy, reproduce,
            transmit, publicly display, publicly perform, publish, adapt, edit,
            modify or create derivative works from any content or materials on
            the site. Hands On Physiotherapy and Rehab Centre and the Hands On
            Physiotherapy and Rehab Centre logo are registered trademarks of
            Hands On Physiotherapy and Rehab Centre. All other trademarks are
            the property of their respective owners.
          </p>
        </Terms>

        <Terms title="6. Submitted Content">
          <p>
            Hands On Physiotherapy and Rehab Centre does not claim ownership of
            any materials you make available through the site. With respect to
            any materials you submit or make available for inclusion on the
            site, you grant Hands On Physiotherapy and Rehab Centre a perpetual,
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
            the site. The site, and all content, merchandise, and other
            information on or accessible from or through this is or a "linked"
            site are provided on an "as is" and "as available" basis without
            warranty of any kind, either express or implied, including but not
            limited to the implied warranties of merchantability, fitness for a
            particluar purpose, noninfringement, security or accuracy.
            Specifically, but without limitation, Hands on Physiotherapy and
            Rehab Centre does not warrant that: (1) The information on the site
            is correct, accurate or reliable. (2) The functions contaiend on
            this site will be uninterrupted or error-free. (3) Defects will be
            corrected, or that this site or the server that makes it available
            is free of viruses or other harmful components.
          </p>
          <br />
          <p>
            Hands On Physiotherapy and Rehab Centre makes no warranties of any
            kind regarding any non-Hands On Physiotherapy and Rehab Centre sites
            to which you may be directed or hyperlinked from this site.
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
            costs and expenses of defence, including attorneys' fees, in any way
            arising from or related to your use of the site. Your violation of
            these terms or the privacy policy, content posted to the site by
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

        <Terms title="10. Risk of Loss">
          <p>
            Any merchandise purchased from our site will be shipped by a
            third-party carrier. As a result, title and risk of loss for such
            merchandise will pass to you upon our delivery to the carrier.
          </p>
        </Terms>

        <Terms title="11. Copyright Infringement, Notice and Take Down Procedures">
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
            allegedly infringed. Identification of the copyrighted work claimed
            to have been infringed, or, if multiple copyrighted works at a
            single online site are covered by a single notification, a
            representative list of such works at that site. Identification of
            the material that is claimed to be infringing or to be the subject
            of infringing activity and that is to be removed or access to which
            is to be disabled, and information reasonably sufficient to permit
            the service provider to locate the material. Information reasonably
            sufficient to permit the service provider to contact the complaining
            party, such as an address, telephone number, and, if available, an
            electronic mail address at which the complaining party may be
            contacted. A statement that the complaining party has a good faith
            belief that use of the material in the manner complained of is not
            authorized by the copyright owner, its agent, or the law. A
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
        <address className="not-italic text-xl font-light mt-4 ">
          <p>338 Copper Creek Dr,</p>
          <p>Markham On L6B 1N8, Canada</p>
          <p>
            Phone: {""}
            <a
              className="underline hover:text-green-350 hover:no-underline"
              href="tel: +1(289) 554-9090"
            >
              +1 (289) 554-9090
            </a>
          </p>
          <p>
            Fax: {""}
            <a
              className="underline hover:text-green-350 hover:no-underline"
              href="fax: +1(905) 201-9909"
            >
              +1 (905) 201-9909
            </a>
          </p>
          <p>
            Email: {""}
            <a
              className="underline hover:text-green-350 hover:no-underline"
              href="mailto:info@hoparc.com?subject=Book%20appointment"
            >
              info@hoparc.com
            </a>
          </p>
        </address>
      </section>
    </>
  );
};

export default TermsOfUse;

export async function getStaticProps(): Promise<{ props: TermsOfUseProps }> {
  const { data: locationData } = await client.query<AllLocationsQuery>({
    query: AllLocationsDocument,
  });

  const allLocation: LocationFragment[] = locationData.allLocation;
  const locations = allLocation;

  return {
    props: {
      locations,
    },
  };
}
