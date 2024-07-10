import React from "react";
import { useAuth } from "../../../contexts/authContext";
import { Link } from "react-router-dom";

function PostList() {
  const { posts } = useAuth();
  return (
    <section className="py-12  text-gray-100 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            Welcome to Our Blog
          </h2>
          <p className="mb-4">
            Discover Insights, Stories, and More from Our Community
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          {[...posts].reverse().map((post) => (
            <Link key={post.id} to={`/post/${post.id}`}  state={ {title: post.title, content: post.content} }  className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                  <div >
                    <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-yellow-400 hover:text-white transition duration-500 ease-in-out">
                      <span className="font-bold">{post.day}</span>
                      <small>{post.month}</small>
                    </div>
                  </div>
                  <h3 className=" text-2xl font-bold text-gray-900 ">
                    {post.title}
                  </h3>
                  <p className="mt-6 text-base text-gray-600 line-clamp-4 text-justify">{post.content}</p>
                  <div className="text-black underline font-[500] mt-[10px]">Read more</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PostList;
