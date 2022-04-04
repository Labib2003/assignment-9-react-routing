import React from 'react';

const Review = (props) => {
    const {img, name, rating, reviewText} = props.review;
    return (
        <div className='w-3/4 mx-auto flex justify-around border-2 border-lime-600 rounded-md p-3 mb-3'>
            <div>
                <img 
                className='w-52 rounded-full'
                src={img} 
                alt="img" />
            </div>
            <div className='text-left w-2/3 ml-5 my-auto'>
                <h1 className='text-3xl text-gray-900 font-semibold'>Rating: <span className='text-lime-600'>{rating}</span></h1>
                <p className='text-xl text-gray-800 leading-relaxed my-3'>{reviewText}</p>
                <p className='text-gray-600'>-{name}</p>
            </div>
        </div>
    );
};

export default Review;