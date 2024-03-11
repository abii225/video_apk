const PostComment = () => {


  
  return (
    <div className=" w-[100%] max-w-[500px]   rounded-md">
      <textarea
        className="w-full rounded-md"
        name=""
        id=""
        cols={30}
        rows={1}
      ></textarea>
      <button className="w-[100px] p-2 bg-orange-500 font-primary text-[18px] font-semibold text-white rounded-md">
        Submit
      </button>
    </div>
  );
};

export default PostComment;
