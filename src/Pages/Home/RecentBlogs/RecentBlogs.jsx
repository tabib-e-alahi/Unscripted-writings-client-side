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
        <div>
           <div className="max-w-4xl mx-auto grid grid-cols-2   gap-8 mb-20 ">
           {
                blogs.map(blog => <RecentBlog key={blog._id} blog={blog}></RecentBlog>)
            }
           </div>
        </div>
    );
};

export default RecentBlogs;