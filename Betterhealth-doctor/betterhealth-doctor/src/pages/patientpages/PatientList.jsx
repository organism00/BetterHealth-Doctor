import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { patientData as initialPatientData } from '../../components/patients/PatientData';
import { Link, useNavigate } from 'react-router-dom';
import SideBar from '../../components/utilities/SideBar';
import Navbar from '../../components/utilities/Navbar';

// Icons
import { GoHome } from "react-icons/go";
import { TbArrowsSort } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function PatientList() {
  const navigate = useNavigate()
  const [patientPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1);
  const [patients, setPatients] = useState(initialPatientData);
  
  const indexOfLastPatient = currentPage * patientPerPage
  const indexOfFirstPatient = indexOfLastPatient - patientPerPage
  const currentPatientList = patients.slice(indexOfFirstPatient, indexOfLastPatient)

  const pageNumber = []
  for (let i = 1; i <= Math.ceil(patients.length / patientPerPage); i++) {
    pageNumber.push(i)
  }

  const handleDelete = (id) => {
    const newPatients = patients.filter(patient => patient.id !== id)
    setPatients(newPatients)
  }

  const handleEdit = (id) => {
    navigate('/editpatient', {state: id})
  }

  const handleView = (id) => {
    navigate('/patientdetails', {state: id})
  }

  // Edit menu
  const [openEditMenu, setOpenEditMenu] = useState(false);
  const [id, setId] = useState(null);

  const toggleEditMenu = (item) => {
    setOpenEditMenu(!openEditMenu);
    setId(item);
  };

  return (
    <div className='flex gap-0'>
      <SideBar/>

      <Navbar />
      <div className='mt-20 m-8 w-[100%] '>
        <div className='flex my-10 justify-between'>
          <div className='flex gap-x-5 px-5 lg:px-0 md:px-8 md:ml-64 lg:ml-0'>
              <h1 className="text-2xl">Patients</h1>
              <div className="flex gap-2 items-center">
                <Link to='/admindashboard'><GoHome/></Link>
                <p className="font-thin"> - Patients</p>
              </div>
          </div>
          <div className='flex gap-2'>
              <input type="text" className='md:w-[350px] border px-4 rounded' />
              <button className='bg-[#5156be] text-white px-4 rounded '>Search</button>
          </div>
        </div>

        <div className='flex flex-col items-center '>
          <TableContainer component={Paper} style={{width: '100%'}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Patient <br /> ID <TbArrowsSort/></div></TableCell>
                  <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '> Date<br />Checked In <TbArrowsSort/></div></TableCell>
                  <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Patient <br /> Name <TbArrowsSort/></div></TableCell>
                  <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Doctor <br /> Assigned <TbArrowsSort/></div></TableCell>
                  <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Disease <TbArrowsSort/></div></TableCell>
                  <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Status <TbArrowsSort/></div></TableCell>
                  <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Room  <br />No <TbArrowsSort/></div></TableCell>
                  <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Settings <TbArrowsSort/></div></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentPatientList.map((row) => (
                  <TableRow key={row.id} className=''>
                    <TableCell><div className='text-[12px]'>{row.id}</div></TableCell>
                    <TableCell><div className='text-[12px]'>{row.dateCheckedIn} {row.time}</div></TableCell>
                    <TableCell><div className='text-[12px]'>{row.name}</div></TableCell>
                    <TableCell><div className='text-[12px]'>{row.doctorAssigned}</div></TableCell>
                    <TableCell><div className='text-[12px]'>{row.disease}</div></TableCell>
                    <TableCell><div className='text-[12px]'>{row.status}</div></TableCell>
                    <TableCell><div className='text-[12px]'>{row.roomNo}</div></TableCell>
                    <TableCell style={{display: 'flex', gap: 5}} >
                      <div
                        variant="contained"
                        style={{ minWidth: 'unset' }}
                        className='flex items-center justify-center cursor-pointer rounded-full w-[30px] h-[30px] relative '>
                        <HiOutlineDotsHorizontal
                          className="text-[25px] text-[#7e8299] cursor-pointer "
                          onClick={() => toggleEditMenu(row.id)}
                        />

                        {id === row.id && openEditMenu ? (
                          <div className="shadow-lg px-6 py-4 rounded-lg border absolute right-8 top-4 bg-white text-[14px] text-left grid gap-4 w-[150px] z-50 ">
                            <p onClick={() => handleView(row.id) }>View</p>
                            <p onClick={() => handleEdit(row.id)}>Edit</p>
                            <p onClick={() => handleDelete(row.id)}>Delete</p>
                          </div>
                        ) : null}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {currentPatientList ? (
            <div className='bg-[#e4e6ef] text-text px-4 py-4 flex justify-between items-center rounded-b-lg text-[12px] w-[100%] '>
              <p>Showing {currentPage} to {patientPerPage} of {patients.length} enteries</p>

              <div className='flex gap-4'>
                <button onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`${currentPage === 1 ? 'opacity-40' : 'opacity-100'}`}>Previous</button>
                {pageNumber.map((number, index) => (
                  <button key={index} onClick={() => setCurrentPage(number)}
                  style={currentPage === number ? {
                    borderRadius: '5px',
                    color: 'white',
                    fontWeight: 'bold',
                    width: '30px',
                    height: '35px',
                    backgroundColor: '#5156be',
                    transition: 'all 0.6s ease'
                  } : null}>{number}</button>
                ))}
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === pageNumber.length}
                  className={`${currentPage === pageNumber.length ? 'opacity-40' : 'opacity-100'}`}>Next</button>
              </div>
            </div>
          ) : null}
        </div>
          
      </div>
    </div>
  )
}

export default PatientList