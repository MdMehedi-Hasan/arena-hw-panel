import { Icon } from '@iconify/react';
import React from 'react';
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import profile from '../Assets/profile.jpg'
import './Profile.css'

const Profile = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        /* { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 }, */
    ];
    const data2 = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <div>
        <div className='flex gap-10 mx-10 mt-16 relative'>
            <div className='w-5/12 max-w-xl rounded-2xl bg-[linear-gradient(90deg,#56b5e3,#7d58a5);]'> {/* max-w-xl */}
                {/* <div className='cstm'>
                </div> */}
                <div className='flex justify-center absolute left-[15%] top-[12%] z-10'>{/* left-[21%] top-[10%] */} {/* mt-20 ml-24 */}
                    <div className="avatar placeholder">
                        <div className="bg-white text-black rounded-full w-24">
                            {/* <span className="text-3xl">K</span> */}
                            {/* <Icon className='w-full text-6xl' icon="mdi:person" /> */}
                            <img src={profile} alt="profile" />
                        </div>
                    </div>
                </div>
                <div className='cstm'>
                    <div className='relative z-10 pt-16 pb-36 mt-28 ml-12'>
                        <ul>
                            <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Full Name:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                            <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Gender:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                            <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Batch:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                            <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Type:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                            <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Teacher id:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                            <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Assigned by:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                            <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Something:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                            <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Demo:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                            <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Fb link:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                            <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Lorem:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                            <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Ipsum:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                            <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Doller Sit:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                            <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Amet:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className=''>
                <div className='border rounded-lg flex flex-col items-center'>
                    <h1 className='text-2xl fw-semibold text-green-500 mb-[-20px]'>Total Batch: 25</h1>
                <PieChart width={213} height={300} >
                    <Pie
                        data={data}
                        cx={120}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                </div>
                <div className='border rounded-lg flex flex-col items-center'>
                <h1 className='text-2xl fw-semibold text-green-500 mb-[-20px]'>Total Students: 328</h1>
                <PieChart width={213} height={300} >
                    <Pie
                        data={data}
                        cx={120}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                </div>
            </div> */}
            <div className='w-8/12 border rounded-2xl bg-white flex flex-col justify-end'>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            width={500}
            height={300}
            data={data2}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend  />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
        </div>
        </div>
    );
};

export default Profile;