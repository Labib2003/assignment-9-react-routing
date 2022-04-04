import React from 'react';

const Blog = (props) => {
    const {question, answer} = props.question;
    return (
        <div className='text-left my-5'>
            <h1 className='text-3xl text-gray-800 font-semibold mb-3'>{question}</h1>
            <p className='text-xl text-gray-700 leading-relaxed'>{answer}</p>
        </div>
    );
};

export default Blog;