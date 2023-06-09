import React from 'react';

import Headshot from '../assets/portfolio.jpg';

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen sm:min-h-[150vh] md:h-[120vh] bg-[#fff] text-[#000] flex flex-col sm:flex-row"
    >
      <div className="mx-auto w-full sm:w-1/2 h-full mb-5i flex flex-col items-center justify-center px-4 md:px-16 lg:px-32 pt-12 pb-24">
          <h1 className="font-bold text-4xl md:text-5xl my-4 text-center">
            I'm Ross. Welcome to my portfolio.
          </h1>
        <p className="text-lg md:text-xl text-center">
          I'm a developer based in Richmond, Virginia, with a goal to create
          visually appealing, easy to use websites and applications. With a Full
          Stack + Mobile certificate from Nucamp Coding Bootcamp, professional
          developer experience, and a background in technical support, I bring a
          unique combination of technical expertise and customer-centric
          approach to my work. Outside of coding, I enjoy drumming, traveling,
          and technology.
        </p>
      </div>
      <div className="w-full sm:w-1/2 h-full bg-[#fff] flex justify-center items-center p-2 pb-[10%] sm:pb-0">
        <img src={Headshot} alt="Ross Gordon" className="w-auto h-auto" />
      </div>
    </div>
  );
};

export default About;
