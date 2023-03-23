import React from "react";
import { Link } from "react-router-dom";
import {HiArrowNarrowRight} from 'react-icons/hi'

const Landing = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="container mx-auto max-w-[1000px] grid md:grid-cols-2">
          <div className="">
            <div>
              <img src="" alt="" />
            </div>
          </div>

          <div className="flex flex-col px-4 gap-8">
            <h1 className="font-bold inline-block text-4xl text-center md:text-left">
              Welcome to Go Task
            </h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
              voluptatum optio ut harum quisquam obcaecati impedit culpa!
              Laudantium, officiis praesentium?
            </p>
            <Link to="todos">
              <button className="text-white flex items-center bg-purple-500 py-3 px-6">Let's Start
              <HiArrowNarrowRight className="ml-3" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
