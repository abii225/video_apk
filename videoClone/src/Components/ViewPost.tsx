import React, { useState } from "react";

import PostProfile from "./PostProfile";
import PostComment from "./PostComment";

const ViewPost: React.FC = () => {
  const [click, setClick] = useState(false);
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
      title:
        "Random Title-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet",
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
      <div
        key="video_container"
        className="w-[90%] mx-auto h-[250px] md:h-[300px] lg:h-[400px] bg-white mt-[20px]"
        onClick={(e) => setClick((prev) => !prev)}
      >
        {!click && (
          <img
            className="w-[100%] h-[100%] object-contain "
            src="https://cdn.gro.care/53d5e59f202d_1683463530883.jpeg"
            alt=""
          />
        )}

        {click && (
          <iframe
            className="w-[100%] h-[100%] "
            allow="autoplay"
            src="https://cdn.gro.care/755d5af44c54_1683463531570.mp4"
          ></iframe>
        )}
      </div>
      <div id=" " className=" w-[90%] mx-auto mt-[20px]">
        <PostProfile />
        <div className="max-w-[1000px]">
          <h1 className="text-white font-primary text-[18px] md:text-[25px] leading-[20px] mt-[10px]">
            {data.submission.title}
          </h1>
          <hr />
          <br />
          <p className="text-white font-primary text-[15px] md:text-[18px] leading-[20px]">
            {data.submission.description}
          </p>
        </div>
        <br />
        {/* ============  comments section =============== */}
        <PostComment />
      </div>
    </>
  );
};

export default ViewPost;
