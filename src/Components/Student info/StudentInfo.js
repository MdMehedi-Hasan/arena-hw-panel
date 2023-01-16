import React from 'react';

const StudentInfo = () => {
    return (
        <div>
        <div className='grid grid-cols-2 gap-5 p-10'>
            <div className='bg-white rounded-lg p-5'>
                <h1>Create New Batch</h1>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Batch Name</span>
                    </label>
                    <input type="text" placeholder="Batch Name" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
            <div className='bg-white rounded-lg p-5'>
                <h1>Create account for user</h1>
                <h2 className='text-center'>Search User From Registration Panel</h2>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <button type="" className='btn btn-primary'>Import User</button>
                </div>
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
                <button type="" className='btn btn-primary mt-5'>Add</button>
            </div>
        </div>
        <div>
                <div className='mx-10'>
                    <button className='btn btn-outline btn-primary mr-5 rounded-full'>Batch List</button>
                    <button className='btn btn-outline btn-primary mb-3 rounded-full'>User List</button>
                    <hr/>
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