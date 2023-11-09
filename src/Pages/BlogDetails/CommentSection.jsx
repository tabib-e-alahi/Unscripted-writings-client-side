
import PropTypes from 'prop-types';
import { useState } from 'react';
import CommentCard from './CommentCard';

const CommentSection = ({blog_id}) => {
    const [comments, setComments] = useState([])
    console.log(blog_id);
    fetch(`http://localhost:5000/comments?blog_id=${blog_id}`)
        .then((res) => res.json())
        .then((data) => {
            setComments(data)
        });
    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-semibold mb-10'>Comment Section</h1>
            <div className='grid grid-cols-1 gap-10'>
            {
                comments.map((comment,idx) => <CommentCard key={idx} comment={comment}></CommentCard>)
            }
            </div>
        </div>
    );
};

CommentSection.propTypes = {
    blog_id:PropTypes.string
};

export default CommentSection;