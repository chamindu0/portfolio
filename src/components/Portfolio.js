import React from "react";
import MovieApp from "../assests/portfolio/1.png";
import JavaGame from "../assests/portfolio/2.png";
import ReadList from "../assests/portfolio/3.png";
import SimpleBlog from "../assests/portfolio/4.png";
import PortfolioSite from "../assests/portfolio/5.png";
import BussinessWebsite from "../assests/portfolio/6.png";
const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: PortfolioSite,
      codeLink:"https://github.com/chamindu0/portfolio.git",
      demoLink:"https://chaminduyasintha.netlify.app/"      

    },
    {
      id: 2,
      src: MovieApp,
      codeLink:"https://github.com/chamindu0/Movie_app.git",
      demoLink:"https://movieapplicationdemo.netlify.app/"      

    },
    {
      id: 3,
      src:JavaGame,
      codeLink:"https://github.com/chamindu0/reading-list.git",
      demoLink:"https://javagamedemo.netlify.app/"
    },
    {
      id: 4,
      src: ReadList,
      codeLink:"https://github.com/chamindu0/reading-list.git",
      demoLink:"https://readinglistdemo.netlify.app/"
    },
    {
      id: 5,
      src: BussinessWebsite,
      codeLink:"https://github.com/chamindu0/modern_bussiness_websit.git",
      demoLink:"https://bussinesswebsitedemo.netlify.app//"
    },
    {
      id: 6,
      src: SimpleBlog,
      codeLink:"https://github.com/chamindu0/react-blog.git",
      demoLink:"https://simplereactblogdemo.netlify.app"      

    },
  ];
  return (
    <div
      name="Portfolio"
      className=" h-full bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-20 lg:pt-96  md:pt-96 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pt-96 h-full lg:pt-0 md:pt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src,codeLink,demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={()=>window.location.href= demoLink } className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={()=>window.location.href=codeLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
