import Image from "next/image";
import { SiFacebook, SiInstagram } from "react-icons/si"
import Link from "next/link";


function Footer() {
  return (
    <>
      <div className="block w-full"></div>
      <footer className="bg-blue-550 w-full">
        <div className="grid grid-cols-1 footer:grid-cols-2 px-3 sm:grid-cols-2 gap-2 mobile:px-8 py-8 grid-cols-2">
          <div className="flex flex-col footer:items-center">
            <div className="flex flex-col items-left justify-start mb-7 footer:flex-row">
              <Image
                src="/images/footer/logo.png"
                alt="hoparc logo"
                width={100}
                height={100}
              />
              <div className="flex flex-col justify-center pl-0 footer:items-left footer:pl-2">
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
            <address className="font-roboto not-italic text-base text-white flex flex-col justify-center mb-4 ">
              <p className="text-slate-500">338 Copper Creek Dr,</p>
              <p className="text-slate-500">Markham On L6B 1N8, Canada</p>
              <p>
                <a
                  className="underline text-slate-500 hover:text-green-350 hover:no-underline"
                  href="tel: +1(289) 554-9090"
                >
                  Phone: +1 (289) 554-9090
                </a>
              </p>
              <p>
                <a
                  className="underline text-slate-500 hover:text-green-350 hover:no-underline"
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
          </div>
          <div className="flex flex-col justify-evenly gap-y-2 gap-x-2 footer:flex-row">
            <div className="footer:flex flex-col items-center text-left">
              <h2 className="mb-6 text-2xl font-roboto text-white text-left footer:text-center">
                Store Hours
              </h2>
              <ul className="text-white font-roboto text-slate-500 text-left footer:text-center">
                <li>Sunday: 9:00 a.m. - 5:00 p.m. </li>
                <li className="mr-20">Monday: Closed</li>
                <li>Tuesday: 8:00 a.m. - 8:00 p.m.</li>
                <li>Wednesday: 2:00 a.m. - 8:00 p.m.</li>
                <li>Thursday: 8:00 a.m. - 8:00 p.m.</li>
                <li>Friday: 9:00 a.m. - 6:00 p.m.</li>
                <li>Saturday: 9:00 a.m. - 5:00 p.m.</li>
              </ul>
            </div>
            <div className="footer:flex flex-col items-center text-left">
              <h2 className="mb-6 text-2xl font-roboto text-white text-left footer:text-center">
                Information
              </h2>
              <ul className="footer:flex flex-col items-between text-white font-roboto text-slate-500">
                <li>
                  <Link className="hover:text-green-350" href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-green-350" href="/terms-of-use">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-2 px-8 footer:px-32 footer:items-center footer:justify-between bg-blue-850">
          <div className="flex flex-col w-full justify-between gap-3 md:flex-row">
            <div className="flex flex-col gap-1">
              <p className="text-slate-500 text-xs sm:text-xs">
                <span>&copy;</span>
                Designed and Developed by{" "}
                <a
                  className="text-slate-400 hover:text-green-350"
                  href="https://alvinquach.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="open link to alvin quach portfolio"
                >
                  Alvin Quach
                  {" & "}
                </a>
                <a
                  className="text-slate-400 hover:text-green-350"
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
            <div className="flex text-slate-400 text-2xl items-center gap-3">
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
  );
}

export default Footer;
