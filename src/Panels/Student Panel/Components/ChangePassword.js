import React from 'react';

const ChangePassword = () => {
    return (
        <div>
            <div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Old Password:</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">New Password:</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Confirm Password:</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;