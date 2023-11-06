"use client";
import { Button, Card, Label } from "flowbite-react";
import SocialLinks from "../../SharedComponents/SocialLinks";
import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const profileUrl = form.profileUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        const newUser = {
            name,profileUrl,email,password
        } 

        console.log(newUser);

    }


  return (
    <div className="bg-[#f1f2f3] py-20">
      <Card className="max-w-xl mx-auto pt-8 px-6">
        <SocialLinks></SocialLinks>
        <form className="flex flex-col gap-14" onSubmit={handleRegister}>
          <div className="flex flex-col gap-8">
            {/* name--------------------------------- */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your Name" />
              </div>
              <input
                type="text"
                name="name"
                className="rounded-l-full rounded-r-full w-full border border-gray-300"
                placeholder="Enter your name here..."
                required
              />
            </div>

            {/* profile picture--------------------------------- */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your Name" />
              </div>
              <input
                type="url"
                name="profileUrl"
                className="rounded-l-full rounded-r-full w-full border border-gray-300"
                placeholder="Enter  URL here..."
                required
              />
            </div>

            

            {/* email------------------------------------------ */}
            <div>
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

            {/* password------------------------- */}
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
          <Label className="" value="Already have an account?" />
          <Link to='/login'>
            <button className="text-blue-700 font-bold">Login</button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Register;
