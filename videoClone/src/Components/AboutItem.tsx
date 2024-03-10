import PostProfile from "./PostProfile";
import PostDetails from "./PostDetails";

const AboutItem: React.FC<any> = ({ data }) => {
  return (
    <>
      <div
        key="about"
        className="w-full h-[170px]  flex flex-col gap-3 pt-[10px]"
      >
        <PostProfile data={data} />
        <PostDetails data={data} />
      </div>
    </>
  );
};

export default AboutItem;
