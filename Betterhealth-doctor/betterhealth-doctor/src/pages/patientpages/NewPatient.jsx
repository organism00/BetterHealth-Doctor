import React from 'react'

import Navbar from '../../components/utilities/Navbar'
import SideBar from '../../components/utilities/SideBar'

const NewPatient = () => {
   
  return (
    <>
        <main className="lg:grid lg:grid-cols-[16rem_1fr] z-0">
            <SideBar/>
            <Navbar/>
            <main className="col-start-2 h-full w-full md:w-screen lg:w-full px-7 lg:mt-0 md:mt-0">
            <form className='flex flex-col my-24 '>
                <div className='w-[100%] mb-10 mt-5 h-auto lg:w-full pt-6  pb-14 md:overflow-x-auto overflow-x-auto  shadow-lg border border-stone-200 rounded-2xl mx-auto px-5'>
                    <h1 className='text-2xl my-6'>{"Patient's Information"}</h1>
                    <div className='lg:grid lg:grid-cols-2  lg:gap-x-12 lg:gap-y-6 flex flex-col gap-y-7 md:grid grid-cols-2 gap-x-2' > 
                        <input type="text" placeholder='First Name' className='border border-stone-500 p-2 rounded-md outline-violet-500' required/>
                        <input type="text" placeholder='Last Name' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Address' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Phone' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="email" placeholder='Email' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Emergency Contact' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '/>
                        <input type="text" placeholder='Contact Number' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '/>
                        <input type="text" placeholder='Contact Address' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="email" placeholder='Contact Email' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Contact Relationship' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="date" title="Enter your age" placeholder='Age' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <select className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' >
                            <option value="Select Gender" defaultValue disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <select className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' >
                            <option value="Select Gender" defaultValue disabled>Genotype</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <select className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' >
                            <option value="Select Gender" defaultValue disabled>Blood Group</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <select className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' >
                            <option value="Select Gender" defaultValue disabled>Has Ulcer</option>
                            <option value="Male">Yes</option>
                            <option value="Female">No</option>
                        </select>
                        <input type='file' accept="image/*" title="Image" className='flex flex-col border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                    </div>
                </div>
                <div className='w-[100%] mb-10 mt-5 h-auto pt-6  pb-14 md:overflow-x-auto overflow-x-auto md:w-full shadow-lg border border-stone-200 rounded-2xl mx-auto px-5'>
                    <h1  className='text-2xl my-6'> Contact</h1>
                    <div className='lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6 flex flex-col gap-y-7 md:grid grid-cols-2 gap-x-2'>
                        <input type="text" placeholder='First Name' className='border border-stone-500 p-2 rounded-md outline-violet-500' />
                        <input type="text" placeholder='Last Name' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Address' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Phone' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="email" placeholder='Email' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Emergency Contact' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '/>
                    </div>
                </div>
                <div className='w-[100%] mb-10 mt-5 h-auto  pt-6  pb-14 md:overflow-x-auto overflow-x-auto md:w-full shadow-lg border border-stone-200 rounded-2xl mx-auto px-5'>
                    <h1  className='text-2xl my-6'> Insurance</h1>
                    <div className='lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6 flex flex-col gap-y-7 md:grid grid-cols-2 gap-x-2'>
                        <input type="text" placeholder='Insurance Provider Name' className='border border-stone-500 p-2 rounded-md outline-violet-500' />
                        <input type="text" placeholder='Insurance Policy Number' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Group Number' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Provide Contact Information' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' required/>
                    </div>
                </div>
                <button className='bg-violet-500 w-60 lg:w-1/4 p-4 text-white rounded-md self-end text-xl'> Add patient</button>
            </form>
            </main>
        </main>
    </>
  )
}
export default NewPatient