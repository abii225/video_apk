// import axios from "axios";
// import Pagination from "./Pagination";
// import SingleVideo from "./SingleVideo";
// import { useContext, useEffect, useState } from "react";
// import { DataContext } from "../Context/ContextApi";

// const AllVideos: React.FC = () => {
//   const { state, setState } = useContext(DataContext);
//   const [page, setPage] = useState<number>(0);
//   console.log(state, setState);
//   const fetchallData = (page: number): any => {
//     axios
//       .get(`https://internship-service.onrender.com/videos?page=${page}`)
//       .then((res: any) => {
//         console.log(res.data.data);
//         localStorage.setItem("AllPosts", JSON.stringify(res.data.data.posts));
//         setState(() => {
//           return { allPosts: res.data.data.posts };
//         });
//       })
//       .catch((err: any) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     fetchallData(page);
//   }, [page]);
//   return (
//     <div key="allVideos">
//       <div
//         key="container"
//         className="w-[90%] pt-[20px]  mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center items-center align-middle"
//       >
//         {/* Message for empty list */}
//         {!state.allPosts.length && (
//           <div className=" h-[400px] mt-[50px] ">
//             <h1 className="text-white text-center text-[30px]">
//               Empty page , Please go to previous page
//             </h1>
//           </div>
//         )}

//         {/*  */}
//         {state.allPosts.length &&
//           state.allPosts.map((ele: any) => {
//             return <SingleVideo data={ele} />;
//           })}
//       </div>
//       <br />
//       <Pagination current={page} setPage={setPage} />
//     </div>
//   );
// };

// export default AllVideos;

import axios from "axios";
import Pagination from "./Pagination";
import SingleVideo from "./SingleVideo";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/ContextApi";

const AllVideos: React.FC = () => {
  const { state, setState } = useContext(DataContext);
  const [page, setPage] = useState<number>(0);

  const fetchData = async (page: number) => {
    try {
      const response = await axios.get(
        `https://internship-service.onrender.com/videos?page=${page}`
      );
      const newData = response.data.data.posts;

      // Store data in local storage
      localStorage.setItem("AllPosts", JSON.stringify(newData));

      // Update state with new data
      setState((prevState) => ({ ...prevState, allPosts: newData }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    // Check if data is already in local storage

    const storedData = localStorage.getItem("AllPosts");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setState((prevState) => ({ ...prevState, allPosts: parsedData }));
    } else {
      // Fetch data from server if not found in local storage
      fetchData(page);
    }
  }, [setState]);
  useEffect(() => {
    fetchData(page);
  }, [page]);
  return (
    <div key="allVideos">
      <div
        key="container"
        className="w-[90%] pt-[20px]  mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center items-center align-middle"
      >
        {/* Message for empty list */}
        {!state.allPosts.length && (
          <div className=" h-[400px] mt-[50px] ">
            <h1 className="text-white text-center font-primary text-[50px]">
              Empty page
            </h1>
          </div>
        )}

        {/* Render videos */}
        {state.allPosts.map((ele: any) => (
          <SingleVideo key={ele.id} data={ele} />
        ))}
      </div>
      <br />
      <Pagination current={page} setPage={setPage} />
    </div>
  );
};

export default AllVideos;
