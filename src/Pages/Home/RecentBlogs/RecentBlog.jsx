
import PropTypes from "prop-types";


const RecentBlog = ({ blog }) => {
  console.log(blog);
  const {
    category,
    title,
    image,
    short_description,
    posted_time,
   
  } = blog;
  
  return (
    <div className="card bg-white">
    <figure className="h-80"><img  className="h-full" src={image} alt="Shoes" /></figure>
    <div className="card-body">
    <div className="badge badge-outline">{category}</div>
      <h2 className="card-title font-bold">
        {title}
        
      </h2>
      <p className="text-ellipsis text-xs text-justify overflow-hidden  ">{short_description}</p>
      <div className="card-actions justify-between">
        <p className="font-semibold">{posted_time}</p>
        <button className="tooltip" data-tip="See Details"><img className="w-6 " src="https://i.ibb.co/2SbZM8h/menu.png" alt="" /></button>
        <button className="tooltip" data-tip="Add to Wishlist"><img className="w-6 " src="https://i.ibb.co/KsL1pzQ/wishlist.png" alt="" /></button>
      </div>
    </div>
  </div>
  );
};

RecentBlog.propTypes = {
  blog: PropTypes.object,
};

export default RecentBlog;
