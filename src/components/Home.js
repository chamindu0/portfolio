import React from 'react';
import heroImage from '../assests/heroImage.png';
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from 'react-scroll';
const Home = () => {
  return (
  <div name="Home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 '>

     <div className='flex flex-col justify-center items-baseline h-full  ' >
         <div className='flex flex-col w-full mt-52  px-9  lg:flex-row lg:px-60  md:px-60'>
           <div>
              <h2 className='text-4xl sm:text-6xl font-bold text-white  '>
                I'm a Full Stack 
                Developer
              </h2>
              <p className='text-gray-500 py-4 max-w-md'>
                  Currently,I love to work on web appliction using technologies like
                  React,Express,MongoDB,Node.js .
              </p>
              
              <div c>
                  <Link to='Portfolio'
                  smooth
                  duration={500}
                   className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 '>
                      Portfolio
                      <span className='px-1 group-hover:rotate-90 duration-300'>
                        <FaArrowRightLong size={20} />
                      </span>
                  </Link>
             </div>     
              </div>  
              <div className='px-14'>
                  <img src={heroImage} alt="my-profile" className='p-2 h-80 max-w-72 mx-auto w-max shadow-md hover:scale-105 duration-500 rounded-2xl shadow-sky-500  mt-24 lg:mt-0  md:mt-0 ' />
              </div>
        </div>
      </div>
  </div>
  )
}

export default Home
