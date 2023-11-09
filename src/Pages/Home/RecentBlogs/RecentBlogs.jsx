import axios from "axios";
import { useEffect, useState } from "react";
import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([]);

   useEffect(() =>{
    axios.get('http://localhost:5000/blog/recent')
    .then(res => {
        // console.log(res.data);
        setBlogs(res.data)
    })
   },[])

    // console.log(blogs);
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl text-left  mb-8 font-semibold  underline">Recent Blogs</h1>
           <div className="  grid grid-cols-3   gap-8 mb-20 ">
           {
                blogs.map(blog => <RecentBlog key={blog._id} blog={blog}></RecentBlog>)
            }
           </div>
        </div>
    );
};

export default RecentBlogs;