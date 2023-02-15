import React from 'react';

const ChangePassword = () => {
    return (
        <div className='mt-10 ml-10'>
            <div className=' p-5 max-w-lg bg-[#efefef30] rounded-2xl'> {/* bg-[#efefef30] rounded-2xl */}
                <div className=' rounded-2xl p-5 profile-content bg-white'> {/* profile-content */}
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Old Password:</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">New Password:</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Confirm Password:</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
                    </div>
                    <button type="" className='btn btn-accent text-white mt-5'>Change password</button>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;