import { useLoaderData } from "react-router-dom";


const AllBlogs = () => {
    const blogs = useLoaderData();

    return (
        <div>
            <div>
                {
                    blogs.map()
                }
            </div>
        </div>
    );
};

export default AllBlogs;