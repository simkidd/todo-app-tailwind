import React from "react";
import { Link } from "react-router-dom";
import {HiArrowNarrowRight} from 'react-icons/hi'

const Landing = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="container mx-auto max-w-[1000px]  grid md:grid-cols-2">
          <div className="w-full flex">
            <div className="w-full flex h-full">
              <img src={require('../assets/To-Do-List-Background.jpeg')} alt="" className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col px-4 gap-8 py-[5rem] pt-[3rem]">
            <h1 className="font-bold inline-block text-4xl   text-center md:text-left">
              Welcome to Go Task
            </h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
              voluptatum optio ut harum quisquam obcaecati impedit culpa!
              Laudantium, officiis praesentium?
            </p>
            <Link to="todos" className="w-fit md:m-0 mx-auto" >
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
