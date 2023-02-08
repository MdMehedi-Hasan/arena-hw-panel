import { Icon } from '@iconify/react';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import profile from '../Assets/profile.jpg'
import './Profile.css'

const Profile = () => {
  const data = [
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
  // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div className='container mb-10 bg-white'>
      <div className='grid grid-cols-2 profile-card mt-16'>
        <div className='bg-[#efefef30] rounded-2xl p-10'>
          <div className=' rounded-2xl bg-white profile-content'> {/* w-full max-w-lg bg-[linear-gradient(90deg,#56b5e3,#7d58a5);]*/}
            {/* <div className='cstm'>
                </div> */}
            <div className='flex flex-col justify-center items-center pt-20'>{/* left-[21%] top-[10%] */} {/* mt-20 ml-24 absolute left-[15%] top-[12%] z-10*/}
              <div className="avatar placeholder mb-3">
                <div className="bg-white text-black rounded-full w-24 ring ring-accent ring-offset-base-100 ring-offset-2">
                  <img src={profile} alt="profile" />
                </div>
              </div>
              <h1>Sahriar hoque sumon</h1>
              <h2>sahriarhoque@gmail.com</h2>
            </div>
            <div className=''>{/* cstm */}
              <div className=' '> {/* pt-16 pb-36 mt-28 ml-12 */}
                <ul className='pl-5 py-12 mt-10 border-t-4'>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Full Name:</div> <div className='w-7/12'>Md. Mehedi Hasan</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Teacher id:</div> <div className='w-7/12'>25</div></div></li>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Gender:</div> <div className='w-7/12'>Male</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Phone Number:</div> <div className='w-7/12'>+880132502554</div></div></li>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Fb id:</div> <div className='w-7/12'>htps://something.com</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Assigned by:</div> <div className='w-7/12'>Sahriar Ifti</div></div></li>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Responsible for:</div> <div className='w-7/12'>All batches</div></div></li>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Joined:</div> <div className='w-7/12'>15 january 2023</div></div></li>
                  {/*             <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Something:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Demo:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Fb link:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Lorem:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Ipsum:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Doller Sit:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Amet:</div> <div className='w-7/12'>Something jhdjhfs</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='grid grid-cols-2 gap-x-20'>
          <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-white'>
            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
              <h1>Total Batch</h1>
              <Icon icon="mdi:file-import" className='text-6xl'/>
            </div>
              <div className='mt-7'>
              <div className='border-8 l258  rounded-full inline-block text-6xl font-bold p-10'>
                <p>25</p>
            </div>
              </div>
          </div>
          <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-white'>
            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
              <h1>Total students</h1>
              <Icon icon="mdi:file-import" className='text-6xl'/>
            </div>
              <div className='mt-3'>
              <div className='flex items-center justify-center border-8 rounded-full text-6xl font-bold h-52 w-52'> 
                <span>150000000</span>
            </div>
              </div>
          </div>
          <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-white'>
            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
              <h1>Total Assignments</h1>
              <Icon icon="mdi:file-import" className='text-6xl'/>
            </div>
              <div className='mt-7'>
              <div className='border-8  rounded-full inline-block text-6xl font-bold p-10'> 
                <p>25</p>
            </div>
              </div>
          </div>
          <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-white'>
            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
              <h1>Pending Assignments</h1>
              <Icon icon="mdi:file-import" className='text-6xl'/>
            </div>
              <div className='mt-7'>
              <div className='border-8  rounded-full inline-block text-6xl font-bold p-10'> 
                <p>25</p>
            </div>
              </div>
          </div>
        </div> */}
        <div className='bg-[#efefef30] rounded-2xl p-10'>
          <div className='grid grid-cols-2 w-full h-full gap-7 justify-center'> {/* content-between */}
            <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-blue-300 to-blue-400 profile-content text-white'>
              <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                <h1>Total Students</h1>
                <Icon icon="fluent:people-community-16-filled" className='text-6xl'/>
              </div>
              <div className='mt-7'>
                <div className='text-5xl font-bold p-10'>
                  <p>250</p>
                </div>
              </div>
            </div>
            <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-cyan-300 to-blue-400 profile-content text-white'>
              <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                <h1>Running Batch</h1>
                <Icon icon="mingcute:classify-fill" className='text-6xl'/>
              </div>
              <div className='mt-7'>
                <div className='text-5xl font-bold p-10'>
                  <p>12</p>
                </div>
              </div>
            </div>
            {/* <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-white'>
            <div className='w-full flex items-center justify-between text-2xl font-semibold'>
              <h1>Total students</h1>
              <Icon icon="mdi:file-import" className='text-6xl'/>
            </div>
              <div className='mt-3'>
              <div className='flex items-center justify-center border-8 rounded-full text-6xl font-bold h-52 w-52'> 
                <span>15000</span>
            </div>
              </div>
          </div> */}
            <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-green-300 to-green-400 profile-content text-white'>
              <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                <h1>Total Assignments</h1>
                <Icon icon="ic:round-assignment" className='text-6xl' />
              </div>
              <div className='mt-7'>
                <div className='text-5xl font-bold p-10'>
                  <p>250</p>
                </div>
              </div>
            </div>
            <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-red-300 to-red-400 profile-content text-white'>
              <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                <h1>Pending Assignments</h1>
                <Icon icon="mdi:assignment-late" className='text-6xl' />
              </div>
              <div className='mt-7'>
                <div className='text-5xl font-bold p-10'>
                  <p>05</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='graph-sec mt-16'>
        <div className='bg-[#efefef30] rounded-2xl p-10'>
          <div className='flex flex-col justify-between h-full'>
            <div className='rounded-2xl bg-white h-96 profile-content pt-20'>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className='grid grid-cols-2 gap-10'>
              <div class="card bg-base-100 shadow-xl profile-content">
                <div class="card-body">
                  <h2 class="card-title">Total Batch</h2>
                  <p>44</p>
                  {/* <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div> */}
                </div>
              </div>
              <div class="card bg-base-100 shadow-xl profile-content">
                <div class="card-body">
                  <h2 class="card-title">Total Students</h2>
                  <p>14000</p>
                  {/* <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#efefef30] rounded-2xl p-10'>
          <div className='rounded-2xl bg-white p-5 profile-content'>
            <div className=''>
              <div className='relative z-10 '>
                <h1 className='mt-5 text-2xl text-center border-b-2 pb-2'>Teachers Schedules</h1>
                <ul className='pl-5 py-12 mt-10'>
                  <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Full Name:</div> <div className='w-7/12'>Something jhdjhfs</div></div></li>
                  <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Gender:</div> <div className='w-7/12'>Something jhdjhfs</div></div></li>
                  <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Batch:</div> <div className='w-7/12'>Something jhdjhfs</div></div></li>
                  <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Type:</div> <div className='w-7/12'>Something jhdjhfs</div></div></li>
                  <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Teacher id:</div> <div className='w-7/12'>Something jhdjhfs</div></div></li>
                  <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Assigned by:</div> <div className='w-7/12'>Something jhdjhfs</div></div></li>
                  <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Something:</div> <div className='w-7/12'>Something jhdjhfs</div></div></li>
                  <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Demo:</div> <div className='w-7/12'>Something jhdjhfs</div></div></li>
                  <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Fb link:</div> <div className='w-7/12'>Something jhdjhfs</div></div></li>
                  <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Lorem:</div> <div className='w-7/12'>Something jhdjhfs</div></div></li>
                  <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Ipsum:</div> <div className='w-7/12'>Something jhdjhfs</div></div></li>
                  <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Doller Sit:</div> <div className='w-7/12'>Something jhdjhfs</div></div></li>
                  <li className='flex gap-3 items-center'><div className='w-full flex items-center'><div className='w-4/12'>Amet:</div> <div className='w-7/12'>Something jhdjhfs</div></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;