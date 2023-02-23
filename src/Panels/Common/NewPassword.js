import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import ApiUrl from './APIUrl';
import image from './Assets/new-pass.jpg'
import 'react-toastify/dist/ReactToastify.css';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import success from './Assets/success.gif'

const NewPassword = () => {
    const [type, setType] = useState('password')
    const [type2, setType2] = useState('password')
    const navigate = useNavigate();

    const setNewPassword = () => {
        const user_id = localStorage.getItem('id')
        const new_password = document.getElementById('floating_outlined').value
        const confirm_password = document.getElementById('floating_outlined2').value
        console.log(user_id, new_password, confirm_password);

        if (!new_password) {
            toast.error('New password field can not be empty!', {
                position: "top-right",
                theme: "colored",
            })
        }
        else if (!confirm_password) {
            toast.error('Confirm password field can not be empty!', {
                position: "top-right",
                theme: "colored",
            })
        }
        else if (new_password !== confirm_password) {
            toast.error("Confirm password doesn't match!", {
                position: "top-right",
                theme: "colored",
            })
        }
        else {
            axios.post(ApiUrl.BaseUrl + 'api/new-password-set/', { user_id, new_password, confirm_password })
                .then(function (response) {
                    console.log(response);
                    if (response.data.error === false) {
                        document.getElementById('floating_outlined').value = ''
                        document.getElementById('floating_outlined2').value = ''
                        document.getElementById('success-modal').checked = true
                        // setTimeout(navigate('/login'),10000)
                    }
                    else {
                        toast.error(response.data.message, {
                            position: "top-right",
                            theme: "colored",
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    return (
        <div className='h-screen flex items-center justify-center bg-[linear-gradient(#56b5e3,#7d58a5)]'>
            <ToastContainer />
            {/* Success Modal */}
            <input type="checkbox" id="success-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-[#fdfdfe]">
                <label htmlFor="success-modal" className="btn btn-sm btn-circle btn-error absolute right-2 top-2 bg-transparent text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500" onClick={()=>navigate('/login')}>✕</label>
                    <img src={success} alt="" className='mx-auto'/>
                    <h3 className="font-bold text-lg text-center pt-5 pb-2">Your password is recovered!</h3>
                    <p className="pb-4 text-center">Click Login to access your profile.</p>
                    <div className="modal-action">
                        <label htmlFor="success-modal" className="btn btn-success text-white" onClick={()=>navigate('/login')}>Login</label>
                    </div>
                </div>
            </div>

            <div className='container flex bg-[#ffffff3b] h-4/5 rounded-3xl shadow-2xl'>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-10/12 relative'>
                        <img src={image} alt="" className='relative z-50' />
                        {/* <img src={shape} alt="" className='absolute top-0 bottom-0' /> */}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-full bg-white rounded-r-3xl relative h-full'>
                    <div className='w-8/12'>
                        <h1 className='text-4xl mb-20 mt-5 font-serif'>Set New Password</h1>
                    </div>
                    <div className='w-6/12'>
                        <div className='relative mb-10'>
                            <input autoComplete='off' type={type} id="floating_outlined" className="block px-2 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-b-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">New Password </label>
                            {type === 'text' ? <Icon icon="ic:sharp-remove-red-eye" className='absolute right-0 bottom-2 cursor-pointer' onClick={() => setType('password')} /> : <Icon icon="mdi:eye-off" className='absolute right-0 bottom-2 cursor-pointer' onClick={() => setType('text')} />} {/* <Icon icon="mdi:eye-off" /> */}
                        </div>
                        <div className='relative mb-10'>
                            <input autoComplete='off' type={type2} id="floating_outlined2" className="block px-2 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-b-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_outlined2" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">Confirm Password</label>
                            {type2 === 'text' ? <Icon icon="ic:sharp-remove-red-eye" className='absolute right-0 bottom-2 cursor-pointer' onClick={() => setType2('password')} /> : <Icon icon="mdi:eye-off" className='absolute right-0 bottom-2 cursor-pointer' onClick={() => setType2('text')} />} {/* <Icon icon="mdi:eye-off" /> */}
                        </div>
                        <button type="" className='btn btn-accent w-full mt-20 text-white' onClick={setNewPassword}>Reset password</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NewPassword;