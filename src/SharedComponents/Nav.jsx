"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
const Nav = () => {
  const navLinks = (
    <>
      <Navbar.Link className="lg:text-base lg:mr-10" href="#">
        Home
      </Navbar.Link>
      <Navbar.Link className="lg:text-base lg:mr-10" href="#">
        About
      </Navbar.Link>
      <Navbar.Link className="lg:text-base lg:mr-10" href="#">
        Services
      </Navbar.Link>
      <Navbar.Link className="lg:text-base lg:mr-10" href="#">
        Pricing
      </Navbar.Link>
      <Navbar.Link className="lg:text-base lg:mr-10" href="#">
        Contact
      </Navbar.Link>
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
    <Navbar rounded className="flex flex-col w-full md:pt-10">
      <Navbar.Brand className="md:mx-auto md:mb-8 md:pt-6">
        <img
          src="https://i.ibb.co/fv6Sjs8/Screenshot-2023-11-06-023121-removebg-preview.png"
          className="mr-3  sm:h-9 md:h-14"
          alt="Flowbite React Logo"
        />
        {/* <span className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white">
          Life Unscripted
        </span> */}
      </Navbar.Brand>
      <div className="flex md:hidden">
      {dropMenu}
      <Navbar.Toggle />
      </div>
      <hr className="hidden md:flex w-full h-2" />

      <div className="w-full md:flex md:justify-evenly md:mb-10 md:mt-2">
        <div className="hidden md:flex  md:order-2 ">
            {dropMenu}
          {/* <Navbar.Toggle className="hidden md:flex" /> */}
        </div>

        <Navbar.Collapse className="">{navLinks}</Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Nav;
