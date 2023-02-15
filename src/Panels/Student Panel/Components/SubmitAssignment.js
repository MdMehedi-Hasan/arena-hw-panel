import React from 'react';

const SubmitAssignment = () => {
    return (
        <div>
            <form>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Assignment Topic</span>
                    </label>
                    <select class="select select-bordered">
                        <option disabled selected>Select Assignment Topic</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Submit Assesment URL</span>
                    </label>
                    <input type="text" placeholder="Assesment URL" class="input input-bordered w-full max-w-xs" />
                </div>
                <input type="submit" name="" value="Submit Assignment" className='btn btn-accent text-white' />
            </form>
        </div>
    );
};

export default SubmitAssignment;