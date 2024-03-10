import { useContext } from "react";
import { DataContext } from "../Context/ContextApi";

const Pagination: React.FC<any> = ({ current, setPage }) => {
  const { state, setState } = useContext(DataContext);

  const onclickIncrement = () => {
    // console.log(state.allPosts);
    if (state.allPosts.length == 0) {
      return;
    }
    setPage((prev: number) => prev + 1);
  };
  const onclickDecrement = () => {
    if (current > 0 && state.allPosts.length != 0) {
      setPage((prev: number) => prev - 1);
    }
  };
  return (
    <div className="max-w-[280px] h-[60px] mx-auto flex flex-row align-middle items-center justify-evenly text-white ">
      <button
        className="p-2 bg-slate-500 font-primary text-[18px] rounded-xl"
        onClick={() => onclickDecrement()}
      >
        {"< "}prev
      </button>
      <h2 className="font-primary text-[28px] text-white"> {current} </h2>
      <button
        className="p-2 bg-slate-500 font-primary text-[18px] rounded-xl"
        onClick={() => onclickIncrement()}
      >
        next {">"}
      </button>
    </div>
  );
};

export default Pagination;
