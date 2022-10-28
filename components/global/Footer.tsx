function Footer() {
  return (
    <footer className="bg-slate-600">
      <div className="grid grid-cols-1 gap-8 py-8 px-6 md:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase">
            Address
          </h2>
          <address className="text-white">
            3006 Hwy. 49, Ste. C
            <span className="block mt-4">Cool, CA 95614</span>
          </address>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase">
            Hours
          </h2>
          <ul className="text-white">
            <li className="mb-4">24 Hours</li>
            <li className="mb-4">7 Days A Week</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase">
            Contact
          </h2>
          <ul>
            <li className="mb-4 text-white">Kalin - (925) 360-5251</li>
            <li className="mb-4 text-white">Mike - (925) 639-8946</li>
            <li className="text-white my-2">
              Email:{" "}
              <a
                href="mailto:info@coolgymhwy49.com?subject=New%20Inquiry"
                rel="noopener noreferrer"
                target="_blank"
                className="text-white underline hover:text-slate-700"
              >
                info@coolgymhwy49.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6 px-4 md:flex md:items-center md:justify-between bg-blue-750">
        <p className="text-white">
          Designed and Developed by{" "}
          <a
            className="text-white hover:text-slate-800"
            href="https://andrewfinsand.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="open link to andrew finsand portfolio"
          >
            Andrew Finsand
          </a>
          {" & "}
          <a
            className="text-white hover:text-slate-800"
            href="https://alvinquach.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="open link to alvin quach portfolio"
          >
            Alvin Quach
          </a>
          <span className="ml-2">&copy;</span>
        </p>
        <div className="mt-4 md:mt-2">
          <a
            href="https://www.facebook.com/Cool-Gym-100173632525448"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="open link to cool gym hwy 49 facebook"
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
