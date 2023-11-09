"use client";

import { Footer } from "flowbite-react";
import { useContext } from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const FooterCom = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <Footer container className="bg-[#f1f2f3]">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="https://flowbite.com"
                src="https://i.ibb.co/fv6Sjs8/Screenshot-2023-11-06-023121-removebg-preview.png"
                alt="Flowbite Logo"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Link to="/">
                    <li className="lg:text-base lg:mr-10" href="#">
                      Home
                    </li>
                  </Link>
                  <Link to="/allBlogs">
                    <li className="lg:text-base lg:mr-10" href="#">
                      All blogs
                    </li>
                  </Link>
                  {user && (
                    <>
                      <Link to="/app">
                        <li className="lg:text-base lg:mr-10" href="#">
                          Add Blog
                        </li>
                      </Link>
                      <Link to="/featuredList">
                        <li className="lg:text-base lg:mr-10" href="#">
                          Featured Blogs
                        </li>
                      </Link>
                      <Link to="/wishList">
                        <li className="lg:text-base lg:mr-10" href="#">
                          Wishlist
                        </li>
                      </Link>
                    </>
                  )}
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterCom;
