import axios from "axios";
import Pagination from "./Pagination";
import SingleVideo from "./SingleVideo";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/ContextApi";

const AllVideos: React.FC = () => {
  const { state, setState } = useContext(DataContext);
  const [page, setPage] = useState<number>(0);
  console.log(state, setState);
  const fetchallData = (page: number): any => {
    axios
      .get(`https://internship-service.onrender.com/videos?page=${page}`)
      .then((res: any) => {
        console.log(res.data.data);
        setState(() => {
          return { allPosts: res.data.data.posts };
        });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchallData(page);
  }, [page]);
  return (
    <div key="allVideos">
      <h1 className="font-primary text-white">All videos to showcase</h1>
      <div
        key="container"
        className="w-[90%]  mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
      >
        {/* <SingleVideo />
        
        <SingleVideo /> */}

        {state.allPosts.length &&
          state.allPosts.map((ele: any) => {
            return <SingleVideo data={ele} />;
          })}
      </div>
      <br />
      <Pagination current={page} setPage={setPage} />
    </div>
  );
};

export default AllVideos;
