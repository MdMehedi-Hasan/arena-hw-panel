import React from 'react';

const Class = () => {
    return (
        <div>
            <div className='bg-white rounded-3xl m-3 p-5'>
                <h1 className='text-center text-4xl'>Start Class</h1>
            </div>
            <div className='bg-white rounded-3xl m-3 p-5'>
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
                <div className='mt-5'>
                    <button type="" className='btn btn-accent'>Activate</button>
                    <button type="" className='btn btn-accent ml-3'>Deactivate</button>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto mx-5 mt-5">
                    <table className="table w-full">
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

export default Class;