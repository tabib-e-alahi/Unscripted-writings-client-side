import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";


const AllBlogs = () => {
    const blogs = useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {
                    blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;