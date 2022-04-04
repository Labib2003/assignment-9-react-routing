import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews] = useReviews();
    const firstThree = reviews.slice(0, 3);
    return (
        <div className='w-full md:w-3/4 mx-auto'>
            <div className='flex flex-col-reverse md:grid grid-cols-5 gap-20 my-10'>
                <div className='w-2/3 col-span-3 m-auto text-left'>
                    <h1 className='text-5xl font-bold mb-5'>The <span className='text-lime-600'>Grandfather</span> of all gaming mice!</h1>
                    <p className='text-xl leading-relaxed'><span className='text-lime-600 font-semibold'>The Razer Boomslang</span> was the first gaming oriented mouse released way back in 1999. Let's see how todays gamers have to say about this revolutionary product from more than two decade ago.</p>
                </div>
                <div className='col-span-2 m-auto'>
                    <img src="https://m.media-amazon.com/images/I/31Y4WCsV6DL._AC_SY450_.jpg" alt="" />
                </div>
            </div>
            <div className='my-5'>
                <p className='text-3xl font-bold my-5'>Customer reviews: {firstThree.length}</p>
                {
                    firstThree.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
            <Link
                className='text-xl text-white bg-lime-600 p-3 rounded-md hover:bg-lime-500 hover:text-black'
                to='/reviews'>See all reviews</Link>
            <p className='mt-10'></p>
        </div>
    );
};

export default Home;