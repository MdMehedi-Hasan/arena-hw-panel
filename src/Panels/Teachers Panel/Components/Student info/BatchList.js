import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ApiUrl from '../../../Common/APIUrl';

const BatchList = () => {
    const [batchList,setBatchList] =useState([])
    useEffect(() => {
        axios.get(ApiUrl.BaseUrl+'api/batch-name-and-count/')
            .then(function (response) {
                console.log(response);
                setBatchList(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <div className="overflow-x-auto mb-10">
                <table className="table w-full border rounded-xl border-separate">
                    <thead>
                        <tr>
                            {/* <th>Sl</th> */}
                            <th>Batch Id</th>
                            <th>Batch Name</th>
                            <th>Student (q)</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {batchList?.map((batch, index) =>
                            <tr key={batch.batch_id}>
                                {/* <td>{index + 1}</td> */}
                                <td>{batch.batch_id}</td>
                                <td>{batch.batch_name}</td>
                                <td>{batch.total_student}</td>
                                <td>{batch?.time}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BatchList;