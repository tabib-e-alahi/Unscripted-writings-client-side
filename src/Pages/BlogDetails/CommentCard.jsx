import PropTypes from "prop-types";

const CommentCard = ({comment}) => {
    const {user_name,profile_picture} = comment
  return (
    <div>
      <div className="flex justify-center relative top-1/3">
        <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
          <div className="relative flex gap-4">
            <img
              src={profile_picture}
              className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
              alt=""
              loading="lazy"
            />
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <p className="relative text-xl font-bold whitespace-nowrap truncate overflow-hidden">
                  {user_name}
                </p>
                <a className="text-gray-500 text-xl" href="#">
                  <i className="fa-solid fa-trash"></i>
                </a>
              </div>
            </div>
          </div>
          <p className="-mt-4 text-gray-500">
           {comment.comment}
          </p>
        </div>
      </div>
    </div>
  );
};

CommentCard.propTypes = {
    comment:PropTypes.object
};

export default CommentCard;
