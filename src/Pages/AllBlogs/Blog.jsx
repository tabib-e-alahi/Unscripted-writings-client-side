

import PropTypes from 'prop-types';


const Blog = ({blog}) => {
  // console.log(blog);
    const { category, title, image, short_description, posted_time } = blog;

    const handleWishlistAdd = () =>{
     
      delete blog._id;
      console.log(typeof blog);
      fetch('http://localhost:5000/wishlist',{
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify(blog)
      })
      .then(res => res.json())
      .then(data => console.log(data))
   
    }



    return (
        <div className="relative card rounded bg-white lg:first:col-span-2  ">

        <figure className=" lg:first:h-96 h-80">
          <img className="w-full h-full" src={image} alt="Shoes" />
        </figure>

        <div className="card-body p-4 space-y-2">
          <div className="absolute top-4 left-2 text-white font-bold p-4 badge badge-error">
            {category}
          </div>

          <h2 className=" text-xl font-bold">{title}</h2>
          
          <p className=" text-xs text-justify h-20  overflow-clip">
            {short_description}
          </p>
          <div className="card-actions justify-between">
            <p className="font-semibold">{posted_time}</p>
            <button className="tooltip" data-tip="See Details">
              <img
                className="w-6 "
                src="https://i.ibb.co/2SbZM8h/menu.png"
                alt=""
              />
            </button>
            <button className="tooltip" data-tip="Add to Wishlist" onClick={handleWishlistAdd}>
              <img
                className="w-6 "
                src="https://i.ibb.co/KsL1pzQ/wishlist.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object
};

export default Blog;