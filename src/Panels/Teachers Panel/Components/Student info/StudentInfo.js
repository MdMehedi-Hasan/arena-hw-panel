import { Icon } from '@iconify/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ApiUrl from '../../../Common/APIUrl';
import './StudentInfo.css'

const StudentInfo = () => {
    const [batches, setBatches] = useState('')
    const [batchList, setBatchList] = useState([])
    let location = useLocation();

    useEffect(() => {
        axios.get(ApiUrl.BaseUrl + 'api/batch-list/')
            .then(function (response) {
                setBatchList(response?.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const createBatch = () => {
        let batch_name = document.getElementById('batch_name').value
        axios.post(ApiUrl.BaseUrl + 'api/batch-create/', { batch_name })
            .then(function (response) {
                setBatches(batch_name)
                document.getElementById('batch_name').value = ''
            }).catch(function (error) {
                console.log(error);
            });
    }

    const createStudent = () => {
        let email = document.getElementsByName('email')[0].value
        let phone = document.getElementsByName('phone')[0].value
        let batch_id = document.getElementsByName('batchName')[0].value
        let course_info_id = '2'

        axios.post(ApiUrl.BaseUrl + 'api/create-user-student/', {
            email,
            phone,
            batch_id,
            course_info_id
        })
            .then(function (response) {
                console.log(response);
                document.getElementsByName('email')[0].value = ''
                document.getElementsByName('phone')[0].value = ''
                document.getElementsByName('batchName')[0].value = ''
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const createTeacher = () => {
        const email = document.getElementsByName('techerEmail')[0].value
        const phone = document.getElementsByName('techerNumber')[0].value

        axios.post(ApiUrl.BaseUrl+'api/create-user-teacher/', {email,phone})
            .then(function (response) {
                console.log(response);
                document.getElementsByName('techerEmail')[0].value=''
                document.getElementsByName('techerNumber')[0].value=''
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='container pl-10'>
            <div className='grid grid-cols-3 gap-5 my-10'>
                <div className='bg-[#efefef30] rounded-2xl p-5'>
                    <div className='bg-white rounded-lg p-5 profile-content h-full relative'>
                        <h1 className='text-2xl text-center absolute -top-5 bg-gradient-to-r from-sky-500 to-indigo-400 text-white rounded-full px-5 py-2'>Create New Batch</h1>
                        <div className="form-control block w-full max-w-xs mt-6">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Batch Name</span>
                            </label>
                            <input id="batch_name" type="text" placeholder="Write Batch Name" className="input input-bordered w-full max-w-xs" />
                            <button type="" className='btn btn-accent text-white mt-3' onClick={createBatch}>Create Batch</button>
                        </div>
                        <div className="overflow-x-auto mt-14">
                            <table className="table border border-separate rounded-lg w-full">
                                <thead>
                                    <tr>
                                        <th>Sl</th>
                                        <th>Batch Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr>
                                    <th>1</th>
                                    <td>96</td>
                                    <td>AWS Corporate</td>
                                    <td>0</td>
                                </tr> */}
                                    {batches ? <tr><td>01</td><td>{batches}</td></tr> : <tr>
                                        <td colSpan="4" className='text-center font-semibold'>No Batch Created yet</td>
                                    </tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='bg-[#efefef30] rounded-2xl p-5'>
                    <div className='bg-white rounded-lg p-5 profile-content relative'>
                        <h1 className='text-2xl text-center absolute -top-5 bg-gradient-to-r from-sky-500 to-indigo-400 text-white rounded-full px-5 py-2'>Create User's Account</h1>
                        <div className='flex justify-end mt-5 mb-5'>
                            <div className="form-control w-full max-w-xs">
                                <div className="relative flex gap-3 justify-between items-center">
                                    <div className='w-full'>
                                        <input type="email" id="floating_outlined" className="input input-bordered rounded-full block px-5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Search from reg. panel</label>
                                    </div>
                                    <button type="" className='py-2 px-2 btn btn-outline btn-accent rounded-lg text-2xl p-0 m-0 h-full'><Icon icon="mdi:file-import" /></button>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-x-10 gap-y-3'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Select Course</span>
                                </label>
                                <select className="select select-bordered" name="courseName">
                                    <option disabled defaultValue='Select Batch'>Select Course</option>
                                    {batchList.map(batch => <option key={batch?.batch_id} value={batch?.batch_id} >{batch?.batch_name}</option>)}
                                </select>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Select Batch</span>
                                </label>
                                <select className="select select-bordered" name="batchName">
                                    <option disabled defaultValue='Select Batch'>Select Batch</option>
                                    {batchList.map(batch => <option key={batch?.batch_id} value={batch?.batch_id}>{batch?.batch_name}</option>)}
                                </select>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Email Address</span>
                                </label>
                                <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="email" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Phone Number</span>
                                </label>
                                <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="phone" />
                            </div>
                            {/* <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div> */}
                        </div>
                        <button type="" className='btn btn-accent mt-5 text-white' onClick={createStudent}>Create user</button>
                    </div>
                </div>
                <div className='bg-[#efefef30] rounded-2xl p-5'>
                    <div className='bg-white rounded-lg p-5 profile-content h-full relative'>
                        <h1 className='text-2xl text-center absolute -top-5 bg-gradient-to-r from-sky-500 to-indigo-400 text-white rounded-full px-5 py-2'>Create Teacher</h1>
                        <div className="form-control block w-full max-w-xs mt-6">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Email Address</span>
                            </label>
                            <input name="techerEmail" type="email" placeholder="teacher@gmail.com" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control block w-full max-w-xs mt-6">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Phone Number</span>
                            </label>
                            <input name="techerNumber" type="number" placeholder="Enter Number" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <button type="" className='btn btn-accent text-white mt-3' onClick={createTeacher}>Create Teacher</button>
                    </div>
                </div>
            </div>
            <div>
                {/* <div className='mx-10'>
                    <Link to="/student-info"><button className={`btn ${location.pathname === '/student-info/student-list' ? 'btn-accent btn-outline' : 'btn-accent'} mr-5 rounded-full text-white`}>Batch List</button></Link>
                    <Link to="/student-info/student-list"><button className={`btn ${location.pathname === '/student-info' ? 'btn-accent btn-outline' : 'btn-accent'} mb-3 rounded-full text-white`}>User List</button></Link>
                    <hr />
                </div> */}
                <div className='flex justify-center'>
                    <div className='inline-flex mb-10 mt-3 border bg-gradient-to-r from-sky-400 to-indigo-400 rounded-lg overflow-hidden p-1 text-md font-semibold'>
                        <Link to="/student-info"><p className={`px-5 py-2 ${location.pathname === '/student-info/student-list' ? 'bg-transparent text-white' : 'bg-white rounded-lg'}`}>Batch List</p></Link>
                        <Link to="/student-info/student-list"><p className={`px-5 py-2 ${location.pathname === '/student-info' ? 'bg-transparent text-white' : 'bg-white rounded-lg'}`}>User List</p></Link>
                    </div>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default StudentInfo;