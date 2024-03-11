import React, { useContext, useEffect, useState } from "react";

import PostProfile from "./PostProfile";
import PostComment from "./PostComment";
import { DataContext } from "../Context/ContextApi";
import { useParams } from "react-router-dom";

const ViewPost: React.FC = () => {
  let timerId: string | number | NodeJS.Timeout | undefined;
  const { state, setState } = useContext(DataContext);
  console.log(state, setState);
  const { id } = useParams();
  console.log(id);
  const [click, setClick] = useState(false);
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  //  filter out the single post

  useEffect(() => {
    try {
      let lsData = localStorage.getItem("AllPosts");
      if (lsData) {
        const parsedData = JSON.parse(lsData);
        let singlePost = parsedData.filter((ele: { postId: string }) => {
          return ele.postId === id;
        });
        setData(() => {
          return singlePost[0];
        });
        console.log(singlePost, "filtered");
        timerId = setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [id]);

  useEffect(() => {
    console.log(data, "filtered");
  }, [data, loading]);
  return (
    <>
      {loading ? (
        <div className="bg-white">
          {/* <h1 className="text-white text-[50px]">
            Loading...........................
          </h1> */}
          <img
            className="bg-white w-[100%] h-[300px] object-cover"
            src="https://i.gifer.com/OVTb.gif"
            alt=""
          />
        </div>
      ) : (
        <div>
          <div
            key="video_container"
            className="w-[90%] mx-auto h-[250px] md:h-[300px] lg:h-[400px] bg-white mt-[20px]"
            onClick={() => setClick((prev) => !prev)}
          >
            {!click && (
              <img
                className="w-[100%] h-[100%] object-contain "
                src={data.submission.thumbnail}
                alt=""
              />
            )}

            {click && (
              <iframe
                className="w-[100%] h-[100%] "
                allow="autoplay"
                src={data.submission.mediaUrl}
              ></iframe>
            )}
          </div>
          <div id=" " className=" w-[90%] mx-auto mt-[20px]">
            <div className="min-w-[150px] max-w-[400px] ">
              <PostProfile data={data} />
              {/* <div className="w-[100px] p-2 text-white bg-green-500 ">
                Follow
              </div> */}
            </div>
            <div className="max-w-[1000px]">
              <h1 className="text-white font-primary text-[18px] md:text-[25px] leading-[20px] mt-[10px]">
                {data.submission.title}
              </h1>
              <br />
              <hr />
              <br />
              <p className="text-white font-primary text-[15px] md:text-[18px] leading-[20px]">
                {data.submission.description}
              </p>
            </div>
            <br />
            {/* ============  comments section =============== */}
            <div className="max-w-[1000px] h-[50px]  border-2 border-white"></div>
            <PostComment />
          </div>
        </div>
      )}
    </>
  );
};

export default ViewPost;
