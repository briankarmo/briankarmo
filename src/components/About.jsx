import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm a front-end developer with a passion for building innovative and engaging websites, and applications, using JavaScript and React. I specialize in creating user interfaces that are both functional, beautiful, and that provide seamless experiences for users.
        </p>
        <br />
        
        <p className="text-xl">
        I'm constantly learning and pushing myself to stay on top of the latest developments in the industry! Through self-learning, I have honed not only the fundamentals of front-end software development, and frameworks, but also complex topics such as object-oriented programming and DOM manipulation. My passion for staying on the cutting edge of technology and dedication, to continuous improvement set me apart as an exceptional problem solver.
        </p>
      </div>
    </div>
  );
};

export default About;