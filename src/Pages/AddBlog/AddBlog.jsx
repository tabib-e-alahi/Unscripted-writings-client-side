import { format } from "date-fns";
import { Label, Select, TextInput, Textarea } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddBlog = () => {
  const [categories, setCategories] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(user);
  const { email, displayName, photoURL } = user;

  useEffect(() => {
    fetch("http://localhost:5000/blog/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleAddBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const category = form.category.value;
    const author_designation = form.author_designation.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const currentTime = new Date();

    const author_info = {
      author_email: email,
      author_name: displayName,
      author_picture: photoURL,
      author_designation,
    };

    // Convert the current time to the desired format
    const posted_time = format(currentTime, "EEE LLL dd yyyy hh:mma");

    const newBlog = {
      title,
      category,
      image,
      short_description,
      long_description,
      posted_time,
      author_info
    };
    // console.log(newBlog);

    fetch("http://localhost:5000/blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Blog Added Successful",
            text: "Thanks for your contribution",
            icon: "success",
          });
        }
      });


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
        Add Your Blog
      </h1>
      <form
        className="max-w-6xl mx-auto mb-10 flex flex-col gap-10 px-4 lg:p-10"
        onSubmit={handleAddBlog}
      >
        <div className="flex justify-between items-center gap-16">
          <div className="w-full">
            <div className="mb-2 block w-full">
              <Label htmlFor="input-info" color="info" value="Title" />
            </div>
            <TextInput
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
            <TextInput
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
              <option disabled defaultValue={"Pick category"}>
                Pick category
              </option>
              {options}
            </Select>
          </div>

          <div className="w-full">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="input-info"
                color="info"
                value="Author Designation"
              />
            </div>
            <TextInput
              name="author_designation"
              id="input-info"
              placeholder="Author Designation"
              required
              color="info"
            />
          </div>
        </div>

        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Short Description" />
          </div>
          <Textarea
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
            id="comment"
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
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
