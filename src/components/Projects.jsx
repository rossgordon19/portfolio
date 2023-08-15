import React from 'react';
import Webtools from '../assets/webtools.png';
import GoalFlow from '../assets/goalflow.png';
import Skinny from '../assets/skinny.png';

const Projects = () => {
  return (
    <div id="projects" className="w-full bg-[#2F3E46] text-[#fff]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline">Projects</p>
          <p className="py-6 text-xl">Here are a few of my recent projects:</p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[-20px] text-black">
          {/* Project 1 • GoalFlow */}
          <div className="rounded-md shadow-lg bg-[#fff]">
            <a href="https://goal-flow.netlify.app" target="_blank">
              <img
                src={GoalFlow}
                className="object-cover h-[300px] w-full"
                alt="GoalFlow"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">GoalFlow</div>
              <p className="pb-2">
                GoalFlow is a goal tracker web app with CRUD functionality and
                Authentication.
              </p>
              <p className="font-extrabold">Technologies Used:</p>
              <p>React, Vite, TypeScript, Tailwind CSS, Firebase</p>
            </div>
            <div className="text-center mt-5">
              <a href="https://goal-flow.netlify.app" target="_blank">
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/rossgordon19/goalflow-app"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Code
                </button>
              </a>
            </div>
          </div>

          {/* Project 2 • WebTools.io */}
          <div className="rounded-md shadow-lg bg-[#fff] flex flex-col justify-center items-center">
            <a href="https://webtoolsio.netlify.app/" target="_blank">
              <img
                src={Webtools}
                className="object-cover h h-[300px]"
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
              <p>React, Vite, Tailwind, Dall-E-2 API, is.gd API</p>
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

          {/* Project 3 • Skinny V */}
          <div className="rounded-md shadow-lg bg-[#fff] flex flex-col justify-center items-center">
            <a href="https://eastsideskinnyv.com" target="_blank">
              <img
                src={Skinny}
                className="object-cover h-[300px] mb-6"
                alt="Skinny V • Richmond, VA"
              />
            </a>
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2 text-center">Skinny V</div>
              <p className="pb-2">
                Responsive landing page for Richmond, VA artist, Skinny V.
              </p>
              <div className="mb-4"></div>
              <p className="font-extrabold mb-1">Technologies Used:</p>
              <p>React, Vite, Tailwind CSS</p>
            </div>
            <div className="text-center mt-5">
              <a href="https://eastsideskinnyv.com" target="_blank">
                <button className="text-center rounded-lg px-2 py-2 m-2 bg-[#fff] text-[#000] border font-bold text-lg hover:bg-[#000] hover:text-[#fff]">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/rossgordon19/east-side-skinny-2.0"
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
