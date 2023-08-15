import React from 'react';
import Headshot from '../assets/portfolio.jpg';

const About = () => {
  return (
    <div
      id="about"
      className="w-full sm:min-h-screen md:h-screen flex flex-col bg-[#2F3E46] text-[#fff]"
    >
      <div className="flex flex-col md:flex-row items-center justify-center md:min-h-[50vh] lg:min-h-[60vh]">
        <div className="w-full md:w-1/2 h-full flex justify-center items-center p-2 pb-[10%] md:pb-0">
          <img
            src={Headshot}
            alt="Ross Gordon"
            className="w-full md:w-auto h-auto md:max-w-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-4 md:px-16 lg:px-32 py-8 md:py-4">
          <h1 className="font-bold text-4xl md:text-5xl my-4 text-center">
            I'm Ross
          </h1>
          <p className="text-lg md:text-xl text-center mb-4">
            I'm a developer based in Richmond, VA with a focus on constant
            growth and development. I specialize in creating innovative and
            engaging solutions for the web.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-4 sm:px-16 pt-2 lg:pt-8">
        <h2 className="font-bold text-4xl mb-8 text-center">My Skills:</h2>
        <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-11 md:space-x-2 gap-4 text-center mb-[50px] md:mb-0">
          {/* React */}
          <div className="skill">
            <i className="devicon-react-original-wordmark text-5xl"></i>
          </div>
          {/* JavaScript */}
          <div className="skill">
            <i className="devicon-javascript-plain text-5xl"></i>
          </div>
          {/* TypeScript */}
          <div className="skill">
            <i className="devicon-typescript-plain text-5xl"></i>
          </div>
          {/* Next.js */}
          <div className="skill">
            <i className="devicon-nextjs-original text-5xl"></i>
          </div>
          {/* Tailwind CSS */}
          <div className="skill">
            <i className="devicon-tailwindcss-plain text-5xl"></i>
          </div>
          {/* Node.js */}
          <div className="skill">
            <i className="devicon-nodejs-plain text-5xl"></i>
          </div>
          {/* Firebase */}
          <div className="skill">
            <i className="devicon-firebase-plain-wordmark text-5xl"></i>
          </div>
          {/* MongoDB */}
          <div className="skill">
            <i className="devicon-mongodb-plain-wordmark text-5xl"></i>
          </div>
          {/* Git */}
          <div className="skill">
            <i className="devicon-git-plain text-5xl"></i>
          </div>
          {/* Docker */}
          <div className="skill">
            <i className="devicon-docker-plain-wordmark text-5xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
