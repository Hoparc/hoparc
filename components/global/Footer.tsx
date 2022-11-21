import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { SiFacebook, SiInstagram } from "react-icons/si";

import { LocationFragment } from "../../graphql-operations";

type FooterProps = {
  locations: LocationFragment[];
};

function Footer({ locations }: FooterProps) {
  return (
    <div>
      {locations?.map((location) => (
        <Fragment key={location.__typename}>
          <footer className="bg-blue-550 w-full">
            <div className="grid grid-cols-1 px-3 md:grid-cols-2 gap-2 mobile:px-8 py-8">
              {/* Logo */}
              <div className="flex flex-col flex-1 my-auto md:my-0 md:mx-auto">
                <Link href="/">
                  <div className="flex flex-col md:flex-row items-left justify-start my-1">
                    <Image
                      src="/images/footer/logo.png"
                      alt="hoparc logo"
                      width={100}
                      height={100}
                      className=" h-20 w-20 my-auto"
                    />
                    {/* Logo Text */}
                    <div className="flex flex-col justify-center pl-0 md:pl-2 items-left my-auto">
                      <h2 className="font-poppins font-bold text-md text-2xl  leading-7  text-white capitalize ">
                        hands on
                      </h2>
                      <h2 className="font-poppins font-bold text-md text-2xl leading-7  text-white capitalize ">
                        physiotherapy
                      </h2>

                      <h3 className="font-roboto font-bold text-smaller  text-green-350 uppercase">
                        rehab centre - pelvic health
                      </h3>
                    </div>
                  </div>
                </Link>
                <address className="font-roboto not-italic text-base text-slate-200 flex flex-col justify-center mb-4 mt-4 w-full gap-2">
                  <a
                    className="flex flex-col underline hover:text-green-350 hover:no-underline"
                    target={"_blank"}
                    href="https://www.google.com/maps?ll=43.871323,-79.218709&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=3757030601779132263"
                    aria-label="link to google maps location of Hands On Physiotherapy And Rehab Centre/Pelvic Health"
                  >
                    <span>{location.address}</span>
                    <span>{location.addresslinen}</span>
                  </a>

                  <p>
                    Phone: {""}
                    <a
                      className="underline hover:text-green-350 hover:no-underline"
                      href="tel: +1(289) 554-9090"
                    >
                      {location.phone}
                    </a>
                  </p>
                  <p>
                    Fax: {""}
                    <a
                      className="underline hover:text-green-350 hover:no-underline"
                      href="fax: +1(905) 201-9909"
                    >
                      {location.fax}
                    </a>
                  </p>
                  <p>
                    E-Mail: {""}
                    <a
                      className="underline text-lg italic text-blue-150 hover:text-green-350 hover:no-underline"
                      href="mailto:info@hoparc.com?subject=Book%20appointment"
                    >
                      {location.email}
                    </a>
                  </p>
                </address>
              </div>
              <div className="flex flex-col flex-1 justify-evenly gap-y-2 gap-x-12 footer:flex-row my-auto md:my-0 md:mx-auto">
                <div className="footer:flex flex-col text-left">
                  <h2 className="mb-4 text-2xl font-roboto font-bold text-green-350 uppercase text-left">
                    Store Hours
                  </h2>
                  <ul className="flex flex-col gap-1 font-roboto text-slate-200 text-left">
                    <li>Sunday: {location.sunday}</li>
                    <li>Monday: {location.monday}</li>
                    <li>Tuesday: {location.tuesday}</li>
                    <li>Wednesday: {location.wednesday}</li>
                    <li>Thursday: {location.thursday}</li>
                    <li>Friday: {location.friday}</li>
                    <li>Saturday: {location.saturday}</li>
                  </ul>
                </div>
                <div className="flex flex-col text-left">
                  <h2 className="mb-4 text-2xl font-roboto font-bold text-green-350 uppercase text-left">
                    Information
                  </h2>
                  <ul className="flex flex-col font-roboto text-slate-200 gap-3">
                    <li>
                      <Link
                        className="hover:text-green-350 "
                        href="/privacy-policy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-green-350"
                        href="/terms-of-use"
                      >
                        Terms of Use
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-5 px-8 bg-blue-850">
              <div className="flex flex-col w-full justify-around gap-3 md:flex-row">
                <div className="flex flex-col gap-1">
                  <p className="text-slate-400 font-opensans text-tiny mobileXl:text-smaller">
                    <span>&copy;</span>
                    Designed and Developed by{" "}
                    <a
                      className="text-blue-300 hover:text-green-350 cursor-pointer"
                      href="https://alvinquach.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="open link to alvin quach portfolio"
                    >
                      Alvin Quach
                      {" & "}
                    </a>
                    <a
                      className="text-blue-300 hover:text-green-350 cursor-pointer"
                      href="https://seansipus.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="open link to sean sipus portfolio"
                    >
                      Sean Sipus
                    </a>
                  </p>
                  <div className="text-slate-400 text-tiny mobileXl:text-smaller font-opensans">
                    <p>
                      <span>&copy;</span>Copyright 2022 Hands On Physiotherapy &
                      Rehab Centre, All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="flex text-slate-400 text-2xl my-2 gap-6 md:my-0">
                  <div className="hover:text-green-350 cursor-pointer">
                    <a
                      href="https://www.facebook.com/Hands-On-Physiotherapy-And-Rehab-Centre-111547350359396/"
                      target="_blank"
                      aria-label="open link to hands on physiotherapy facebook page"
                    >
                      <SiFacebook />
                    </a>
                  </div>
                  <div className="hover:text-green-350">
                    <a
                      href="https://www.instagram.com/hoparc339/"
                      target="_blank"
                      aria-label="open link to hands on physiotherapy instagram page"
                    >
                      <SiInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </Fragment>
      ))}
    </div>
  );
}

export default Footer;