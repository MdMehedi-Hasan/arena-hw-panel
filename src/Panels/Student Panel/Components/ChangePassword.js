import axios from 'axios';
import React from 'react';
import ApiUrl from '../../Common/APIUrl';

const ChangePassword = () => {
    const userId = localStorage.getItem('id')

    const changePassword = () => {
        const old_password = document.getElementsByName('oldPassword')[0].value
        const new_password = document.getElementsByName('newPassword')[0].value
        const confirm_password = document.getElementsByName('ConfirmPassword')[0].value

            axios.post(ApiUrl.BaseUrl + `api/user-change-password/${userId}/`, {old_password,new_password,confirm_password})
                .then(function (response) {
                    console.log(response);
                    document.getElementsByName('oldPassword')[0].value = ''
                    document.getElementsByName('newPassword')[0].value = ''
                    document.getElementsByName('ConfirmPassword')[0].value = ''
                })
                .catch(function (error) {
                    console.log(error);
                });
    }
    return (
        <div className='mt-10 ml-10'>
            <div className=' p-5 max-w-lg bg-[#efefef30] rounded-2xl'> {/* bg-[#efefef30] rounded-2xl */}
                <div className=' rounded-2xl p-5 profile-content bg-white'> {/* profile-content */}
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Old Password:</span>
                        </label>
                        <input name='oldPassword' type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">New Password:</span>
                        </label>
                        <input name='newPassword' type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Confirm Password:</span>
                        </label>
                        <input name='ConfirmPassword' type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
                    </div>
                    <button type="" className='btn btn-accent text-white mt-5' onClick={changePassword}>Change password</button>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;