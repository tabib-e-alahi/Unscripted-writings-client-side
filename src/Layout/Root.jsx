// import { Button } from "flowbite-react";

import { Outlet } from "react-router-dom";
import Nav from "../SharedComponents/Nav";

const Root = () => {
  return (
    <div className="w-full">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
