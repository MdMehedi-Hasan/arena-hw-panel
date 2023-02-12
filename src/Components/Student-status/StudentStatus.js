import React from 'react';

const StudentStatus = () => {
    return (
        <div className='container pl-10'>
            <div className='grid grid-cols-3 mt-10 gap-x-5'>
                <div className='bg-[#efefef30] rounded-2xl p-5'>
                    <div className='flex flex-col justify-between bg-white rounded-2xl profile-content h-full p-5 relative'>
                        <div className="form-control w-full max-w-xs mt-10">
                            <h1 className='text-xl text-center absolute -top-5 bg-gradient-to-r from-sky-500 to-indigo-400 text-white rounded-full px-6 pb-1'>Login</h1>
                            <label className="label">
                                <span className="label-text">Batch Name</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Select Batch</option>
                                <option>AWS-45</option>
                                <option>AWS-44</option>
                                <option>AWS-43</option>
                                <option>AWS-42</option>
                                <option>AWS-41</option>
                            </select>
                        </div>
                        <div>
                            <button type="" className='btn btn-accent mt-5 text-white'>Check Log in status</button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#efefef30] rounded-2xl p-5'>
                    <div className='bg-white rounded-2xl p-5 profile-content h-full flex flex-col justify-between relative'>
                        <div className="form-control w-full max-w-xs">
                        <h1 className='text-xl text-center absolute -top-5 bg-gradient-to-r from-sky-500 to-indigo-400 text-white rounded-full px-5 py-1'>Inactive Student</h1> {/* Inactive/Assignment Unsibmitted */}
                            <label className="label">
                                <span className="label-text">Batch Name</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Select one</option>
                                <option>AWS-44</option>
                                <option>AWS-45</option>
                                <option>AWS-43</option>
                                <option>AWS-42</option>
                                <option>AWS-41</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Topic List</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Select one</option>
                                <option>Shell</option>
                                <option>Hunting</option>
                                <option>Something</option>
                                <option>Nothing</option>
                                <option>Anything</option>
                            </select>
                        </div>
                        <div>
                        <button type="" className='btn btn-accent mt-3 text-white'>Search Inactive Students</button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#efefef30] rounded-2xl p-5'>
                    <div className='bg-white rounded-2xl p-5 h-full profile-content relative'>
                        <h1 className='text-xl text-center absolute -top-5 bg-gradient-to-r from-sky-500 to-indigo-400 text-white rounded-full px-5 py-1'>Attendance</h1>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Batch Name</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Select one</option>
                                <option>AWS-45</option>
                                <option>AWS-44</option>
                                <option>AWS-43</option>
                                <option>AWS-42</option>
                                <option>AWS-41</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Select Date</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Select one</option>
                                <option>12-01-23</option>
                                <option>12-01-23</option>
                                <option>12-01-23</option>
                                <option>12-01-23</option>
                                <option>12-01-23</option>
                            </select>
                        </div>
                        <div>
                        <button type="" className='btn btn-accent mt-5 text-white'>Check Attendance</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
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
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default StudentStatus;