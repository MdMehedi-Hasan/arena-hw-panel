import React from 'react';

const Assignments = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Pick the best fantasy franchise</span>
                        </label>
                        <select defaultValue="Pick one" className="select select-bordered">
                            <option disabled={true} value="Pick one">Pick one</option>
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
                    <div className='flex gap-3'>
                        <label className="label justify-start">
                            <span className="label-text">All:</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-red-500 cursor-pointer ml-2" />
                        </label>
                        <label className="label justify-start">
                            <span className="label-text">Reviewing:</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-red-500 cursor-pointer ml-2" />
                        </label>
                        <label className="label justify-start">
                            <span className="label-text">Active:</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-red-500 cursor-pointer ml-2" />
                        </label>
                        <label className="label justify-start">
                            <span className="label-text">Deactive:</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-red-500 cursor-pointer ml-2" />
                        </label>
                    </div>
                </div>
                <div>
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
                        <button type="" className='btn btn-primary rounded-full mt-3'>Attendance</button>
                        <button type="" className='btn btn-primary rounded-full mt-3 mx-3'>Assignment</button>
                        <button type="" className='btn btn-primary rounded-full mt-3'>Assesment</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto">
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