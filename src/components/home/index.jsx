import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="">
      <div className="container mx-auto h-screen">
        <div className="text-center px-3 lg:px-0 text-white">
          <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
          Welcome to Our Blog Admin Access
          </h1>
          <p className="leading-normal text-white text-base md:text-xl lg:text-2xl mb-8">
          Discover Insights, Stories, and More from Our Community
          </p>

          <Link
            to={"/create-post"}
            className="mx-auto lg:mx-0  bg-[#FFFFFF] text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
          >
            Create new blog
          </Link>

          <Link
            to={"/"}
            className="inline-block mx-auto lg:mx-0 bg-transparent text-gray-100 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
