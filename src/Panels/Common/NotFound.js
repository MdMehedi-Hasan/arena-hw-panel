import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from './Assets/4043.png'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='h-screen flex items-center justify-center bg-gray-200'>
            <div className='flex flex-col items-center justify-evenly w-10/12 bg-white h-4/5 rounded-3xl'>
                <img src={image} alt="" width="30%"/>
                {/* <p className='text-6xl font-bold font-mono'>404</p> */}
                <p className='text-4xl font-semibold font-mono text-center'>PAGE NOT FOUND</p>
                <p className='text-2xl font-semibold text-red-600 text-center'>Your Request To The Page Doesn't Match Any Result!</p>
                <button className='btn btn-success rounded-full text-white px-10' onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );
};

export default NotFound;