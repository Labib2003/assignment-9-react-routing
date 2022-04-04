import React from 'react';

const Home = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <div className='grid grid-cols-5 gap-20 my-10'>
                <div className='w-2/3 col-span-3 m-auto text-left'>
                    <h1 className='text-5xl font-bold mb-5'>The <span className='text-lime-600'>Grandfather</span> of all gaming mice!</h1>
                    <p className='text-xl leading-relaxed'><span className='text-lime-600 font-semibold'>The Razer Boomslang</span> was the first gaming oriented mouse released way back in 1999. Let's see how todays gamers have to say about this revolutionary product from more than two dacades ago.</p>
                </div>
                <div className='col-span-2 m-auto'>
                    <img src="https://m.media-amazon.com/images/I/31Y4WCsV6DL._AC_SY450_.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;