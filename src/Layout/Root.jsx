// import { Button } from "flowbite-react";

import { Outlet } from "react-router-dom";
import Nav from "../SharedComponents/Nav";
import FooterCom from "../Pages/Home/FooterCom";

const Root = () => {
  return (
    <div className="w-full">
      <Nav></Nav>
      <Outlet></Outlet>
      <FooterCom></FooterCom>
    </div>
  );
};

export default Root;
