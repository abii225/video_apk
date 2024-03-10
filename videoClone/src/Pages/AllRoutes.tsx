import { Route, Routes } from "react-router-dom";
import AllVideos from "../Components/AllVideos";
import ViewPost from "../Components/ViewPost";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllVideos />}></Route>
        <Route path="/view/:id" element={<ViewPost />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
