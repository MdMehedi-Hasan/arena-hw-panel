import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import profile from '../../Common/Assets/male.png';
import 'swiper/css';

const StudentProfile = () => {
  return (
    <div className='container mb-10'>
      <div className='grid grid-cols-2 profile-card mt-16'>
        <div className='bg-[#efefef30] rounded-2xl p-5 h-640px'>
          <div className=' rounded-2xl bg-white profile-content h-full'>
            <div className='flex flex-col justify-center items-center pt-20'>
              <div className="avatar placeholder mb-3">
                <div className="bg-white text-black rounded-full w-24 ring ring-accent ring-offset-base-100 ring-offset-2">
                  <img src={profile} alt="profile" />
                </div>
              </div>
              <h1>Sahriar hoque sumon</h1>
              <h2>sahriarhoque@gmail.com</h2>
            </div>
            <div className=''>
              <div className=' '>
                <ul className='pl-5 py-12 mt-10 border-t-4'>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Full Name:</div> <div className='w-7/12'>Md. Mehedi Hasan</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Teacher id:</div> <div className='w-7/12'>25</div></div></li>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Gender:</div> <div className='w-7/12'>Male</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Phone Number:</div> <div className='w-7/12'>+880132502554</div></div></li>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Fb id:</div> <div className='w-7/12'>htps://something.com</div></div> <Icon className='mr-10' icon="material-symbols:edit" /></li>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Responsible for:</div> <div className='w-7/12'>All batches</div></div></li>
                  <li className='grid grid-cols-6 items-center'><div className='col-span-5 w-full flex items-center gap-5'><div className='w-4/12 text-lg font-semibold'>Joined:</div> <div className='w-7/12'>15 january 2023</div></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='bg-gray-50 p-5 rounded-2xl mb-5'>
            <div className='rounded-2xl bg-white p-5 profile-content'>
              <h1 className='text-xl font-semibold mb-5'>Overview</h1>
              <Swiper
                spaceBetween={10}
                slidesPerView={4}
                /* autoplay={{
                  delay: 100,
                  disableOnInteraction: false,
                }} */
                className="w-full"
              >
                <SwiperSlide className=''>
                  <div className='h-full w-auto max-w-xs flex flex-col items-center justify-between rounded-3xl p-5 bg-gradient-to-r from-blue-300 to-blue-400 text-white'>
                    <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                      <Link to="/student-info/student-list"><h1 className='text-sm hover:underline'>Attendance</h1></Link>
                      <Icon icon="fluent:people-community-16-filled" className='text-xl' />
                    </div>
                    <div className='mt-7'>
                      <div className='text-xl font-bold p-5'>
                        <p>250</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-blue-300 to-blue-400 text-white'>
                    <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                      <Link to="/student-info/student-list"><h1 className='text-sm hover:underline'>Absent</h1></Link>
                      <Icon icon="fluent:people-community-16-filled" className='text-xl' />
                    </div>
                    <div className='mt-7'>
                      <div className='text-xl font-bold p-5'>
                        <p>250</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-blue-300 to-blue-400 text-white'>
                    <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                      <Link to="/student-info/student-list"><h1 className='text-sm hover:underline'>Submitted Assignment</h1></Link>
                      <Icon icon="fluent:people-community-16-filled" className='text-xl' />
                    </div>
                    <div className='mt-7'>
                      <div className='text-xl font-bold p-5'>
                        <p>250</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-blue-300 to-blue-400 text-white'>
                    <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                      <Link to="/student-info/student-list"><h1 className='text-sm hover:underline'>Unsubmitted Assignment</h1></Link>
                      <Icon icon="fluent:people-community-16-filled" className='text-xl' />
                    </div>
                    <div className='mt-7'>
                      <div className='text-xl font-bold p-5'>
                        <p>250</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-blue-300 to-blue-400 text-white'>
                    <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                      <Link to="/student-info/student-list"><h1 className='text-sm hover:underline'>Total Assignments</h1></Link>
                      <Icon icon="fluent:people-community-16-filled" className='text-xl' />
                    </div>
                    <div className='mt-7'>
                      <div className='text-xl font-bold p-5'>
                        <p>250</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-fit w-auto max-w-xs flex flex-col items-center justify-between border rounded-3xl p-5 bg-gradient-to-r from-blue-300 to-blue-400 text-white'>
                    <div className='w-full flex items-center justify-between text-2xl font-semibold'>
                      <Link to="/student-info/student-list"><h1 className='text-sm hover:underline'>Support Topics</h1></Link>
                      <Icon icon="fluent:people-community-16-filled" className='text-xl' />
                    </div>
                    <div className='mt-7'>
                      <div className='text-xl font-bold p-5'>
                        <p>250</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className=''>
            <div className='bg-[#efefef30] rounded-2xl p-5 h-640px'>
              <div className='rounded-2xl bg-white p-5 profile-content h-full'> {/* h-full overflow-auto */}
                <div className='h-full flex flex-col'>
                  <div className='grid grid-cols-3'>
                    <h1 className='text-2xl font-semibold'>Course Topics</h1>
                    <div className='flex items-center gap-2'>
                      <div className='w-3 h-3 bg-cyan-400'></div>
                      <span>Done</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-3 h-3 bg-gray-200'></div>
                      <span>Undone</span>
                    </div>
                  </div>
                  <ul className="steps steps-vertical mt-2 overflow-y-auto courses relative"> {/* w-max */}
                    <li data-content="" className="step step-info">
                      <div className='flex items-center text-left w-full overflow-x-hidden justify-between'>
                        <div className='bg-cyan-400 rounded-lg px-2 py-1 text-white font-semibold truncate overflow-hidden w-10/12'><p className='truncate overflow-hidden'>Cyber Security & Ethical Hacking gdfhfgjdfgjhfgjhdh hgjhgjhgjhgjgggyhgjjyygygjhgjh</p><p className='font-normal font-mono'>By: Md Jewel Islam</p></div> <p className='text-sm text-right w-2/12'>02/03/2000</p>
                      </div>
                    </li>
                    <li data-content="" className="step step-info">
                      <div className='flex items-center text-left w-full overflow-x-hidden justify-between'>
                        <div className='bg-cyan-400 rounded-lg px-2 py-1 text-white font-semibold truncate overflow-hidden w-10/12'><p className='truncate overflow-hidden'>Cyber Security & Ethical Hacking gdfhfgjdfgjhfgjhdh hgjhgjhgjhgjgggyhgjjyygygjhgjh</p><p className='font-normal font-mono'>By: Md Jewel Islam</p></div> <p className='text-sm text-right w-2/12'>02/03/2000</p>
                      </div>
                    </li>
                    <li data-content="" className="step">
                      <div className='flex items-center text-left w-full overflow-x-hidden justify-between'>
                        <div className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-10/12'><p className='truncate overflow-hidden'>Cyber Security & Ethical Hacking gdfhfgjdfgjhfgjhdh hgjhgjhgjhgjgggyhgjjyygygjhgjh</p><p className='font-normal font-mono'>By: Md Jewel Islam</p></div> <p className='text-sm text-right w-2/12'>02/03/2000</p>
                      </div>
                    </li>
                    <li data-content="" className="step">
                      <div className='flex items-center text-left w-full overflow-x-hidden justify-between'>
                        <div className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-10/12'><p className='truncate overflow-hidden'>Cyber Security & Ethical Hacking gdfhfgjdfgjhfgjhdh hgjhgjhgjhgjgggyhgjjyygygjhgjh</p><p className='font-normal font-mono'>By: Md Jewel Islam</p></div> <p className='text-sm text-right w-2/12'>02/03/2000</p>
                      </div>
                    </li>
                    <li data-content="" className="step">
                      <div className='flex items-center text-left w-full overflow-x-hidden justify-between'>
                        <div className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-10/12'><p className='truncate overflow-hidden'>Cyber Security & Ethical Hacking gdfhfgjdfgjhfgjhdh hgjhgjhgjhgjgggyhgjjyygygjhgjh</p><p className='font-normal font-mono'>By: Md Jewel Islam</p></div> <p className='text-sm text-right w-2/12'>02/03/2000</p>
                      </div>
                    </li>
                    <li data-content="" className="step">
                      <div className='flex items-center text-left w-full overflow-x-hidden justify-between'>
                        <div className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-10/12'><p className='truncate overflow-hidden'>Cyber Security & Ethical Hacking gdfhfgjdfgjhfgjhdh hgjhgjhgjhgjgggyhgjjyygygjhgjh</p><p className='font-normal font-mono'>By: Md Jewel Islam</p></div> <p className='text-sm text-right w-2/12'>02/03/2000</p>
                      </div>
                    </li>
                    <li data-content="" className="step">
                      <div className='flex items-center text-left w-full overflow-x-hidden justify-between'>
                        <div className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-10/12'><p className='truncate overflow-hidden'>Cyber Security & Ethical Hacking gdfhfgjdfgjhfgjhdh hgjhgjhgjhgjgggyhgjjyygygjhgjh</p><p className='font-normal font-mono'>By: Md Jewel Islam</p></div> <p className='text-sm text-right w-2/12'>02/03/2000</p>
                      </div>
                    </li>
                    <li data-content="" className="step">
                      <div className='flex items-center text-left w-full overflow-x-hidden justify-between'>
                        <div className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-10/12'><p className='truncate overflow-hidden'>Cyber Security & Ethical Hacking gdfhfgjdfgjhfgjhdh hgjhgjhgjhgjgggyhgjjyygygjhgjh</p><p className='font-normal font-mono'>By: Md Jewel Islam</p></div> <p className='text-sm text-right w-2/12'>02/03/2000</p>
                      </div>
                    </li>
                    <li data-content="" className="step">
                      <div className='flex items-center text-left w-full overflow-x-hidden justify-between'>
                        <div className='bg-gray-200 rounded-lg px-2 py-1 font-semibold truncate overflow-hidden w-10/12'><p className='truncate overflow-hidden'>Cyber Security & Ethical Hacking gdfhfgjdfgjhfgjhdh hgjhgjhgjhgjgggyhgjjyygygjhgjh</p><p className='font-normal font-mono'>By: Md Jewel Islam</p></div> <p className='text-sm text-right w-2/12'>02/03/2000</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentProfile;