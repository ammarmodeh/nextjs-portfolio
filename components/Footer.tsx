// components/Footer.tsx
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Background Grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none overflow-hidden">
        <img
          src="/footer-grid.svg"
          alt=""
          className="w-full h-full object-cover opacity-50"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-2xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:ammarm.odeh@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-8 relative z-10">
        {/* Copyright + Powered By */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm md:text-base text-gray-400 font-light">
            Copyright © {currentYear} Ammar Odeh
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-2 justify-center md:justify-start flex-wrap">
            <span>Powered by</span>
            <span className="font-semibold text-white">React Router v7</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-gray-500">
              React 18 • TypeScript • Tailwind • Aceternity
            </span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialMedia.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="group w-12 h-12 flex justify-center items-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
            >
              <img
                src={link.img}
                alt=""
                width={24}
                height={24}
                className="opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
