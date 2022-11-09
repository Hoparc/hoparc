import Image from "next/image";
import Link from "next/link";

import { SiFacebook, SiInstagram } from "react-icons/si";

import { LocationFragment } from "../../graphql-operations";

type FooterProps = {
  locations: LocationFragment[];
};

function Footer({ locations }: FooterProps) {
  return (
    <div>
      {locations?.map((location) => (
        <>
          <footer className="bg-blue-550 w-full">
            <div className="grid grid-cols-1 px-3 md:grid-cols-2 gap-2 mobile:px-8 py-8">
              <div className="flex flex-col flex-1 items-center md:m-auto">
                <div className="w-full h-autoflex flex-row mb-7">
                  <Image
                    src="/images/footer/logo.png"
                    alt="hoparc logo"
                    width={100}
                    height={100}
                  />
                  <div className="flex flex-col justify-center">
                    <h2 className="font-merriweather font-bold text-2xl	flex-1 text-white capitalize">
                      hands on
                    </h2>

                    <div className="">
                      <h2 className="font-merriweather font-bold text-2xl	flex-1 text-white capitalize">
                        physiotherapy
                      </h2>
                    </div>

                    <h3 className="font-merriweather text-xs font-regular flex-1 text-green-350 uppercase ">
                      rehab centre - pelvic health
                    </h3>
                  </div>
                </div>
                <address className="font-roboto not-italic text-base text-slate-200 flex flex-col justify-center mb-4 w-full">
                  <p>{location.address}</p>
                  <p>{location.addresslinen}</p>
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
                    Email: {""}
                    <a
                      className="underline italic text-blue-150 hover:text-green-350 hover:no-underline"
                      href="mailto:info@hoparc.com?subject=Book%20appointment"
                    >
                      {location.email}
                    </a>
                  </p>
                </address>
              </div>
              <div className="flex flex-col flex-1 justify-evenly gap-y-2 gap-x-2 footer:flex-row">
                <div className="footer:flex flex-col text-left">
                  <h2 className="mb-6 text-2xl font-roboto text-green-350 uppercase text-left">
                    Store Hours
                  </h2>
                  <ul className="font-roboto text-slate-200 text-left">
                    <div>
                      <li>Sunday: {location.sunday}</li>
                      <li>Monday: {location.monday}</li>
                      <li>Tuesday: {location.tuesday}</li>
                      <li>Wednesday: {location.wednesday}</li>
                      <li>Thursday: {location.thursday}</li>
                      <li>Friday: {location.friday}</li>
                      <li>Saturday: {location.saturday}</li>
                    </div>
                  </ul>
                </div>
                <div className="footer:flex flex-col text-left">
                  <h2 className="mb-6 text-2xl font-roboto text-green-350 uppercase text-left">
                    Information
                  </h2>
                  <ul className="footer:flex flex-col items-between font-roboto text-slate-200">
                    <li>
                      <Link
                        className="hover:text-green-350"
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
                  <p className="text-slate-400 text-xs sm:text-xs">
                    <span>&copy;</span>
                    Designed and Developed by{" "}
                    <a
                      className="text-blue-300 hover:text-green-350"
                      href="https://alvinquach.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="open link to alvin quach portfolio"
                    >
                      Alvin Quach
                      {" & "}
                    </a>
                    <a
                      className="text-blue-300 hover:text-green-350"
                      href="https://seansipus.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="open link to sean sipus portfolio"
                    >
                      Sean Sipus
                    </a>
                  </p>
                  <div className="text-slate-400 text-xs">
                    <p>
                      <span>&copy;</span>Copyright 2022 Hands On Physiotherapy &
                      Rehab Centre, All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="flex text-slate-400 text-2xl my-2 gap-6 md:my-0">
                  <div className="hover:text-green-350">
                    <a
                      href=""
                      target="_blank"
                      aria-label="open link to hands on physiotherapy facebook page"
                    >
                      <SiFacebook />
                    </a>
                  </div>
                  <div className="hover:text-green-350">
                    <a
                      href=""
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
        </>
      ))}
    </div>
  );
}

export default Footer;