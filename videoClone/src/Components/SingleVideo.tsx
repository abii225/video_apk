import { useState } from "react";
import AboutItem from "./AboutItem";

const SingleVideo = () => {
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
    <div>
      <div
        key="9e20ef0d-17fe-4317-a2f8-5d601d507761"
        className=" h-[380px] bg-slate-700 p-1 "
      >
        <div
          key="video_container"
          className="w-full h-[200px] bg-slate-800"
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
              onClick={(e) => setClick((prev) => !prev)}
              src="https://cdn.gro.care/755d5af44c54_1683463531570.mp4"
            ></iframe>
          )}
        </div>
        <AboutItem />
      </div>
    </div>
  );
};

export default SingleVideo;
