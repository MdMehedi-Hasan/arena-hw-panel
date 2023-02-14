import React from 'react';

const Assignments = () => {
    return (
        <div className='container pl-10 pt-10'>
            <div className='grid grid-cols-3 gap-x-10'>
                <div className='bg-[#efefef30] rounded-2xl p-5'>
                    <div className='bg-white rounded-3xl m-3 p-5 profile-content relative'>
                            <h1 className='text-xl text-center absolute -top-5 bg-gradient-to-r from-sky-500 to-indigo-400 text-white rounded-full px-5 py-2'>Assisgnment Status</h1>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Batch Name</span>
                            </label>
                            <select defaultValue="Pick one" className="select select-bordered">
                                <option disabled={true} value="Pick one">Pick one</option>
                                <option>AWS-45</option>
                                <option>AWS-44</option>
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
                                <option disabled selected>Pick one</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </div>
                        <div className='flex gap-3'>
                            <label className="label justify-start">
                                <span className="label-text">All:</span>
                                <input type="radio" name="radio-10" className="radio radio-primary cursor-pointer ml-2" />
                            </label>
                            <label className="label justify-start">
                                <span className="label-text">Reviewing:</span>
                                <input type="radio" name="radio-10" className="radio radio-primary cursor-pointer ml-2" />
                            </label>
                            <label className="label justify-start">
                                <span className="label-text">Approved:</span>
                                <input type="radio" name="radio-10" className="radio radio-primary cursor-pointer ml-2" />
                            </label>
                            <label className="label justify-start">
                                <span className="label-text">Declined:</span>
                                <input type="radio" name="radio-10" className="radio radio-primary cursor-pointer ml-2" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='bg-[#efefef30] rounded-2xl p-5'>
                    <div className='bg-white rounded-3xl m-3 p-5 profile-content relative'>
                    <h1 className='text-xl text-center absolute -top-5 bg-gradient-to-r from-sky-500 to-indigo-400 text-white rounded-full px-5 py-2'>Student Report</h1>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Batch Name</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>AWS-45</option>
                                <option>AWS-44</option>
                                <option>AWS-43</option>
                                <option>AWS-42</option>
                                <option>AWS-41</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Student Name</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>lal mia</option>
                                <option>Kala chan</option>
                                <option>Hero alam</option>
                                <option>Bomkesh</option>
                                <option>kaiser</option>
                            </select>
                        </div>
                        <div>
                            <button type="" className='btn btn-accent rounded-full mt-3 text-white'>Attendance</button>
                            <button type="" className='btn btn-accent rounded-full mt-3 text-white'>Assignment</button>
                            <button type="" className='btn btn-accent rounded-full mt-3 text-white'>Assesment</button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#efefef30] rounded-2xl p-5'>
                    <div className='bg-white rounded-3xl m-3 p-5 profile-content relative'>
                    <h1 className='text-xl text-center absolute -top-5 bg-gradient-to-r from-sky-500 to-indigo-400 text-white rounded-full px-5 py-2'>Create Assignment</h1>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Batch Name</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>AWS-45</option>
                                <option>AWS-44</option>
                                <option>AWS-43</option>
                                <option>AWS-42</option>
                                <option>AWS-41</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Assignment Topic</span>
                            </label>
                            <input type="" name="" value="" className='input input-bordered'/>
                        </div>
                        <button type="" className='btn btn-accent rounded-full mt-3 text-white'>Create Assignment</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto mt-10">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
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

export default Assignments;