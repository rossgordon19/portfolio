import React from 'react';

const Skills = () => {
  return (
    <div name="skills" className="bg-[#000] text-[#EDF2F4] w-full h-[140vh]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-5xl font-bold inline">Skills</p>
          <p className="py-4 text-xl">Skilled in the following technologies:</p>
        </div>

        {/* Icons */}

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8 text-black font-bold">
          <div className="shadow-md bg-[#e5e5e5] shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-4"
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
              }
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md bg-[#e5e5e5] shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-4"
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
              }
              alt="TypeScript icon"
            />
            <p className="my-4">TypeScript</p>
          </div>

          <div className="shadow-md bg-[#e5e5e5] shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-4"
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
              }
              alt="React icon"
            />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md bg-[#e5e5e5] shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-4"
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
              }
              alt="HTML icon"
            />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md bg-[#e5e5e5] shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-4"
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
              }
              alt="CSS icon"
            />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md bg-[#e5e5e5] shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-3"
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
              }
              alt="Tailwind icon"
            />
            <p className="my-4">Tailwind</p>
          </div>

          <div className="shadow-md bg-[#e5e5e5] shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-3"
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
              }
              alt="Bootstrap icon"
            />
            <p className="my-4">Bootstrap</p>
          </div>

          <div className="shadow-md bg-[#e5e5e5] shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-4"
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
              }
              alt="Node icon"
            />
            <p className="my-4">Node</p>
          </div>

          {/* <div className="shadow-md bg-[#e5e5e5] shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-4"
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
              }
              alt="MongoDB icon"
            />
            <p className="my-4">MongoDB</p>
          </div> */}

          <div className="shadow-md bg-[#e5e5e5] shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-4"
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg'
              }
              alt="Git icon"
            />
            <p className="my-4">Git</p>
          </div>

          <div className="shadow-md bg-[#e5e5e5] shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-4"
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
              }
              alt="VS Code icon"
            />
            <p className="my-4">VS Code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
