import { Icon } from '@iconify/react';
import React from 'react';
import './StudentInfo.css'

const StudentInfo = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-5 p-10'>
                <div className='bg-white rounded-lg p-5'>
                    <h1 className='text-2xl text-center'>Create New Batch</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Batch Name</span>
                        </label>
                        <input type="text" placeholder="Batch Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="overflow-x-auto mt-14">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='bg-white rounded-lg p-5'>
                    <h1 className='text-2xl text-center'>Create account for user</h1>
                    <div className='flex justify-end'>
                        <div className="form-control w-full max-w-xs">
                            {/* <label className="label">
                                <span className="label-text">Search from registration panel</span>
                            </label> */}
                            {/* <div className='flex gap-3 relative'>
                                <input type="text" className="input input-bordered w-full max-w-xs rounded-full focus:shadow-none transition duration-300" /> 
                                <span className='absolute left-4 top-2.5 input-text transition duration-300 opacity-50'>Search from reg. panel</span>
                            </div> */}
                            <div class="relative flex gap-3 justify-between items-center">
                                <div className='w-full'>
                                    <input type="text" id="floating_outlined" class="input input-bordered rounded-full block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Search from reg. panel</label>
                                </div>
                                <button type="" className='border py-2 px-2 border-green-400 text-green-400 rounded-lg text-2xl p-0 m-0 h-full'><Icon icon="mdi:file-import" /></button>
                            </div>
                        </div>
                    </div>
                    {/* <h2 className='text-center'>Search User From Registration Panel</h2> */}
                    <div className='grid grid-cols-2'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Batch name</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <button type="" className='btn btn-accent mt-5'>Add</button>
                </div>
            </div>
            <div>
                <div className='mx-10'>
                    <button className='btn btn-outline btn-accent mr-5 rounded-full'>Batch List</button>
                    <button className='btn btn-outline btn-accent mb-3 rounded-full'>User List</button>
                    <hr />
                </div>
                <div className="overflow-x-auto p-5">
                    <table className="table table-zebra w-full ">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentInfo;