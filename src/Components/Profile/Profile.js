import { Icon } from '@iconify/react';
import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div className='grid grid-cols-2 gap-16 mx-10 mt-16 relative'>
            <div className='rounded-2xl bg-[linear-gradient(90deg,#56b5e3,#7d58a5);]'>
                {/* <div className='cstm'>
                </div> */}
                <div className='flex justify-center absolute left-[22%] top-[10%] z-10'>{/* left-[21%] top-[10%] */} {/* mt-20 ml-24 */}
                    <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                            <span className="text-3xl">K</span>
                        </div>
                    </div>
                </div>
                <div className='cstm'>
                <div className='flex justify-around relative z-10 pt-16 pb-36 mt-28'>
                    <ul>
                        <li className='flex gap-3'><span>Full Name:</span> <span className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></span> </li>
                        <li className='flex gap-3'><span>Full Name:</span> <span className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></span> </li>
                        <li className='flex gap-3'><span>Full Name:</span> <span className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></span> </li>
                        <li className='flex gap-3'><span>Full Name:</span> <span className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></span> </li>
                        <li className='flex gap-3'><span>Full Name:</span> <span className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></span> </li>
                        <li className='flex gap-3'><span>Full Name:</span> <span className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></span> </li>
                        <li className='flex gap-3'><span>Full Name:</span> <span className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></span> </li>
                        <li className='flex gap-3'><span>Full Name:</span> <span className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></span> </li>
                        <li className='flex gap-3'><span>Full Name:</span> <span className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></span> </li>
                        <li className='flex gap-3'><span>Full Name:</span> <span className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></span> </li>
                        <li className='flex gap-3'><span>Full Name:</span> <span className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></span> </li>
                        <li className='flex gap-3'><span>Full Name:</span> <span className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></span> </li>
                        <li className='flex gap-3'><span>Full Name:</span> <span className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></span> </li>
                        
                    </ul>
                    {/* <ul className='flex flex-col gap-3'>
                        <li className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></li>
                        <li className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></li>
                        <li className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></li>
                        <li className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></li>
                        <li className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></li>
                        <li className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></li>
                        <li className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></li>
                        <li className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></li>
                        <li className='flex items-center'>Something jhdjhfs <Icon className='ml-2' icon="material-symbols:edit" /></li>
                    </ul> */}
                </div>
                </div>
            </div>
            <div className='bg-white rounded'>
                Charts
            </div>
            {/* <div className='bg-white rounded'>
                Notice Board
            </div> */}
        </div>
    );
};

export default Profile;