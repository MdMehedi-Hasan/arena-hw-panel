import React from 'react';

const ChangePassword = () => {
    return (
        <div>
            <div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Old Password:</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">New Password:</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Confirm Password:</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;