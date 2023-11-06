import PropTypes from "prop-types";

const RecentBlog = ({ blog }) => {
  console.log(blog);
  const {category,title,image,short_description,posted_time,author_info} = blog
  const {author_name,author_picture} = author_info
  return (
    <div>
      <div className="w-full  px-4">
        <div className="  ">
          <div className="rounded overflow-hidden ">
            <img
              src={image}
              alt="image"
              className="w-full"
            />
          </div>
          <div>
            <span className="text-black">
              {author_name}
            </span>
            <h3>
              <a
                href="javascript:void(0)"
                className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
              >
                {title}
              </a>
            </h3>
            <p className="text-base text-body-color">
              {short_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

RecentBlog.propTypes = {
  blog: PropTypes.object,
};

export default RecentBlog;
