"use client";
import { Button, Card, Label} from "flowbite-react";
import SocialLinks from "../../SharedComponents/SocialLinks";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#f1f2f3] py-20">
      <Card className="max-w-xl mx-auto pt-8 px-6">
        <SocialLinks></SocialLinks>
        <form className="flex flex-col gap-14">
          <div className="flex flex-col gap-8">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              {/* <TextInput id="email1" name="email" type="email" placeholder="Enter your email here..." required /> */}
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
              {/* <TextInput className="" name="password" id="password1" type="password" required /> */}
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
        <Label className=""  value="New Here?" />
        <Link to='/register'>
            <button className="text-blue-700 font-bold">Register</button>
            </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
