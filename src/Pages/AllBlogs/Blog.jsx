
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const { category, title, image, short_description, posted_time } = blog;
    return (
        <div className="relative card bg-white">
        <figure className="h-80">
          <img className="w-full h-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="absolute top-4 left-2 text-white font-bold p-4 badge badge-error">
            {category}
          </div>
          <h2 className="card-title font-bold">{title}</h2>
          <p className="text-ellipsis text-xs text-justify overflow-hidden  ">
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
            <button className="tooltip" data-tip="Add to Wishlist">
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