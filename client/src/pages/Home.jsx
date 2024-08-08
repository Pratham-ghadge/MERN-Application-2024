import Lottie from "lottie-react";
import React from "react";
import Homes2 from '../assets/Homes2.json'
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-20 md:flex">
      <div className=" text-center  py-5 md:py-[150px] md:w-[60%]">
        <div className="text-2xl ">The end is new <span className="text-4xl font-bold text-white"> BEGINNING</span></div>
        <h1 className="text-3xl mt-5 font-extralight text-[skyblue]">let's learn Something New </h1>
        <div className=" text-2xl mt-5"> Learn 
          <ReactTyped
          className='pl-1 text-white  font-bold text-2xl'
          strings={['MongoDB',' Express',' React','Node. js.','Tailwind css']}
          typeSpeed={120}
          loop={true}
          backSpeed={140}
          />
        </div>
        <button type="button" className="mt-5 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Let's go</button>
      </div>
      <div className=" md:w-[55%]   ">
        <Lottie animationData={Homes2} />
      </div>
    </div>

    
  );
};

export default Home;
