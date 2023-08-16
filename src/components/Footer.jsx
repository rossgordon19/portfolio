import React from 'react';
import { BsEnvelopeFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import Github from '../assets/github.svg';

const Footer = () => {
  return (
    <div className="w-full h-[510px] md:h-[210px] bg-[#2F3E46] text-[#fff] flex justify-center items-center flex-col">
      {/* Container */}
      <div className="font-bold inline">
        <p className="text-3xl">Let's Connect.</p>
        <div className="flex flex-cols-2 mx-auto justify-between p-6">
          {/* Email */}
          <a
            className="text-3xl hover:text-black"
            href="mailto:rossagordonstl@gmail.com"
          >
            <BsEnvelopeFill />
          </a>

          {/* LinkedIn */}
          <a
            className="text-3xl hover:text-black"
            href="https://www.linkedin.com/in/rossagordon/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          {/* GitHub */}
          <a
            className="text-3xl hover:text-black"
            href="https://github.com/rossgordon19"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </div>
      {/* Source Code */}
      <a
        className="text-xs text-[#fff] hover:text-black mt-2"
        href="https://github.com/rossgordon19/portfolio"
        target="_blank"
      >
        Source Code
      </a>
    </div>
  );
};

export default Footer;
