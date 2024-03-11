import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/ContextApi";

const PostComment = () => {
  const [value, setValue] = useState<string>("");
  const { state } = useContext(DataContext);
  const { id } = useParams();
  console.log(state);
  const [singleData, setSingleData] = useState([]);
  useEffect(() => {
    try {
      let lsData = localStorage.getItem("AllPosts");
      if (lsData) {
        const parsedData = JSON.parse(lsData);
        let singlePost = parsedData.filter((ele: { postId: string }) => {
          return ele.postId === id;
        });
        setSingleData(singlePost);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    console.log(singleData, "this is for manipulate comments");
  }, [singleData]);
  const handleSubmit = (): void => {};
  return (
    <div className=" w-[100%] max-w-[700px]   rounded-md flex flex-col md:flex-row gap-2">
      <textarea
        className="w-full rounded-md"
        name=""
        id=""
        value={value}
        cols={30}
        rows={1}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <button
        className="w-[100px] p-2 bg-orange-500 font-primary text-[18px] font-semibold text-white rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default PostComment;
