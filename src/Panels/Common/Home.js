import React, { useEffect } from 'react';
import Demo from './Assets/demo.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='container pl-10 mt-10'>
            <div className='grid grid-cols-2 gap-y-10'>
                <div data-aos="zoom-in" data-aos-duration="1000" className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Demo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Cyber Security & Ethical Hacking!</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Demo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Advanced Python with Freelancing</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Demo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Cyber Security & Advanced Python (Offer)!</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-4xl my-10 '>Our Other Courses</h1>
                <div className='grid grid-cols-3 gap-y-16'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={Demo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Web development!</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={Demo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Fron-end development</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={Demo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Back-end Development</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={Demo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Advanced Node-Mongo Crash Course!</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={Demo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Next.js</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;