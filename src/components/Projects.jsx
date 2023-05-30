import React from 'react';
import Webtools from '../assets/webtools.png';

const Projects = () => {
  return (
    <div name="projects" className="bg-[#E5E5E5v] w-full text-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline">Projects</p>
          <p className="py-6 text-xl">Here are a few of my recent projects:</p>
        </div>

        {/* Projects */}
        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4 mt-[-20px] text-black">
          {/* Project 1 • WebTools.io */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://webtoolsio.netlify.app/" target="_blank">
              <img
                src={Webtools}
                className="rounded-lg hover:scale-105 duration-300 w-full"
                alt="WebTools.io • Get Ahead with WebTools"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">
                WebTools.io
              </div>
              <p className="pb-2">
                3 projects, 1 app - QR code generator, URL shortener, and DALL·E
                2 API image generator.
              </p>
              <p className="font-extrabold">Technologies Used:</p>
              <p>React, Vite, Tailwind, Dall-E-2 API, is.gd API </p>
            </div>
            <div className="text-center mt-5">
              <a href="https://webtoolsio.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/rossgordon19/webtools.io"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Code
                </button>
              </a>
            </div>
          </div>

          {/* Project 1 • WebTools.io */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://webtoolsio.netlify.app/" target="_blank">
              <img
                src={Webtools}
                className="rounded-lg hover:scale-105 duration-300 w-full"
                alt="WebTools.io • Get Ahead with WebTools"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">
                WebTools.io
              </div>
              <p className="pb-2">
                3 projects, 1 app - QR code generator, URL shortener, and DALL·E
                2 API image generator.
              </p>
              <p className="font-extrabold">Technologies Used:</p>
              <p>React, Vite, Tailwind, Dall-E-2 API, is.gd API </p>
            </div>
            <div className="text-center mt-5">
              <a href="https://webtoolsio.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/rossgordon19/webtools.io"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Code
                </button>
              </a>
            </div>
          </div>

          {/* Project 1 • WebTools.io */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://webtoolsio.netlify.app/" target="_blank">
              <img
                src={Webtools}
                className="rounded-lg hover:scale-105 duration-300 w-full"
                alt="WebTools.io • Get Ahead with WebTools"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">
                WebTools.io
              </div>
              <p className="pb-2">
                3 projects, 1 app - QR code generator, URL shortener, and DALL·E
                2 API image generator.
              </p>
              <p className="font-extrabold">Technologies Used:</p>
              <p>React, Vite, Tailwind, Dall-E-2 API, is.gd API </p>
            </div>
            <div className="text-center mt-5">
              <a href="https://webtoolsio.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/rossgordon19/webtools.io"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
