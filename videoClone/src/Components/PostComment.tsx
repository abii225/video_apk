import React from "react";

const PostComment = () => {
  return (
    <div className=" w-[100%] max-w-[500px]   rounded-md">
      <textarea
        className="w-full rounded-md"
        name=""
        id=""
        cols={30}
        rows={1}
      ></textarea>
      <button className="w-[100px] p-2 bg-slate-600">Submit</button>
    </div>
  );
};

export default PostComment;
