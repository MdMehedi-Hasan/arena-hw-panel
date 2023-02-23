import axios from 'axios';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import ApiUrl from './APIUrl';
import shape from './Assets/graph2.png'
import image from './Assets/verification.png'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const OtpVerfication = () => {
    const userId = localStorage.getItem('id')
    const navigate = useNavigate()
    const otpVerify = () =>{
        const otp = document.getElementById('floating_outlined').value
        if(!otp){
            toast.error('Enter OTP Code to reset your password!',{
                theme: "colored",
                position: "top-center",
            })
        }
        else{
            axios.post(ApiUrl.BaseUrl+'api/forget-password-verify/', {
                user_id: userId,
                code: otp
              })
              .then(function (response) {
                if(response?.data?.error === false){
                    navigate('/new-password')
                }
              })
              .catch(function (error) {
                toast.error(error.response.data.message,{
                    theme: "colored",
                    position: "top-center",
                })
              });
        }
    }
    const resendOtp = () =>{
        axios.put(ApiUrl.BaseUrl+`api/otp-resend/${userId}/`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className='h-screen flex items-center justify-center bg-[linear-gradient(#56b5e3,#7d58a5)]'>
            <ToastContainer/>
            <div className='container flex bg-[#ffffff3b] h-4/5 rounded-3xl shadow-2xl'>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-8/12 relative'>
                        <img src={image} alt="" className='relative z-50' />
                        {/* <img src={shape} alt="" className='absolute top-0 bottom-0' /> */}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-full bg-white rounded-r-3xl relative h-full'>
                    <div className='w-8/12'>
                        <h1 className='text-4xl  mt-5 font-serif'>OTP Verfication</h1>
                        <p className='mb-20'>We have sent an OTP to your email address.</p>
                    </div>
                    <div className='w-6/12'>
                        <div className='relative'>
                            <input autoComplete='off' type="number" id="floating_outlined" className="block px-2 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-b-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">Enter OTP</label>
                        </div>
                        <p className='text-right mb-10 mt-5 cursor-pointer hover:underline hover:text-blue-400 text-sm' onClick={resendOtp}>Resend OTP</p>
                        <button type="" className='btn btn-accent w-full mt-20 text-white' onClick={otpVerify}>Verify</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpVerfication;