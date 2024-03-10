import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      key="navbar"
      className="w-[90%] mx-auto bg-black h-[80px] flex flex-row items-center"
    >
      <div className="h-[80%]  align-center">
        <img
          className="h-[100%] cursor-pointer"
          src="https://i.ibb.co/Q70Pn7w/logo.png"
          alt=""
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default Navbar;
