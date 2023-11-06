"use client";

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  const navLinks = (
    <>
      <NavLink to="/">
        <li  className="lg:text-base lg:mr-10" href="#">
          Home
        </li>
      </NavLink>

      <NavLink to="/app">
        <li  className="lg:text-base lg:mr-10" href="#">
          About
        </li>
      </NavLink>

      <NavLink>
        <li className="lg:text-base lg:mr-10" href="#">
          Services
        </li>
      </NavLink>
      <NavLink>
        <li className="lg:text-base lg:mr-10" href="#">
          Pricing
        </li>
      </NavLink>
      <NavLink>
        <li className="lg:text-base lg:mr-10" href="#">
          Contact
        </li>
      </NavLink>
    </>
  );

  const dropMenu = (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <Avatar
          alt="User settings"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
        />
      }
    >
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      {/* <Dropdown.Item>Dashboard</Dropdown.Item>
  <Dropdown.Item>Settings</Dropdown.Item>
  <Dropdown.Item>Earnings</Dropdown.Item> */}
      <Dropdown.Divider></Dropdown.Divider>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );

  return (
    <Navbar rounded className="flex flex-col w-full md:pt-10 mb-4 md:mb-0">
      <Navbar.Brand className="md:mx-auto md:mb-8 md:pt-6">
        <img
          src="https://i.ibb.co/fv6Sjs8/Screenshot-2023-11-06-023121-removebg-preview.png"
          className="mr-3 h-9 md:h-14"
          alt="Flowbite React Logo"
        />
        {/* <span className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white">
          Life Unscripted
        </span> */}
      </Navbar.Brand>
      <div className="flex gap-2 md:hidden">
        {dropMenu}
        <Navbar.Toggle className="" />
      </div>
      <hr className="hidden md:flex w-full h-2" />

      <div className="w-full md:flex md:justify-evenly items-center md:mt-2">
        <Navbar.Collapse  className="text-center z-10">{navLinks}</Navbar.Collapse>
         {/* <div className="hidden md:flex  md:order-2 ">{dropMenu}</div> */}
         <Link to='/login'>
         <Button color="gray">Login</Button>
         </Link>
      </div>
    </Navbar>
  );
};

export default Nav;
