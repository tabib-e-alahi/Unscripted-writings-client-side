import { BallTriangle } from "react-loader-spinner";
// import Skeleton from 'react-loading-skeleton';



const Loader = () => {
  return (
    <BallTriangle
    height={500}
    width={500}
    radius={5}
    color="#4fa94d"
    ariaLabel="ball-triangle-loading"
    wrapperClass={{}}
    wrapperStyle=""
    visible={true}
  />
  )
};

export default Loader;
