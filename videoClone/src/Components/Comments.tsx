const Comments = () => {
  return (
    <div className="p-2  flex flex-col md:flex-row gap-3 items-center bg-orange-500 rounded-md">
      <div>
        <img
          className="w-[50px] h-[50px] object-cover rounded-full"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
          alt=""
        />
      </div>
      <h3 className="text-white font-primary text-[18px]">
        lorem ipsum lorem ipsum lorem ipsum
      </h3>
    </div>
  );
};

export default Comments;
