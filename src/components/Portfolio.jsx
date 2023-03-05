import React from "react";
import weathertracker from "../assets/portfolio/weathertracker.png";
import ModernApp from "../assets/portfolio/ModernApp.png";
import Woodmere from "../assets/portfolio/Woodmere.png";
import BKTube from "../assets/portfolio/BKTube.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weathertracker,
      demoLink: "https://briankarmo-weathertracker-w-reponsive.netlify.app/"
    },
    {
      id: 2,
      src: ModernApp,
      demoLink: "https://bk-inc-modern-app.netlify.app/"
    },
    {
      id: 3,
      src: Woodmere,
      demoLink: "https://briankarmo.com/woodmere-party-store/"
    },
    {

      id: 4,
      src: BKTube,
      demoLink: "https://briankarmo-tube.netlify.app/"
    }
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">I have attached examples below of my previous work.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
              </a>
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
