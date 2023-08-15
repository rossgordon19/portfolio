import React from 'react';
import { BsFillArrowRightCircleFill, BsArrowDownShort } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Resume from '../assets/resume.pdf';

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#2F3E46] text-[#fff]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold">Ross Gordon</h1>
        <h2 className="text-3xl sm:text-7xl font-bold">Front-End Developer</h2>
        <div className="flex flex-cols-2 gap-4 pt-4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-black"
          >
            <button className=" bg-[#EDF2F4] hover:bg-[#354F52] hover:text-white hover:border-white border-2 border-black  group px-6 py-3 my-2 flex items-center">
              Projects
            </button>
          </Link>
          <a href={Resume} target="_blank" className="text-black">
            <button className="bg-[#EDF2F4] hover:bg-[#354F52] hover:text-white border-2 border-black hover:border-white group px-6 py-3 my-2 flex items-center">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
