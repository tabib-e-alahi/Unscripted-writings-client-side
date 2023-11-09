import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const RecentBlog = ({ blog }) => {
  const {user} = useContext(AuthContext)
  // console.log(blog);
  const { category, title, image, short_description, posted_time } = blog;

  const handleWishlistAdd = () =>{
   
     if(!user){
      return  Swal.fire({
        title: "You've to login first",
        text: "Go to the login w",
        icon: "error"
      });
     }
    delete blog._id;
    blog['user_email'] = user.email
    console.log(blog);
    fetch('http://localhost:5000/wishlist',{
      method: 'POST', 
      headers: {
          'content-type': 'application/json'
      }, 
      body: JSON.stringify(blog)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          title: "Item Added To  Wishlist",
          text: "You can see from wishlist anytime",
          icon: "success"
        });
      }
    })
 
  }

  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="relative card bg-white">
        <figure className="h-80">
          <img className="w-full h-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="absolute top-4 left-2 text-white font-bold p-4 badge badge-error flex-grow-0">
            {category}
          </div>
          <h2 className=" font-bold">{title}</h2>
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
    </motion.div>
  );
};

RecentBlog.propTypes = {
  blog: PropTypes.object,
};

export default RecentBlog;
