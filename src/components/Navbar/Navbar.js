import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-lime-600 mb-5'>
            <nav className='w-full md:w-3/4 mx-auto flex justify-around text-xl text-white p-3'>
                <Link 
                className='hover:text-blue-200'
                to='/home'>Home</Link>
                <Link 
                className='hover:text-blue-200'
                to='/reviews'
                >Reviews</Link>
                <Link
                className='hover:text-blue-200'
                to='/dashboard'
                >Dashboard</Link>
                <Link 
                className='hover:text-blue-200'
                to='/blogs'>Blogs</Link>
            </nav>
        </div>
    );
};

export default Navbar;