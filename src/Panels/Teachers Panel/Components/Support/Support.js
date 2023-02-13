import React from 'react';

const Support = () => {
    return (
        <div className='container pl-10 mt-10'>
            <div className='bg-[#efefef30] rounded-2xl p-5'>
                <div className="form-control w-full profile-content rounded-2xl p-5">
                    <label className="label">
                        <span className="label-text">Batch List</span>
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
            </div>
            <div>
                <div className="overflow-x-auto mt-10">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Topic ID</th>
                                <th>Question Title</th>
                                <th>Full Name</th>
                                <th>Batch</th>
                                <th>Update Time</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                                <td>Purple</td>
                                <td>Purple</td>
                                <td>Purple</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                                <td>Red</td>
                                <td>Red</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Support;