"use client";
import { Button, Card, Label } from "flowbite-react";
import SocialLinks from "../../SharedComponents/SocialLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loggedIn } = useContext(AuthContext);
  const [signInError, setSignInError] = useState("");
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setSignInError("");
    loggedIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Login Successful",
          text: "Now Enjoy Yourself",
          icon: "success"
        });
        navigate(location?.state ? location?.state  : '/')
      })
      .catch((error) => {console.error(error)
        setSignInError(
          "Wrong Email or password. Please recheck your information."
        );});
  };

  return (
    <div className="bg-[#f1f2f3] py-20">
      <Card className="max-w-xl mx-auto pt-8 px-6">
        <SocialLinks></SocialLinks>
        <form className="flex flex-col gap-14" onSubmit={handleLogin}>
        
          <div className="flex flex-col gap-8">
            <div>
            {signInError && (
                <label className="label">
                  <span className="label-text text-red-400">{signInError}</span>
                </label>
              )}
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
          
              <input
                type="email"
                name="email"
                className="rounded-l-full rounded-r-full w-full border border-gray-300"
                placeholder="Enter your email here..."
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              
              <input
                type="password"
                name="password"
                className="rounded-l-full rounded-r-full w-full border border-gray-300"
                placeholder="Enter your password here..."
                required
              />
            </div>
          </div>
          <Button type="submit">Login</Button>
        </form>
        <div className="flex items-center justify-center gap-1 text-center mt-4">
          <Label className="" value="New Here?" />
          <Link to="/register">
            <button className="text-blue-700 font-bold">Register</button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
