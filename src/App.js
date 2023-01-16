import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StudentInfo from './Components/Student info/StudentInfo';
import Base from './Components/Base';
import Profile from './Components/Profile/Profile';
import StudentStatus from './Components/Student-status/StudentStatus';
import Assignments from './Components/Assignments/Assignments';
import Class from './Components/Class/Class';
import Support from './Components/Support/Support';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Base/>}>
      <Route element={<Profile/>} index></Route>
      <Route path='/student-Info' element={<StudentInfo/>}></Route>
      <Route path='/student-status' element={<StudentStatus/>}></Route>
      <Route path='/assignments' element={<Assignments/>}></Route>
      <Route path='/class' element={<Class/>}></Route>
      <Route path='/support-topics' element={<Support/>}></Route>
      </Route>
    </Routes>
  );
};

export default App;