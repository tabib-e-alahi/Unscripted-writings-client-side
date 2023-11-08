"use client";
import './Nav.css'
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem';
const Nav = () => {
  const navLinks = (
    <>
      <NavLink to="/">
        <li className="lg:text-base lg:mr-10" href="#">
          Home
        </li>
      </NavLink>

      <NavLink to="/app">
        <li className="lg:text-base lg:mr-10" href="#">
        Add Blog
        </li>
      </NavLink>

      <NavLink to='/allBlogs'>
        <li className="lg:text-base lg:mr-10" href="#">
        All blogs
        </li>
      </NavLink>
      <NavLink to='/featuredList'>
        <li className="lg:text-base lg:mr-10" href="#">
        Featured Blogs
        </li>
      </NavLink>
      <NavLink to='/wishList'>
        <li className="lg:text-base lg:mr-10" href="#">
        Wishlist
        </li>
      </NavLink>
    </>
  );

  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  /* step-7.6 */
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  const dropMenu = (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <Avatar
          alt="User settings"
          img={user?.photoURL}
          rounded
        />
      }
    >
      <Dropdown.Header>
        <span className="block text-sm">{user?.displayName}</span>
        <span className="block truncate text-sm font-medium">
         {user?.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Divider></Dropdown.Divider>
      <DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>
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
        <Navbar.Collapse className="text-center z-10 custom-class">
          {navLinks}
        </Navbar.Collapse>
        {user ? (
          <div className="hidden md:flex  md:order-2 ">{dropMenu}</div>
        ) : (
          <Link to="/login">
            <Button color="gray">Login</Button>
          </Link>
        )}
      </div>
    </Navbar>
  );
};

export default Nav;
