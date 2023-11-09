import { Label, Select, TextInput, Textarea } from "flowbite-react";
import {  useEffect, useState } from "react";

import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const UpdateBlog = () => {
  const [categories, setCategories] = useState([]);
  const [blog, setBlog] = useState(null);
//   const params = useLoaderData()
//   console.log(params);
const {id} = useParams();


  useEffect(() => {
    fetch("http://localhost:5000/blog/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/blogDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);
  

  if (blog === null) {
    return (
      <div className="max-w-4xl mx-auto">
        <Skeleton variant="rectangular" width={910} height={900} />;
      </div>
    );
  }

  if (Object.keys(blog).length === 0) {
    return <div>Blog not found or an error occurred.</div>;
  }


  const {
    _id,
    title,
    image,
    category,
    short_description,
    long_description} = blog
   

    console.log('ID: ',id);
    console.log('_id: ,',_id);

  const handleUpdateBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const category = form.category.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;

    const newBlog = {
      title,
      category,
      image,
      short_description,
      long_description,
    };
    
   
    // console.log(newBlog);

    fetch(`http://localhost:5000/blogDetails/${_id}`,{
        method: 'PUT',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(newBlog)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
          Swal.fire("Blog Updated Successfully", "Thanks for contributing", "success");
        }
      })
  };

  const options = (
    <>
      {categories.map((category, idx) => (
        <option key={idx}>{category}</option>
      ))}
    </>
  );

  return (
    <div className={`py-4 lg:py-10`}>
      <h1 className="text-center my-8 text-3xl lg:text-5xl font-bold text-info ">
        Update Your Blog
      </h1>
      <form
        className="max-w-6xl mx-auto mb-10 flex flex-col gap-10 px-4 lg:p-10"
        onSubmit={handleUpdateBlog}
      >
        <div className="flex justify-between items-center gap-16">
          <div className="w-full">
            <div className="mb-2 block w-full">
              <Label htmlFor="input-info" color="info" value="Title" />
            </div>
            <TextInput defaultValue={title}
              name="title"
              id="input-info"
              placeholder="Input Info"
              required
              color="info"
            />
          </div>

          <div className="w-full">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="input-info"
                color="info"
                value="Image URL of Blog"
              />
            </div>
            <TextInput defaultValue={image}
              name="image"
              id="input-info"
              placeholder="Input Info"
              required
              color="info"
            />
          </div>
        </div>

        {/* category and short description=========== */}
        <div className="flex justify-between items-center gap-10">
          <div className="w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select your country" />
            </div>
            <Select name="category" id="countries" color="info" required>
              <option disabled defaultValue={category}>
                Pick category
              </option>
              {options}
            </Select>
          </div>

          
        </div>

        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Short Description" />
          </div>
          <Textarea defaultValue={short_description}
            id="comment"
            name="short_description"
            placeholder="Short Description of your blog"
            color="info"
            required
            rows={3}
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Long Description" />
          </div>
          <Textarea
            id="comment" defaultValue={long_description}
            name="long_description"
            placeholder="Long Description of your blog"
            color="info"
            required
            rows={6}
          />
        </div>

        <button
          type="submit"
          className="btn btn-wide bg-info hover:bg-info text-white mx-auto normal-case text-lg border-0"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
