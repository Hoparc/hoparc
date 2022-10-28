import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-blue-550 fixed bottom-0 w-full">
      <div className="grid md:grid-cols-3 gap-2 py-8 px-8 grid-cols-1">
        <div className="flex flex-col md:items-center">
          <div className="flex flex-row items-center justify-start mb-7">
            <Image src="/images/footer/logo.png" alt="hoparc logo" width={100} height={100} />

            <div className="md:flex flex-col justify-center pl-2">
              <h2 className="font-merriweather font-bold text-2xl	flex-1 w-64 text-white capitalize">
                hands on physiotherapy
              </h2>

              <h3 className="font-merriweather text-xs font-regular flex-1 w-64 text-green-350 uppercase ">
                rehab centre - pelvic health
              </h3>
            </div>
          </div>
          <address className="text-white flex flex-col justify-center">
            <p>338 Copper Creek Dr,</p>
            <p>Markham On L6B 1N8, Canada</p>
            <p className="underline"><a href="tel: +1(289) 554-9090">Phone: +1 (289) 554-9090</a></p>
            <p className="underline"><a href="fax: +1(905) 201-9909">Fax: +1 (905) 201-9909</a></p>
            <a className="underline" href="mailto:info@hoparc.com?subject=Book%20appointment">info@hoparc.com</a>
          </address>
        </div>
        <div className="md:flex flex-col items-center">
          <h2 className="mb-6 test-lg font-semibold text-white uppercase">
            Hours of operations
          </h2>
          <ul className="text-white">
            <li>Sunday:</li>
            <li>Monday:</li>
            <li>Tuesday:</li>
            <li>Wednesday:</li>
            <li>Thursday:</li>
            <li>Friday:</li>
            <li>Saturday:</li>
          </ul>
        </div>
        <div className="md:flex flex-col items-center">
          <h1 className="mb-6 test-lg font-semibold text-white uppercase">
            Quick Links
          </h1>
          <ul className="md:flex flex-col items-between text-white">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>

          </ul>
        </div>
      </div>
      <div className="py-6 px-4 md:flex md:items-center md:justify-between bg-blue-850">
        <p className="text-white">
          Designed and Developed by{" "}
          <a
            className="text-white hover:text-slate-800"
            href="https://alvinquach.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="open link to alvin quach portfolio"
          >
            Alvin Quach
            {" & "}
          </a>
          <a
            className="text-white hover:text-slate-800"
            href="https://seansipus.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="open link to sean sipus portfolio"
          >
            Sean Sipus
          </a>
          <span className="ml-2">&copy;</span>
        </p>
        <div className="mt-4 md:mt-2">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="open link to hands on physiotherapy facebook"
            className="text-white hover:text-slate-800"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
