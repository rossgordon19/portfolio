import React from 'react';

const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-[#E5E5E5v] w-full h-[50vh] text-black flex items-center"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="font-bold text-4xl md:text-5xl my-4">
            Projects (Coming Soon)
          </p>
          <p className="py-6 text-lg md:text-xl">
            I'm currently working on new projects. For now, check out my{' '}
            <a
              href="https://www.github.com/rossgordon19"
              target="_blank"
              className="underline cursor-pointer"
            >
              GitHub
            </a>
            , or this <br />{' '}
            <a
              href="https://ai-img-generator.netlify.app/"
              target="_blank"
              className="underline"
            >
              AI Image Generator
            </a>{' '}
            I made.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
