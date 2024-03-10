import React, { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
const PostProfile = () => {
  const [data, setData] = useState({
    postId: "9e20ef0d-17fe-4317-a2f8-5d601d507761",
    creator: {
      name: "soniya",
      id: "e70c3bbb-eec9-4a44-82ca-d69d5ce2a213",
      handle: "soniyabora08",
      pic: "https://cdn.gro.care/6ce188269916_1667990600681.bin",
    },
    comment: {
      count: 2,
      commentingAllowed: true,
    },
    reaction: {
      count: 31,
      voted: false,
    },
    submission: {
      title: "Random Title-Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. ",
      mediaUrl: "https://cdn.gro.care/755d5af44c54_1683463531570.mp4",
      thumbnail: "https://cdn.gro.care/53d5e59f202d_1683463530883.jpeg",
      hyperlink: "https://links.gro.care/soBWbj3vC1A8ZnVd6",
      placeholderUrl: "https://cdn.gro.care/9816dd99598c_1661257637720.bin",
    },
  });

  return (
    <>
      <div className="flex justify-between max-w-[1000px]">
        <div className="w-[50px] h-[50px] bg-slate-800 rounded-full flex gap-3 items-center ">
          <img
            className="w-[100%] h-[100%]  object-cover rounded-full"
            src={data.creator.pic}
            alt="pic"
          />
          <h1 className="text-white font-primary text-[18px] md:text-[25px]">
            {data.creator.name}
          </h1>
        </div>
        <div className=" flex flex-col justify-center align-middle items-center">
          <BiSolidLike className="text-[25px] text-white" />
          <h2 className="text-white">15</h2>
        </div>
      </div>
    </>
  );
};

export default PostProfile;
