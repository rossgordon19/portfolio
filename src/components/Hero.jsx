import React from 'react';
import { BsFillArrowRightCircleFill, BsArrowDownShort } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Resume from '../assets/resume.pdf'


const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#000] text-[#EDF2F4]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold">Ross Gordon</h1>
        <h2 className="text-3xl sm:text-7xl font-bold">Front-End Developer</h2>
        <div className="flex flex-cols-2 gap-4 pt-4">
          <button className=" bg-[#EDF2F4] hover:bg-[#8D99AE] border-2 border-black group px-6 py-3 my-2 flex items-center">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-black"
            >
              Projects
            </Link>
          </button>

          <button className="bg-[#EDF2F4] hover:bg-[#8D99AE] border-2 border-black group px-6 py-3 my-2 flex items-center">
            <a href={Resume} target="_blank" className="text-black">
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
