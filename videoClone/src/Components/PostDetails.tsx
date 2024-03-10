import React, { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();

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

  const handleViewPost = (id: string) => {
    navigate(`/view/${id}`);
  };
  return (
    <>
      {" "}
      <div className=" h-[100%]  flex flex-col">
        <h1 className="font-primary text-[20px] leading-[14px] text-white">
          {data.submission.title}
        </h1>
        <p className="font-primary text-[15px] leading-[16px] text-justify pt-3 text-white">
          {data.submission.description.substring(0, 40)} ...
        </p>
        <button
          className="w-[100%] h-[30px] bg-orange-500 font-primary text-[15px] font-semibold text-white tracking-wider rounded-md gap-4"
          onClick={() => handleViewPost(data.postId)}
        >
          View Post{" "}
        </button>
      </div>
    </>
  );
};

export default PostDetails;
