import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const AllReviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='text-5xl font-semibold my-5'>Total reviews: <span className='text-lime-600'>{reviews.length}</span></h1>
            {
                reviews.map(review => <Review 
                key={review.id} 
                review={review}
                ></Review>)
            }
        </div>
    );
};

export default AllReviews;