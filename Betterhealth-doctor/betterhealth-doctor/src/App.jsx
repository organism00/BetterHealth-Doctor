import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Doctordashboard from './pages/doctorPages/DoctorDashboard'; // Ensure the file path is correct
import Login from './pages/Login';
import NewPatient from './pages/patientpages/NewPatient';
import PatientList from './pages/patientpages/PatientList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/doctordashboard' element={<Doctordashboard />} />
        <Route path= '/newpatient' element={< NewPatient/>}></Route>
        <Route path='/patientlist' element={<PatientList/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;