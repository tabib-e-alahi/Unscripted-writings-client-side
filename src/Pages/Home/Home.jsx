import Banner from "./Banner";
import FooterCom from "./FooterCom";
import Newsletter from "./Newsletter";
import RecentBlogs from "./RecentBlogs/RecentBlogs";

const Home = () => {
  return (
    <div className="w-full bg-[#f7f8f9]">
      {/* <h1>this is Home</h1> */}
      <Banner></Banner>

      <RecentBlogs></RecentBlogs>
      <Newsletter></Newsletter>

      <FooterCom></FooterCom>
    </div>
  );
};

export default Home;
