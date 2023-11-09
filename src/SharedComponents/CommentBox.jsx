import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const CommentBox = ({ author_email, blog_id }) => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  // http://localhost:5000/comments

  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    // console.log(comment);
    const commentData = {
      blog_id,
      user_name: user.displayName,
      profile_picture: user.photoURL,
      comment,
    };
    console.log(commentData);
    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Comment Added Successfully",
            text: "See the comment section",
            icon: "success",
          });
        }
        e.target.comment.value = ''
      });
  };

  return (
    <div>
      <label htmlFor="" className="text-2xl font-bold">
        Post a comment
      </label>
      <form onSubmit={handleComment}>
        <div className=" mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              disabled={author_email === email}
              id="comment"
              name="comment"
              rows="4"
              className={`w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 ${
                author_email === email &&
                "placeholder:text-red-600 placeholder:font-bold placeholder:text-2xl"
              }`}
              placeholder={
                author_email === email
                  ? "You can not comment on your own blog"
                  : "Write a comment..."
              }
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              disabled={author_email === email}
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post comment
            </button>
          </div>
        </div>
      </form>
      <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
        Remember, contributions to this topic should follow our{" "}
        <a
          href="#"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Community Guidelines
        </a>
        .
      </p>
    </div>
  );
};

export default CommentBox;

CommentBox.propTypes = {
  author_email: PropTypes.string,
  blog_id: PropTypes.string,
};
