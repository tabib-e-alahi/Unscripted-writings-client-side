import Banner from "./Banner";

import Newsletter from "./Newsletter";
import RecentBlogs from "./RecentBlogs/RecentBlogs";

const Home = () => {
  return (
    <div className="w-full bg-[#f7f8f9]">
      {/* <h1>this is Home</h1> */}
      <Banner></Banner>

      <RecentBlogs></RecentBlogs>
      <Newsletter></Newsletter>

      
    </div>
  );
};

export default Home;
