import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import Search from "./Search";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { Skeleton } from "@mui/material";

const AllBlogs = () => {
  const data = useLoaderData();
  const [blogs, setBlogs] = useState(data);
  const { user } = useContext(AuthContext);
  console.log(user.email);
//   const loading = true

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.search.value;
    const title = name.toLowerCase();

    const filteredBlogs = data.filter((d) =>
      d.title.toLowerCase().includes(title)
    );
    setBlogs(filteredBlogs);
  };

  const handleCategoryForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const category = formData.get("category");
    console.log(category);
    const filteredBlogs = data.filter((d) => d.category === category);
    setBlogs(filteredBlogs);
  };

  return (
    <div className="">
      <h1 className="text-center text-6xl font-bold my-10">All Blogs</h1>
      <div className="flex justify-evenly items-center mb-6">
        <Search
          handleBlogSubmit={handleBlogSubmit}
          handleCategoryForm={handleCategoryForm}
        ></Search>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-full px-6 mx-auto">
          {
            blogs.map((blog) => (
                <Blog key={blog._id} blog={blog}></Blog>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
