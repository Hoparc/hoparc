import Image from "next/image";


function Footer() {
  return (
    <footer className="bg-blue-550 fixed bottom-0 w-full">
      <div className="grid md:grid-cols-3 gap-2 py-8 px-32 grid-cols-1">
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
          <address className="font-roboto not-italic text-base text-white flex flex-col justify-center">
            <p>338 Copper Creek Dr,</p>
            <p>Markham On L6B 1N8, Canada</p>
            <p className="underline"><a href="tel: +1(289) 554-9090">Phone: +1 (289) 554-9090</a></p>
            <p className="underline"><a href="fax: +1(905) 201-9909">Fax: +1 (905) 201-9909</a></p>
            <a className="underline" href="mailto:info@hoparc.com?subject=Book%20appointment">info@hoparc.com</a>
          </address>
        </div>
        <div className="md:flex flex-col items-center text-left">
          <h2 className="mb-6 text-2xl font-roboto text-white capitalize">
            Hours of operations
          </h2>
          <ul className="text-white font-roboto">
            <li>Sunday: </li>
            <li>Monday:</li>
            <li>Tuesday:</li>
            <li>Wednesday:</li>
            <li>Thursday:</li>
            <li>Friday:</li>
            <li>Saturday:</li>
          </ul>
        </div>
        <div className="md:flex flex-col items-center text-left">
          <h2 className="mb-6 text-2xl font-roboto text-white capitalize">
            Information
          </h2>
          <ul className="md:flex flex-col items-between text-white font-roboto">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>

          </ul>
        </div>
      </div>
      <div className="py-6 px-32 md:flex md:items-center md:justify-between bg-blue-850">
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
        <div className=""></div>
      </div>
    </footer>
  );
}

export default Footer;
