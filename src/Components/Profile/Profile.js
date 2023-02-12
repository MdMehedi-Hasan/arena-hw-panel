import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import profile from '../Assets/profile.jpg'
import './Profile.css'

const Profile = () => {
  const data = [
    {
      name: 'B-1',
      Number: 2400,
    },
    {
      name: 'B-2',
      Number: 1398,
    },
    {
      name: 'B-3',
      Number: 5800,
    },
    {
      name: 'B-4',
      Number: 3908,
    },
    {
      name: 'B-5',
      Number: 4800,
    },
    {
      name: 'B-6',
      Number: 3800,
    },
    {
      name: 'B-7',
      Number: 4300,
    },
    {
      name: 'B-8',
      Number: 4200,
    },
    {
      name: 'B-9',
      Number: 4100,
    },
    {
      name: 'B-10',
      Number: 4500,
    },
    {
      name: 'B-11',
      Number: 4700,
    },
    {
      name: 'B-12',
      Number: 4000,
    },
    {
      name: 'B-13',
      Number: 4900,
    },
    {
      name: 'B-14',
      Number: 4100,
    },
    {
      name: 'B-15',
      Number: 5000,
    },
    {
      name: 'B-16',
      Number: 4900,
    },
    {
      name: 'B-17',
      Number: 4300,
    },
    {
      name: 'B-18',
      Number: 4300,
    },
  ];
  // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div className='container mb-10'>
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
          <div className='grid grid-cols-3 w-full h-full gap-5 justify-center'> {/* content-between */}
            <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-blue-300 to-blue-400 profile-content text-white'>
              <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                <Link to="/student-info/student-list"><h1 className='text-sm hover:underline'>Total Students</h1></Link>
                <Icon icon="fluent:people-community-16-filled" className='text-xl' />
              </div>
              <div className='mt-7'>
                <div className='text-xl font-bold p-5'>
                  <p>250</p>
                </div>
              </div>
            </div>
            <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-cyan-300 to-blue-400 profile-content text-white'>
              <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                <h1 className='text-sm'>Running Students</h1>
                <Icon icon="mingcute:classify-fill" className='text-xl' />
              </div>
              <div className='mt-7'>
                <div className='text-xl font-bold p-5'>
                  <p>44</p>
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
                <h1 className='text-sm'>Passed Students</h1>
                <Icon icon="ic:round-assignment" className='text-xl' />
              </div>
              <div className='mt-7'>
                <div className='text-xl font-bold p-5'>
                  <p>32</p>
                </div>
              </div>
            </div>
            <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-blue-300 to-blue-400 profile-content text-white'>
              <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                <Link to='/student-info'><h1 className='text-sm hover:underline'>Total Batch</h1></Link>
                <Icon icon="mdi:assignment-late" className='text-xl' />
              </div>
              <div className='mt-7'>
                <div className='text-xl font-bold p-5'>
                  <p>05</p>
                </div>
              </div>
            </div>
            <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-cyan-300 to-blue-400 profile-content text-white'>
              <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                <h1 className='text-sm'>Running Batch</h1>
                <Icon icon="mdi:assignment-late" className='text-xl' />
              </div>
              <div className='mt-7'>
                <div className='text-xl font-bold p-5'>
                  <p>05</p>
                </div>
              </div>
            </div>
            <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-green-300 to-green-400 profile-content text-white'>
              <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                <h1 className='text-sm'>Completed Batch</h1>
                <Icon icon="mdi:assignment-late" className='text-xl' />
              </div>
              <div className='mt-7'>
                <div className='text-xl font-bold p-5'>
                  <p>05</p>
                </div>
              </div>
            </div>
            <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-blue-300 to-blue-400 profile-content text-white'>
              <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                <Link to='/assignments'><h1 className='text-sm hover:underline'>All Assignments</h1></Link>
                <Icon icon="mdi:assignment-late" className='text-xl' />
              </div>
              <div className='mt-7'>
                <div className='text-xl font-bold p-5'>
                  <p>05</p>
                </div>
              </div>
            </div>
            <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-cyan-300 to-blue-400 profile-content text-white'>
              <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                <h1 className='text-sm'>Pending</h1>
                <Icon icon="mdi:assignment-late" className='text-xl' />
              </div>
              <div className='mt-7'>
                <div className='text-xl font-bold p-5'>
                  <p>05</p>
                </div>
              </div>
            </div>
            <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-green-300 to-green-400 profile-content text-white'>
              <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                <h1 className='text-sm'>Approved</h1>
                <Icon icon="mdi:assignment-late" className='text-xl' />
              </div>
              <div className='mt-7'>
                <div className='text-xl font-bold p-5'>
                  <p>05</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='graph-sec mt-16'>
        <div className='bg-[#efefef30] rounded-xl p-10'>
          <div className='flex flex-col gap-10'>
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
                  <Bar dataKey="Number" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className='grid grid-cols-2 gap-10'>
              <div className="card bg-base-100 shadow-xl profile-content">
                <div className="card-body relative overflow-hidden">
                  <h2 className="card-title font-normal">Total Batch</h2>
                  <p className='text-4xl font-bold'>44</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div> */}
                  <div className='rounded-full bg-purple-500 w-24 h-24 absolute -right-3 -bottom-5'></div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl profile-content">
                <div className="card-body relative overflow-hidden">
                  <h2 className="card-title font-normal">Total Students</h2>
                  <p className='text-4xl font-bold'>14000</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div> */}
                  <div className='rounded-full bg-purple-500 w-24 h-24 absolute -right-3 -bottom-5'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#efefef30] rounded-2xl p-10 h-640px'>
          <div className='rounded-2xl bg-white p-5 profile-content h-full'> {/* h-full overflow-auto */}
            <div className='h-full flex flex-col'>
              <h1 className='mt-5 text-2xl text-center pb-2'>Course Topics</h1>
              <div className='border-b-2 mx-auto pb-2 flex w-auto gap-x-5'>
                <select className="select select-bordered">
                  <option disabled selected>Course</option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
                <select className="select select-bordered">
                  <option disabled selected>Batch</option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
              </div>
              {/* <ul className='pl-5 py-12 mt-10'>
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
                </ul> */}                  
                
              <ul className="steps steps-vertical mt-5 overflow-y-auto w-max courses relative">
                <li data-content="" className="step step-info">
                  <div className='flex items-center text-left'>
                    <p className='bg-cyan-400 rounded-lg px-2 py-1 text-white font-semibold truncate overflow-hidden w-9/12'>Cyber Security & Ethical Hacking</p> <p className='text-sm w-3/12 text-right'>02/03/2000</p>
                  </div>
                </li>
                <li data-content="" className="step step-info">
                  <div className='flex items-center text-left'>
                    <p className='bg-cyan-400 rounded-lg px-2 py-1 text-white font-semibold truncate overflow-hidden w-9/12'>Cyber Security & Ethical Hacking </p> <p className='text-sm w-3/12 text-right'>02/03/2000</p>
                  </div>
                </li>
                <li data-content="" className="step">
                  <div className='flex items-center text-left'>
                    <p className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-9/12'>Cyber Security & Ethical Hacking </p> <p className='text-sm w-3/12 text-right'>02/03/2000</p>
                  </div>
                </li>
                <li data-content="" className="step">
                  <div className='flex items-center text-left'>
                    <p className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-9/12'>Cyber Security & Ethical Hacking </p> <p className='text-sm w-3/12 text-right'>02/03/2000</p>
                  </div>
                </li>
                <li data-content="" className="step">
                  <div className='flex items-center text-left'>
                    <p className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-9/12'>Cyber Security & Ethical Hacking </p> <p className='text-sm w-3/12 text-right'>02/03/2000</p>
                  </div>
                </li>
                <li data-content="" className="step">
                  <div className='flex items-center text-left'>
                    <p className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-9/12'>Cyber Security & Ethical Hacking </p> <p className='text-sm w-3/12 text-right'>02/03/2000</p>
                  </div>
                </li>
                <li data-content="" className="step">
                  <div className='flex items-center text-left'>
                    <p className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-9/12'>Cyber Security & Ethical Hacking </p> <p className='text-sm w-3/12 text-right'>02/03/2000</p>
                  </div>
                </li>
                <li data-content="" className="step">
                  <div className='flex items-center text-left'>
                    <p className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-9/12'>Cyber Security & Ethical Hacking </p> <p className='text-sm w-3/12 text-right'>02/03/2000</p>
                  </div>
                </li>
                <li data-content="" className="step">
                  <div className='flex items-center text-left'>
                    <p className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-9/12'>Cyber Security & Ethical Hacking </p> <p className='text-sm w-3/12 text-right'>02/03/2000</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;