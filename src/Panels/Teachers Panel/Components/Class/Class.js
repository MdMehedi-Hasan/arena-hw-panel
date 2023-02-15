import React from 'react';

const Class = () => {
    return (
        <div className='container pl-10'>
            <div className='bg-white rounded-3xl m-3 p-5'>
                <h1 className='text-center text-4xl'>Start Class</h1>
            </div>
            <div className='bg-[#efefef30] rounded-2xl p-5'>
                <div className='bg-white rounded-3xl m-3 p-5 profile-content'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Batch List</span>
                        </label>
                        <select className="select select-bordered">
                            <option disabled selected></option>
                            <option>AWS-45</option>
                            <option>AWS-44</option>
                            <option>AWS-43</option>
                            <option>AWS-42</option>
                            <option>AWS-41</option>
                        </select>
                    </div>
                    <div className='mt-5'>
                        <button type="" className='btn btn-accent text-white'>Activate</button>
                        <button type="" className='btn btn-accent ml-3 text-white'>Deactivate</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto mt-10">
                    <table className="table w-full border-separate border rounded-lg">
                        <thead>
                            <tr>
                                <th>Running Batch</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Class;