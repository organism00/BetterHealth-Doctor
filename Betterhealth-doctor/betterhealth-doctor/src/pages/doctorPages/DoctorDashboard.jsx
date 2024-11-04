import React from 'react'
import { Link } from 'react-router-dom';
import DoughnutChart from '../../Components/doctor dashboard/DoughnutChart';
import NightingaleChart from '../../Components/doctor dashboard/Nightingale Chart'
import { FaPhoneAlt } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { FaEllipsisH } from "react-icons/fa";
import BarChart from '../../Components/doctor dashboard/BarChart'
import CardinalAreaChart from '../../Components/doctor dashboard/CardinalAreaChart'
import Datess from '../../Components/doctor dashboard/Date'
import Navbar from '../../components/utilities/Navbar';
import SideBar from '../../components/utilities/SideBar';
import { GoHome } from "react-icons/go";
import "../../styles/customScrollbar.css"
import { patientData } from '../../components/patients/PatientData';
import { HiOutlineDotsVertical } from "react-icons/hi";
import RecentQuestions from "../../components/doctor dashboard/RecentQuestions"
import LabTest from '../../Components/doctor dashboard/LabTest';



const Doctordashboard = () => {
  return (
    <>
        <div className="lg:grid lg:grid-cols-[16rem_1fr] z-0 h-screen ">
            <SideBar className=" bg-black"/>
            <main className="col-start-2 h-full w-full lg:w-full mt-40 lg:mt-0 md:mt-0">
                <Navbar />

                <div className="mt-24 h-full lg:w-full lg:ml-0 lg:pl-12 lg:pr-5 px-5">
                    <div className="flex gap-5">
                        <h1 className="text-2xl">Doctor</h1>
                        <div className="flex gap-2 items-center">
                            <GoHome />
                            <p className="font-thin"> -Doctor's Dashboard</p>
                        </div>
                    </div>
                    <main className='flex flex-col my-8 justify-between'>
                        <section className='flex flex-col lg:flex-row  gap-x-8 gap-y-8'>
                            <section className='w-full lg:w-[66%] rounded-lg h-auto'>
                                <div className='flex flex-col lg:flex-row gap-x-5 gap-y-8'>
                                    <div className='flex lg:h-72 lg:flex-row md:flex-row flex-col lg:w-[47.5%] md:w-screen w-full gap-x-7 gap-y-8 px-'>
                                        <div className='lg:w-[90%] lg:h-72 h-80 md:h-96 w-full md:w-[50%] shadow-lg rounded-lg  border border-stone-200'> 
                                            <DoughnutChart/>
                                        </div>
                                        <div className='flex flex-col w-full gap-y-8 px-1 '>
                                            <div className='h-36 md:h-44 lg:h-full rounded-lg shadow-lg border w-full md:w-[90%] lg:w-[100%] flex flex-col justify-center items-center gap-y-3'>
                                                <h1 className='text-2xl '>New Patients</h1>
                                                <span className='flex gap-x-5 items-center'>
                                                    <h1 className='text-5xl text-gray-700'>67</h1>
                                                    <span className='h-7 w-16 rounded-lg bg-green-100 text-center'>39%</span>
                                                </span>
                                            </div>
                                            <div  className='h-36 md:h-44 lg:h-full rounded-lg shadow-lg border border-stone-200 w-full md:w-[90%]  lg:w-[100%] flex flex-col justify-center items-center gap-y-3'>
                                                <h1 className='text-2xl '>Old Patients</h1>
                                                <span className='flex gap-x-5 items-center'>
                                                    <h1 className='text-5xl text-gray-700'>27</h1>
                                                    <span className='h-7 w-16 rounded-lg bg-red-100 text-center'>04%</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='lg:w-[50%] h-96 lg:h-72 flex flex-col'>
                                        <div className='flex justify-between items-center mb-3'>
                                            <h1 className='text-2xl font-light whitespace-nowrap '>Your Patients Today</h1>
                                        </div>
                                        <div className="scrollable-div h-[240px] rounded-b-none lg:h-[200px] md:h-[240px] overflow-auto font-light border border-gray-200 rounded-lg shadow-lg ">
                                            <div className="">
                                                {patientData.map((patient, index) => {
                                                    return (
                                                    <div key={index} className="flex justify-between items-center w-[100%] h-20 px-6">
                                                        <p className="text-[18px] font-light">{patient.time}</p>
                                                        <div className="w-[70%] px-2 bg-gray-100 flex items-center justify-between rounded-lg">
                                                            <div className="w-[90%] flex items-center bg-blue-00 space-x-4">
                                                                <img className="w-8 h-8 rounded-full cursor-pointer" src={patient.img} alt={`{patient.name}'s thumbnail`} />
                                                                <div className="  rounded-md flex flex-col ">
                                                                    <span className="text-lg font-normal">
                                                                        {patient.name}
                                                                    </span>
                                                                    <p className="text-[#808080]"> Diagnosis: {patient.disease}</p>
                                                                </div>
                                                            </div>
                                                            <HiOutlineDotsVertical className="w-[20px] h-[20px] cursor-pointer" />
                                                        </div>
                                                    </div>
                                                ); })}
                                            </div>
                                        </div>
                                        <div className='bg-white border-gray-200 border border-t-0 p-2 rounded-b-md flex justify-end pr-2'>
                                            <Link to={"/patientlist"} className='border border-gray-200 h-8 w-28 rounded-md place-self-center text-base font-light hover:scale-105 transition-all text-center'>All patients </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* second row */}
                                <div className='flex lg:flex-row gap-x-6 gap-y-8 mt-10 lg:h-72 flex-col '>
                                    <div className='lg:w-[50%] border border-gray-200 rounded-lg shadow-lg h-72 w-full'>
                                        <RecentQuestions/>
                                    </div>
                                    <div className='lg:w-[50%] border border-gray-200 rounded-lg shadow-lg h-72 w-full'>
                                        <LabTest/>
                                    </div>
                                </div>
                            </section>



                        {/*long second section */}
                        <section className='lg:w-[32%] h-96 lg:h-[615px] w-full shadow-lg border border-gray-200 rounded-lg flex flex-col '>
                            <div className=' w-full h-40 border-b border-b-gray-200 flex items-center pl-4 '>
                                <h1 className='text-2xl font-light whitespace-nowrap'>Upcoming Appointments</h1>
                            </div>
                            <Datess/>
                            <div className='flex flex-col overflow-y-auto scrollable-div'>
                                <div className='w-full h-[79%] rounded-b-md p-4 flex flex-col gap-y-4 '>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-x-3'>
                                            <div className='w-12 h-12 rounded-xl bg-slate-400 '></div>
                                            <div className='flex flex-col'>
                                                <h1 className='text-stone-700 hover:text-blue-400'>Shawn Hampton</h1>
                                                <h1>Emergency Appointment</h1>
                                            </div>
                                        </div>
                                        <div className='w-10 h-9 rounded-full bg-violet-200 flex items-center justify-center hover:bg-violet-300'>
                                            <FaPhoneAlt className='text-violet-900'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center border-b pb-3 border-dotted border-stone-800'>
                                        <div className='flex gap-x-9'>
                                            <div className='flex items-center'>
                                                <CiClock1 />
                                                <h1 className='text-stone-600'> 10:00</h1>
                                            </div>
                                            <h1 className='text-stone-600 font-light'>$30</h1>
                                        </div>
                                        <FaEllipsisH className='text-stone-600'/>
                                    </div>
                                </div>  
                                <div className='w-full h-[79%] rounded-b-md p-4 flex flex-col gap-y-4 '>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-x-3'>
                                            <div className='w-12 h-12 rounded-xl bg-slate-400 '></div>
                                            <div className='flex flex-col'>
                                                <h1 className='text-stone-700 hover:text-blue-400'>Shawn Hampton</h1>
                                                <h1>Emergency Appointment</h1>
                                            </div>
                                        </div>
                                        <div className='w-10 h-9 rounded-full bg-violet-200 flex items-center justify-center hover:bg-violet-300'>
                                            <FaPhoneAlt className='text-violet-900'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center border-b pb-3 border-dotted border-stone-800'>
                                        <div className='flex gap-x-9'>
                                            <div className='flex items-center'>
                                                <CiClock1 />
                                                <h1 className='text-stone-600'> 10:00</h1>
                                            </div>
                                            <h1 className='text-stone-600 font-light'>$30</h1>
                                        </div>
                                        <FaEllipsisH className='text-stone-600'/>
                                    </div>
                                </div>  
                                <div className='w-full h-[79%] rounded-b-md p-4 flex flex-col gap-y-4 '>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-x-3'>
                                            <div className='w-12 h-12 rounded-xl bg-slate-400 '></div>
                                            <div className='flex flex-col'>
                                                <h1 className='text-stone-700 hover:text-blue-400'>Shawn Hampton</h1>
                                                <h1>Emergency Appointment</h1>
                                            </div>
                                        </div>
                                        <div className='w-10 h-9 rounded-full bg-violet-200 flex items-center justify-center hover:bg-violet-300'>
                                            <FaPhoneAlt className='text-violet-900'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center border-b pb-3 border-dotted border-stone-800'>
                                        <div className='flex gap-x-9'>
                                            <div className='flex items-center'>
                                                <CiClock1 />
                                                <h1 className='text-stone-600'> 10:00</h1>
                                            </div>
                                            <h1 className='text-stone-600 font-light'>$30</h1>
                                        </div>
                                        <FaEllipsisH className='text-stone-600'/>
                                    </div>
                                </div>  
                                <div className='w-full h-[79%] rounded-b-md p-4 flex flex-col gap-y-4 '>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-x-3'>
                                            <div className='w-12 h-12 rounded-xl bg-slate-400 '></div>
                                            <div className='flex flex-col'>
                                                <h1 className='text-stone-700 hover:text-blue-400'>Shawn Hampton</h1>
                                                <h1>Emergency Appointment</h1>
                                            </div>
                                        </div>
                                        <div className='w-10 h-9 rounded-full bg-violet-200 flex items-center justify-center hover:bg-violet-300'>
                                            <FaPhoneAlt className='text-violet-900'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center border-b pb-3 border-dotted border-stone-800'>
                                        <div className='flex gap-x-9'>
                                            <div className='flex items-center'>
                                                <CiClock1 />
                                                <h1 className='text-stone-600'> 10:00</h1>
                                            </div>
                                            <h1 className='text-stone-600 font-light'>$30</h1>
                                        </div>
                                        <FaEllipsisH className='text-stone-600'/>
                                    </div>
                                </div>  
                                <div className='w-full h-[79%] rounded-b-md p-4 flex flex-col gap-y-4 '>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-x-3'>
                                            <div className='w-12 h-12 rounded-xl bg-slate-400 '></div>
                                            <div className='flex flex-col'>
                                                <h1 className='text-stone-700 hover:text-blue-400'>Shawn Hampton</h1>
                                                <h1>Emergency Appointment</h1>
                                            </div>
                                        </div>
                                        <div className='w-10 h-9 rounded-full bg-violet-200 flex items-center justify-center hover:bg-violet-300'>
                                            <FaPhoneAlt className='text-violet-900'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center border-b pb-3 border-dotted border-stone-800'>
                                        <div className='flex gap-x-9'>
                                            <div className='flex items-center'>
                                                <CiClock1 />
                                                <h1 className='text-stone-600'> 10:00</h1>
                                            </div>
                                            <h1 className='text-stone-600 font-light'>$30</h1>
                                        </div>
                                        <FaEllipsisH className='text-stone-600'/>
                                    </div>
                                </div>  
                                <div className='w-full h-[79%] rounded-b-md p-4 flex flex-col gap-y-4 '>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-x-3'>
                                            <div className='w-12 h-12 rounded-xl bg-slate-400 '></div>
                                            <div className='flex flex-col'>
                                                <h1 className='text-stone-700 hover:text-blue-400'>Shawn Hampton</h1>
                                                <h1>Emergency Appointment</h1>
                                            </div>
                                        </div>
                                        <div className='w-10 h-9 rounded-full bg-violet-200 flex items-center justify-center hover:bg-violet-300'>
                                            <FaPhoneAlt className='text-violet-900'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center border-b pb-3 border-dotted border-stone-800'>
                                        <div className='flex gap-x-9'>
                                            <div className='flex items-center'>
                                                <CiClock1 />
                                                <h1 className='text-stone-600'> 10:00</h1>
                                            </div>
                                            <h1 className='text-stone-600 font-light'>$30</h1>
                                        </div>
                                        <FaEllipsisH className='text-stone-600'/>
                                    </div>
                                </div>  
                                <div className='w-full h-[79%] rounded-b-md p-4 flex flex-col gap-y-4 '>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-x-3'>
                                            <div className='w-12 h-12 rounded-xl bg-slate-400 '></div>
                                            <div className='flex flex-col'>
                                                <h1 className='text-stone-700 hover:text-blue-400'>Shawn Hampton</h1>
                                                <h1>Emergency Appointment</h1>
                                            </div>
                                        </div>
                                        <div className='w-10 h-9 rounded-full bg-violet-200 flex items-center justify-center hover:bg-violet-300'>
                                            <FaPhoneAlt className='text-violet-900'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center border-b pb-3 border-dotted border-stone-800'>
                                        <div className='flex gap-x-9'>
                                            <div className='flex items-center'>
                                                <CiClock1 />
                                                <h1 className='text-stone-600'> 10:00</h1>
                                            </div>
                                            <h1 className='text-stone-600 font-light'>$30</h1>
                                        </div>
                                        <FaEllipsisH className='text-stone-600'/>
                                    </div>
                                </div>  
                                <div className='w-full h-[79%] rounded-b-md p-4 flex flex-col gap-y-4 '>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-x-3'>
                                            <div className='w-12 h-12 rounded-xl bg-slate-400 '></div>
                                            <div className='flex flex-col'>
                                                <h1 className='text-stone-700 hover:text-blue-400'>Shawn Hampton</h1>
                                                <h1>Emergency Appointment</h1>
                                            </div>
                                        </div>
                                        <div className='w-10 h-9 rounded-full bg-violet-200 flex items-center justify-center hover:bg-violet-300'>
                                            <FaPhoneAlt className='text-violet-900'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center border-b pb-3 border-dotted border-stone-800'>
                                        <div className='flex gap-x-9'>
                                            <div className='flex items-center'>
                                                <CiClock1 />
                                                <h1 className='text-stone-600'> 10:00</h1>
                                            </div>
                                            <h1 className='text-stone-600 font-light'>$30</h1>
                                        </div>
                                        <FaEllipsisH className='text-stone-600'/>
                                    </div>
                                </div>  
                                <div className='w-full h-[79%] rounded-b-md p-4 flex flex-col gap-y-4 '>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-x-3'>
                                            <div className='w-12 h-12 rounded-xl bg-slate-400 '></div>
                                            <div className='flex flex-col'>
                                                <h1 className='text-stone-700 hover:text-blue-400'>Shawn Hampton</h1>
                                                <h1>Emergency Appointment</h1>
                                            </div>
                                        </div>
                                        <div className='w-10 h-9 rounded-full bg-violet-200 flex items-center justify-center hover:bg-violet-300'>
                                            <FaPhoneAlt className='text-violet-900'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center border-b pb-3 border-dotted border-stone-800'>
                                        <div className='flex gap-x-9'>
                                            <div className='flex items-center'>
                                                <CiClock1 />
                                                <h1 className='text-stone-600'> 10:00</h1>
                                            </div>
                                            <h1 className='text-stone-600 font-light'>$30</h1>
                                        </div>
                                        <FaEllipsisH className='text-stone-600'/>
                                    </div>
                                </div>  
                                <div className='w-full h-[79%] rounded-b-md p-4 flex flex-col gap-y-4 '>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-x-3'>
                                            <div className='w-12 h-12 rounded-xl bg-slate-400 '></div>
                                            <div className='flex flex-col'>
                                                <h1 className='text-stone-700 hover:text-blue-400'>Shawn Hampton</h1>
                                                <h1>Emergency Appointment</h1>
                                            </div>
                                        </div>
                                        <div className='w-10 h-9 rounded-full bg-violet-200 flex items-center justify-center hover:bg-violet-300'>
                                            <FaPhoneAlt className='text-violet-900'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center border-b pb-3 border-dotted border-stone-800'>
                                        <div className='flex gap-x-9'>
                                            <div className='flex items-center'>
                                                <CiClock1 />
                                                <h1 className='text-stone-600'> 10:00</h1>
                                            </div>
                                            <h1 className='text-stone-600 font-light'>$30</h1>
                                        </div>
                                        <FaEllipsisH className='text-stone-600'/>
                                    </div>
                                </div>  
                                <div className='w-full h-[79%] rounded-b-md p-4 flex flex-col gap-y-4 '>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-x-3'>
                                            <div className='w-12 h-12 rounded-xl bg-slate-400 '></div>
                                            <div className='flex flex-col'>
                                                <h1 className='text-stone-700 hover:text-blue-400'>Shawn Hampton</h1>
                                                <h1>Emergency Appointment</h1>
                                            </div>
                                        </div>
                                        <div className='w-10 h-9 rounded-full bg-violet-200 flex items-center justify-center hover:bg-violet-300'>
                                            <FaPhoneAlt className='text-violet-900'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center border-b pb-3 border-dotted border-stone-800'>
                                        <div className='flex gap-x-9'>
                                            <div className='flex items-center'>
                                                <CiClock1 />
                                                <h1 className='text-stone-600'> 10:00</h1>
                                            </div>
                                            <h1 className='text-stone-600 font-light'>$30</h1>
                                        </div>
                                        <FaEllipsisH className='text-stone-600'/>
                                    </div>
                                </div>  
                            </div>
                            <div className='border-gray-200 border-0 border-t border-t-1 p-2 rounded-b-md flex justify-end pr-2'>
                                <Link to={"/appointments"} className='border border-gray-200 h-8 w-28 rounded-md place-self-center text-base font-light hover:scale-105 transition-all text-center'>Appointments </Link>
                            </div>
                        </section>
                        </section>

                
                        <section className='h-auto  flex gap-x-8 lg:flex-row flex-col mt-10'> 
                            <div className='lg:w-[31%] w-full  h-96 rounded-lg border shadow-lg border-gray-200 flex flex-col gap-y-9 items-center'>
                                <div className='w-full h-14 border-b border-b-gray-200 flex items-center pl-4'>
                                    <h1 className='text-3xl font-light whitespace-nowrap'>Analytics</h1>
                                </div>
                                <div className='w-[370px]'>
                                    <CardinalAreaChart/>
                                </div>
                            </div>
                            <div className='lg:w-[32.5%] w-full h-96 rounded-lg border shadow-lg border-gray-200 flex flex-col items-center  gap-y-14'>
                                <div className='w-full h-14 border-b border-b-gray-200 flex items-center pl-4'>
                                    <h1 className='text-3xl font-light whitespace-nowrap'>Appointments Overview</h1>
                                </div>
                                <NightingaleChart/>
                            </div>
                            <div className='lg:w-[31%] w-full h-96 rounded-lg border shadow-lg border-gray-200 flex flex-col items-center gap-y-2'>
                                <div className='w-full h-14 border-b border-b-gray-200 flex items-center pl-4'>
                                    <h1 className='text-3xl font-light whitespace-nowrap'>Overall appointment</h1>
                                </div>
                                <BarChart/>
                            </div>
                        </section>
                    </main>
                </div>
            </main>
        </div>
    </>
  )
}

export default Doctordashboard