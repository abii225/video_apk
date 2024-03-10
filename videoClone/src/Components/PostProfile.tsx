import React from "react";
import { BiSolidLike } from "react-icons/bi";

/**
 *
 *
 */
const PostProfile: React.FC<any> = ({ data }) => {
  console.log(data.reaction.voted, typeof data.reaction.voted);
  return (
    <>
      <div className="flex justify-between max-w-[1000px]">
        <div className="w-[50px] h-[50px] bg-slate-800 rounded-full flex gap-3 items-center ">
          <img
            className="w-[100%] h-[100%]  object-cover rounded-full"
            src={data.creator.pic}
            alt="pic"
          />
          <h1 className="text-white font-primary text-[18px] md:text-[25px] leading-[20px]">
            {data.creator.name}
          </h1>
        </div>
        <div
          className={` flex flex-col justify-center align-middle items-center`}
        >
          <BiSolidLike
            className={`text-[25px] ${
              data.reaction.voted == false ? "text-white" : "text-blue-700"
            }`}
          />
          <h2 className="text-white">{data.reaction.count}</h2>
        </div>
      </div>
    </>
  );
};

export default PostProfile;
