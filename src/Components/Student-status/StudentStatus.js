import React from 'react';

const StudentStatus = () => {
    return (
        <div className='container pl-10'>
            <div className='grid grid-cols-3 mt-10 gap-x-5'>
                <div className='bg-[#efefef30] rounded-2xl p-5'>
                    <div className='flex flex-col justify-between bg-white rounded-2xl profile-content h-full p-5'>
                        <div className="form-control w-full max-w-xs">
                            <h1>Login</h1>
                            <label className="label">
                                <span className="label-text">Pick the best fantasy franchise</span>
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
                        <div>
                            <button type="" className='btn btn-accent mt-5'>Check Log in status</button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#efefef30] rounded-2xl p-5'>
                    <div className='bg-white rounded-3xl p-5 profile-content h-full flex flex-col justify-between'>
                        <div className="form-control w-full max-w-xs">
                        <h1>Inactive/Assignment Unsibmitted</h1>
                            <label className="label">
                                <span className="label-text">Pick the best fantasy franchise</span>
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
                                <span className="label-text">Pick the best fantasy franchise</span>
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
                        <div>
                        <button type="" className='btn btn-accent mt-3'>Check Log in status</button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#efefef30] rounded-2xl p-5'>
                    <div className='bg-white rounded-3xl p-5 h-full profile-content'>
                        <h1>Atendance</h1>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Pick the best fantasy franchise</span>
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
                                <span className="label-text">Pick the best fantasy franchise</span>
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
                        <div>
                        <button type="" className='btn btn-accent mt-5'>Check Log in status</button>
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