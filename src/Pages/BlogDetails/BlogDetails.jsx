import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
 
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  // console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/blogDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (blog === null) {
    // While data is being fetched, you can display a loading indicator
    return <div className="max-w-4xl mx-auto">
        <Skeleton  variant="rectangular" width={910} height={900} />;
    </div>
  }

  if (Object.keys(blog).length === 0) {
    // If the blog data is empty (indicating an error or missing data), you can display an error message or a fallback UI
    return <div>Blog not found or an error occurred.</div>;
  }

  console.log(blog);
  const {
    _id,
    category,
    title,
    image,
    short_description,
    posted_time,
    long_description,
    author_info,
  } = blog;
  const paragraphs = long_description.split('.');

  const {author_name, author_picture, author_email,authon_designation} = author_info

  return (
    <div className=" max-w-7xl mx-auto pt-10  grid grid-cols-3">
      <main className="col-span-2 pt-8 pb-16 lg:pt-0 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src={author_picture}
                    alt={author_name}
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {author_name}
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">{authon_designation}</p>
                    <p className="text-base text-gray-500 dark:text-gray-400"><time  dateTime={posted_time} title={posted_time}>{posted_time}</time></p>
                  </div>
                </div>
              </address>
              <h1 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {title}
              </h1>
            </header>
            <p className="lead mb-10">
             {short_description}
            </p>
            
            <figure className="h-96 rounded-md overflow-hidden">
              <img className="h-full w-full"
                src={image}
                alt=""
              />
            </figure>
            
            <div className="mt-4">
              {
              paragraphs.map((para,idx) => <p key={idx} className="mb-2">{para}</p>)
              }
            </div>
            
          </article>
        </div>
      </main>
      <div>
        <h1>Commment section</h1>
      </div>
    </div>
  );
};

export default BlogDetails;
