import { useState } from "react";
import AboutItem from "./AboutItem";

const SingleVideo: React.FC<any> = ({ data }) => {
  const [click, setClick] = useState(false);
  console.log(data);
  return (
    <div>
      <div
        key="9e20ef0d-17fe-4317-a2f8-5d601d507761"
        className=" h-[380px] bg-slate-700 p-1 cursor-pointer"
        onClick={() => setClick((prev) => !prev)}
      >
        <div
          key="video_container"
          className="w-full h-[200px] bg-slate-800 cursor-pointer"
          onClick={() => setClick((prev) => !prev)}
        >
          {!click && (
            <img
              className="w-[100%] h-[100%] object-contain "
              src={data.submission.thumbnail}
              alt="thumbnail"
              onClick={() => setClick((prev) => !prev)}
            />
          )}
          {click && (
            <iframe
              className="w-[100%] h-[100%] cursor-pointer"
              allow="autoplay"
              onClick={() => setClick((prev) => !prev)}
              src={data.submission.mediaUrl}
            ></iframe>
          )}
        </div>
        <AboutItem data={data} />
      </div>
    </div>
  );
};

export default SingleVideo;
