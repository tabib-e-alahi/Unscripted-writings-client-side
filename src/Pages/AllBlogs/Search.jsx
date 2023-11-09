import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Search = ({handleCategoryForm,handleBlogSubmit}) => {
    const [categories, setCategories] = useState([])
    
    
    useEffect(() =>{
        fetch('http://localhost:5000/blog/category')
        .then(res =>res.json())
        .then(data => setCategories(data))
    },[])


  const options = (
    <>
    <option>All Categories</option>
      {
        categories.map((category,idx) => <option key={idx}>{category}</option>)
      }
    </>
  );

  // const handleBlogSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;

  //   console.log(name);
  // };

  // const handleCategoryForm = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const category = formData.get("category");
  //   console.log(category);
  // };

  return (
    <div className="flex gap-4 items-center">
      <form className="flex" onSubmit={(e) =>handleCategoryForm(e)}>
        <div className="form-control">
          <div className="input-group">
            <select name="category" className="select select-bordered">
              <option disabled defaultValue={"Pick category"}>
                Pick category
              </option>
              {options}
            </select>
            <button className="btn">filter</button>
          </div>
        </div>
      </form>
      <h1 className="font-bold text-lg"> OR</h1>
      <form onSubmit={(e) =>handleBlogSubmit(e)}>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              name="search"
              placeholder="Search by Title"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
Search.propTypes = {
  handleCategoryForm:PropTypes.func,
  handleBlogSubmit:PropTypes.func,
};