import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StudentInfo from './Components/Student info/StudentInfo';
import Base from './Components/Base';
import Profile from './Components/Profile/Profile';
import StudentStatus from './Components/Student-status/StudentStatus';
import Assignments from './Components/Assignments/Assignments';
import Class from './Components/Class/Class';
import Support from './Components/Support/Support';
import BatchList from './Components/Student info/BatchList';
import StudentList from './Components/Student info/StudentList';
import Home from './Components/Home';
import IndividualStudent from './Components/Student info/IndividualStudent';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Base/>}>
      <Route element={<Home/>} index></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/student-info' element={<StudentInfo/>}>
        <Route element={<BatchList/>} index/>
        <Route path="/student-info/student-list" element={<StudentList/>} />
      </Route>
      <Route path='/student-info/:userId' element={<IndividualStudent/>}></Route>
      <Route path='/student-status' element={<StudentStatus/>}></Route>
      <Route path='/assignments' element={<Assignments/>}></Route>
      <Route path='/class' element={<Class/>}></Route>
      <Route path='/support-topics' element={<Support/>}></Route>
      </Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  );
};

export default App;