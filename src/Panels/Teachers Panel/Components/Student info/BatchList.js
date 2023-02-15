import React from 'react';

const BatchList = () => {
    return (
        <div>
            <div className="overflow-x-auto mb-10">
                    <table className="table table-zebra w-full ">
                        <thead>
                            <tr>
                                <th>Batch Id</th>
                                <th>Batch Name</th>
                                <th>Total Students</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>250</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>288</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>315</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>144</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default BatchList;