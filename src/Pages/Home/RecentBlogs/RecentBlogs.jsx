import axios from "axios";
import { useEffect, useState } from "react";
import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([]);

   useEffect(() =>{
    axios.get('http://localhost:5000/blog')
    .then(res => {
        // console.log(res.data);
        setBlogs(res.data)
    })
   },[])

    // console.log(blogs);
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 ">
           {
                blogs.map(blog => <RecentBlog key={blog._id} blog={blog}></RecentBlog>)
            }
           </div>
        </div>
    );
};

export default RecentBlogs;