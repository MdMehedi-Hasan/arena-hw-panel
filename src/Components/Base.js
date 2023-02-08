import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../Components/Assets/logo.svg'
import { Icon } from '@iconify/react';

const Base = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content items-center justify-center bg-white">
                {/* Navbar start */}
                <div className="navbar bg-[linear-gradient(90deg,#56b5e3,#7d58a5)]"> {/* bg-base-100 */}
                    <div className="flex-1 text-white text-4xl">
                        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden"><Icon icon="mdi:microsoft-xbox-controller-menu" /></label>
                        {/* <Icon icon="mdi:microsoft-xbox-controller-menu" /> */}
                    </div>
                    <div className="flex-none gap-2">
                        <Icon className='text-4xl text-white' icon="mdi:bell" />
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full border border-white text-white">
                                    {/* <img src="https://placeimg.com/80/80/people" /> */}
                                    <Icon className='w-full text-4xl' icon="mdi:person" />
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to="/" className="justify-between">
                                        Profile
                                    </Link>
                                </li>
                                <li><a>Instructions</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End */}

                {/* Page content here */}
                <Outlet />
                <div tabIndex="0" className='dropdown absolute top-3/4 right-3 p-4 rounded-full bg-[linear-gradient(90deg,#56b5e3,#7d58a5)] text-white text-4xl cursor-pointer'>
                    {/* <Icon icon="ri:lightbulb-flash-fill" /> */}
                    <div className="dropdown dropdown-top dropdown-end block">
                        <label tabIndex="0"><Icon className='cursor-pointer' icon="ri:lightbulb-flash-fill" /></label>
                        <p tabIndex="0" className="dropdown-content mb-5 menu p-2 shadow bg-base-100 rounded-box w-52 text-black text-sm">
                        অবসর সময়ের শখের মধ্যে একটা হলো অরিগামি — কাগজ ভাঁজ করে মডেল বানানো। ম্যাসাচুসেটস ইনস্টিটিউট অফ টেকনোলজি-র এক গবেষকদল সেই অবসর সময়ের শখকেই এক অন্য মাত্রায় নিয়ে গেলেন। এক ধরণের পলিমারের সাহায্য নিয়ে তারা কাগজে এমন ব্যবস্থা করলেন যে সেটা আপনা থেকে ভাঁজ হয়ে একটা রোবটের আকার নেয়। সেই রোবটটাকে তারপর তারা চালিয়েও ফেললেন। কিভাবে করলেন তারা এটা? আপনা থেকে কাগজে ওরকম নিখুঁত ভাঁজ কিভাবে সম্ভব হলো? রোবটটাকে চালানোই বা গেল কি করে? পদার্থবিদ্যার সহজ কিছু নীতি কাজে লাগিয়েই কিন্তু সম্ভব হলো এই ম্যাজিক!
                        </p>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-4/12 lg:w-auto bg-base-100 text-white text-lg font-semibold pt-0 bg-[linear-gradient(#56b5e3,#7d58a5)]">
                    {/* Sidebar content here */}
                    {/* <li className='hover:bg-white-100 bg-white p-0'><Link to="/" className=' flex justify-center'><img src={logo} alt="logo" width="111px"></img></Link></li> */}
                    <li className='mt-16'><Link to="/profile"><Icon icon="material-symbols:person" /> Profile</Link></li>
                    <li><Link to="/student-Info"><Icon icon="fluent-mdl2:work-item-bug" />Student Info</Link></li>
                    <li><Link to="/student-status"><Icon icon="ic:round-add-task" /> Student Status</Link></li>
                    <li><Link to="/assignments"><Icon icon="ic:round-person-add-alt" /> Assignments</Link></li>
                    <li><Link to="/class"><Icon icon="fluent:clipboard-task-list-rtl-24-filled" /> Class</Link></li>
                    <li><Link to="/support-topics"><Icon icon="fluent:shield-task-28-filled" /> Support Topics</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Base;