import React, { useState } from "react";
import { useAuth } from "../../../contexts/authContext"; 
import { Link } from "react-router-dom";
import CorrectIcon from "../../../assets/icon/1292787.svg"

function NewPost() {
  const { addPost } = useAuth(); 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowIcon(true);
    const currentDate = new Date();
    const day = currentDate.getDate(); 
    const month = currentDate.toLocaleString('default', { month: 'long' });


    addPost({ title, content, day: day, month: month });

    setTitle("");
    setContent("");
    setTimeout(() => {
        setShowIcon(false); 
    }, 1000);
  };
  return (
    <div className="relative">
      <h2 className="leading-normal text-gray-100 text-base md:text-xl lg:text-2xl mb-8">
        Create New Post
      </h2>
{   showIcon&&   <div class="flex flex-row flex-wrap justify-center absolute top-[-30px] right-0">
    <div class="flex justify-center items-center text-center m-2 h-34 w-74">
      <div class="flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 w-24 h-24 border border-green-500 z-10">
   <img src={CorrectIcon} alt="" className="w-[45px]"/>
      </div>
      <div class="flex flex-col text-left bg-green-500 h-30 w-full text-white text-xs self-center pl-16 pr-4 py-2 -ml-12 rounded-r-full">
        <h3 class="text-lg w-full">Your post has been successfully created!</h3>
      </div>
    </div>
  </div>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label
          for="post"
          class="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
        >
          Title <span className="text-red-700"> *</span>
        </label>
        <input
          type="text"
          required
          value={title}
          id="post"
          onChange={(e) => setTitle(e.target.value)}
          className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title"
        />

        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-100 dark:text-white  mt-[20px]"
        >
          Your message <span className="text-red-700"> *</span>
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          id="message"
          required
          rows="4"
          className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
        <div className="lg:flex mt-[20px] mb-[80px] ">
          <button
            className="w-full lg:w-[30%] shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white focus:outline-none                       bg-blue-600 hover:bg-blue-700 hover:shadow-xl transition duration-300 "
            type="submit"
          >
            Add post
          </button>
          <Link
            to={"/"}
            className={`w-full max-lg:mt-[20px] lg:ml-[20px]  lg:w-[30%] shadow-xl flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm bg-gray-100  font-medium hover:bg-gray-300 transition duration-300 active:bg-gray-1`}
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
