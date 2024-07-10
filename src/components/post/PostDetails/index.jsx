// components/post/PostDetails.js
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";

const PostDetails = () => {
    const location = useLocation();
    const { title, content } = location.state || {};
    console.log(location, "sefs");
    if (!title || !content) {
      return  <div>Post data not found or missing</div>;
    }


  return (
    <div >
      <h1 className="text-[20px] sm:text-[30px]  font-[500] text-white">{title}</h1>
      <p  className="text-[15px] font-[300] text-white mt-[10px]">{content}</p>
    </div>
  );
};

export default PostDetails;
