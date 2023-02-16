import React from 'react';
import { Link } from 'react-router-dom';
import animatedImage from './Assets/man.gif'
import shape from './Assets/graph2.png'
import axios from 'axios';
import ApiUrl from './APIUrl';

const Login = () => {
    function login (){
        const username = document.getElementById('floating_outlined').value
        const password = document.getElementById('floating_outlined2').value

        axios.post(ApiUrl.BaseUrl +'api/user-login/', {
            username,password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className='h-screen flex items-center justify-center bg-[linear-gradient(#56b5e3,#7d58a5)]'>
            <div className='container flex bg-[#ffffff3b] h-4/5 rounded-3xl shadow-2xl'>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-6/12 relative'>
                    <img src={animatedImage} alt="" className='relative z-50'/>
                    <img src={shape} alt="" className='absolute top-0 bottom-0'/>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-full bg-white rounded-r-3xl relative h-full'>
                    <div className='w-8/12'>
                        <h1 className='text-3xl font-serif'>Hello!</h1>
                        <h1 className='text-4xl mb-20 mt-5 font-serif'>Welcome back...</h1>
                    </div>
                    <div className='w-6/12'>
                        <div className='relative mb-10'>
                            <input autoComplete='off' type="email" id="floating_outlined" className="block px-2 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-b-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">User Name</label>
                        </div>
                        <div className='relative'>
                            <input autoComplete='new-password' type="password" id="floating_outlined2" className="block px-2 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-b-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_outlined2" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">Password</label>
                        </div>
                        <Link to="/login"><p className='text-right mt-2'>forget password?</p></Link>
                        <button type="" className='btn btn-accent w-full mt-20 text-white' onClick={login}>Login</button>
                    </div>
                    <div className="dropdown dropdown-top dropdown-end absolute bottom-5 right-5 cursor-pointer">
                        <label tabIndex="0" className="m-1">Having an Issue!</label>
                        <div tabIndex="0" className="dropdown-content menu p-5 shadow-xl bg-base-100 rounded-box w-72">
                            <p>আপনি লগইন করতে না পারলে অথবা কোন সমস্যা হলে আমাদের সাথে যোগাযোগ করুন।</p>
                            <p className='mt-3 font-semibold'>যোগাযোগ: 017*********</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;