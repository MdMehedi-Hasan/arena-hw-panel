import React from 'react';

const SupportTopics = () => {
    return (
        <div>
            <form>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Problem Title</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Problem in Details</span>
                    </label>
                    <textarea class="textarea textarea-bordered h-24 w-full max-w-xs" placeholder=""></textarea>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Problem Image URL (Optional)</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <input type="submit" name="" value="Submit Question" className='btn btn-accent text-white'/>
            </form>
        </div>
    );
};

export default SupportTopics;