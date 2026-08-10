import React from 'react';
import Container from './Layuots/Container';
import { TfiFacebook } from "react-icons/tfi";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router';

const FooterTop = () => {
  return (
    <div className="py-10 bg-[#F2F2F2]">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h3 className="font-poppins font-semibold text-xl sm:text-2xl text-[#1A1A1A] mb-1">
              Subscribe our Newsletter
            </h3>
            <p className="font-poppins font-normal text-xs sm:text-sm text-[#999999] max-w-[420px] leading-relaxed">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
            </p>
          </div>

          {/* Form / Input Field */}
          <div className="w-full sm:w-auto flex justify-center">
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center w-full max-w-[480px]">
              <input
                className="w-full py-3.5 sm:py-4 pl-5 pr-[130px] font-poppins text-sm rounded-full border border-[#E6E6E6] bg-white text-[#1A1A1A] placeholder:text-[#999999] focus:outline-none focus:border-[#00B207] shadow-sm transition-all"
                type="email"
                placeholder="Your email address"
                required
              />
              <button
                type="submit"
                className="absolute right-1 text-white font-poppins font-semibold text-sm cursor-pointer bg-[#00B207] hover:bg-[#008a05] transition-colors py-2.5 sm:py-3 px-6 sm:px-8 rounded-full shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {[
              { icon: <TfiFacebook className="text-base" />, href: "https://www.facebook.com/" },
              { icon: <IoLogoTwitter className="text-base" />, href: "https://x.com/home" },
              { icon: <FaInstagram className="text-base" />, href: "https://www.instagram.com/?hl=en" },
              { icon: <FaLinkedinIn className="text-base" />, href: "https://www.linkedin.com/feed/" },
            ].map((social, index) => (
              <Link
                key={index}
                to={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex justify-center items-center rounded-full text-[#4D4D4D] hover:bg-[#00B207] hover:text-white transition-all duration-300 bg-white sm:bg-transparent hover:shadow-md"
              >
                {social.icon}
              </Link>
            ))}
          </div>

        </div>
      </Container>
    </div>
  );
};

export default FooterTop;