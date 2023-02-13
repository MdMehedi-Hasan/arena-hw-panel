import { Icon } from '@iconify/react';
import React from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import profile from '../../../Common/Assets/female.png'

const IndividualStudent = () => {
    const test = 'test'
    let location = useLocation();
    const {userId} = useParams();
    return (
        <div className='container mb-10'>
            <div className='grid grid-cols-2 profile-card mt-16'>
                <div className='bg-[#efefef30] rounded-2xl p-10'>
                    <div className=' rounded-2xl bg-white profile-content'>
                        <div className='flex flex-col justify-center items-center pt-20'>
                            <div className="avatar placeholder mb-3">
                                <div className="bg-white text-black rounded-full w-24 ring ring-accent ring-offset-base-100 ring-offset-2">
                                    <img src={profile} alt="profile" />
                                </div>
                            </div>
                            <h1>Sahriar hoque sumon</h1>
                            <h2>sahriarhoque@gmail.com</h2>
                        </div>
                        <div className=''>
                            <div className=' '>
                                <ul className='pl-5 py-12 mt-10 border-t-4'>
                                    <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Full Name:</div> <div className='w-7/12'>Md. Mehedi Hasan</div></div></li>
                                    <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Teacher id:</div> <div className='w-7/12'>25</div></div></li>
                                    <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Gender:</div> <div className='w-7/12'>Male</div></div></li>
                                    <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Phone Number:</div> <div className='w-7/12'>+880132502554</div></div></li>
                                    <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Fb id:</div> <div className='w-7/12'>htps://something.com</div></div></li>
                                    <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Assigned by:</div> <div className='w-7/12'>Sahriar Ifti</div></div></li>
                                    <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Responsible for:</div> <div className='w-7/12'>All batches</div></div></li>
                                    <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Joined:</div> <div className='w-7/12'>15 january 2023</div></div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#efefef30] rounded-2xl p-10'>
                    <div className='grid grid-cols-3 w-full h-full gap-5 justify-center'> {/* content-between */}
                        <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-blue-300 to-blue-400 profile-content text-white'>
                            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                                <Link to="/student-info/student-list"><h1 className='text-sm hover:underline'>Total Students</h1></Link>
                                <Icon icon="fluent:people-community-16-filled" className='text-xl' />
                            </div>
                            <div className='mt-7'>
                                <div className='text-xl font-bold p-5'>
                                    <p>250</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-cyan-300 to-blue-400 profile-content text-white'>
                            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                                <h1 className='text-sm'>Running Students</h1>
                                <Icon icon="mingcute:classify-fill" className='text-xl' />
                            </div>
                            <div className='mt-7'>
                                <div className='text-xl font-bold p-5'>
                                    <p>44</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-green-300 to-green-400 profile-content text-white'>
                            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                                <h1 className='text-sm'>Passed Students</h1>
                                <Icon icon="ic:round-assignment" className='text-xl' />
                            </div>
                            <div className='mt-7'>
                                <div className='text-xl font-bold p-5'>
                                    <p>32</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-blue-300 to-blue-400 profile-content text-white'>
                            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                                <Link to='/student-info'><h1 className='text-sm hover:underline'>Total Batch</h1></Link>
                                <Icon icon="mdi:assignment-late" className='text-xl' />
                            </div>
                            <div className='mt-7'>
                                <div className='text-xl font-bold p-5'>
                                    <p>05</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-cyan-300 to-blue-400 profile-content text-white'>
                            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                                <h1 className='text-sm'>Running Batch</h1>
                                <Icon icon="mdi:assignment-late" className='text-xl' />
                            </div>
                            <div className='mt-7'>
                                <div className='text-xl font-bold p-5'>
                                    <p>05</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-green-300 to-green-400 profile-content text-white'>
                            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                                <h1 className='text-sm'>Completed Batch</h1>
                                <Icon icon="mdi:assignment-late" className='text-xl' />
                            </div>
                            <div className='mt-7'>
                                <div className='text-xl font-bold p-5'>
                                    <p>05</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-blue-300 to-blue-400 profile-content text-white'>
                            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                                <Link to='/assignments'><h1 className='text-sm hover:underline'>All Assignments</h1></Link>
                                <Icon icon="mdi:assignment-late" className='text-xl' />
                            </div>
                            <div className='mt-7'>
                                <div className='text-xl font-bold p-5'>
                                    <p>05</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-cyan-300 to-blue-400 profile-content text-white'>
                            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                                <h1 className='text-sm'>Pending</h1>
                                <Icon icon="mdi:assignment-late" className='text-xl' />
                            </div>
                            <div className='mt-7'>
                                <div className='text-xl font-bold p-5'>
                                    <p>05</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-green-300 to-green-400 profile-content text-white'>
                            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                                <h1 className='text-sm'>Approved</h1>
                                <Icon icon="mdi:assignment-late" className='text-xl' />
                            </div>
                            <div className='mt-7'>
                                <div className='text-xl font-bold p-5'>
                                    <p>05</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container pl-10'>
                <div className='flex justify-center'>
                    <div className='inline-flex mb-10 mt-10 border bg-gradient-to-r from-sky-400 to-indigo-400 rounded-lg overflow-hidden p-1 text-md font-semibold'>
                        <Link to={`/student-info/student-list/${userId}`}><p className={`px-5 py-2 ${location.pathname.includes('/assignment') ? 'bg-transparent text-white' : location.pathname.includes('/assesment') ? 'bg-transparent text-white' : location.pathname.includes('/supports') ? 'bg-transparent text-white' : 'bg-white text-black rounded-lg'}`}>Attendance</p></Link>
                        <Link to={`/student-info/student-list/${userId}/assignment`}><p className={`px-5 py-2 ${location.pathname.includes('/assignment') ? 'bg-white text-black rounded-lg' : 'bg-transparent text-white'}`}>Assignment</p></Link>
                        <Link to={`/student-info/student-list/${userId}/assesment`}><p className={`px-5 py-2 ${location.pathname.includes('/assesment') ? 'bg-white text-black rounded-lg' : 'bg-transparent text-white'}`}>Assesment</p></Link>
                        <Link to={`/student-info/student-list/${userId}/supports`}><p className={`px-5 py-2 ${location.pathname.includes('/supports') ? 'bg-white text-black rounded-lg' : 'bg-transparent text-white'}`}>Support</p></Link>
                    </div>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default IndividualStudent;