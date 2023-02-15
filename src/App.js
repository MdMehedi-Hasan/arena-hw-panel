import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StudentInfo from './Panels/Teachers Panel/Components/Student info/StudentInfo';
import Base from './Panels/Common/Base';
import Profile from './Panels/Teachers Panel/Components/Profile/Profile';
import StudentStatus from './Panels/Teachers Panel/Components/Student-status/StudentStatus';
import Assignments from './Panels/Teachers Panel/Components/Assignments/Assignments';
import Class from './Panels/Teachers Panel/Components/Class/Class';
import Support from './Panels/Teachers Panel/Components/Support/Support';
import BatchList from './Panels/Teachers Panel/Components/Student info/BatchList';
import StudentList from './Panels/Teachers Panel/Components/Student info/StudentList';
import Home from './Panels/Common/Home';
import IndividualStudent from './Panels/Teachers Panel/Components/Indivisual Student/IndividualStudent';
import NotFound from './Panels/Common/NotFound';
import Attendance from './Panels/Teachers Panel/Components/Indivisual Student/Attendance'
import Assignment from './Panels/Teachers Panel/Components/Indivisual Student/Assignment'
import Assesment from './Panels/Teachers Panel/Components/Indivisual Student/Assesment'
import Supports from './Panels/Teachers Panel/Components/Indivisual Student/Supports'
import StudentProfile from './Panels/Student Panel/Components/StudentProfile';
import SubmitAssignment from './Panels/Student Panel/Components/SubmitAssignment';
import JoinClass from './Panels/Student Panel/Components/JoinClass';
import SupportTopics from './Panels/Student Panel/Components/SupportTopics';
import ChangePassword from './Panels/Student Panel/Components/ChangePassword';
import Login from './Panels/Common/Login';

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
      <Route path='/student-info/student-list/:userId' element={<IndividualStudent/>}>
        <Route element={<Attendance/>} index></Route>
        <Route path='assignment' element={<Assignment/>}></Route>
        <Route path='assesment' element={<Assesment/>}></Route>
        <Route path='supports' element={<Supports/>}></Route>
      </Route>
      <Route path='/student-status' element={<StudentStatus/>}></Route>
      <Route path='/assignments' element={<Assignments/>}></Route>
      <Route path='/class' element={<Class/>}></Route>
      <Route path='/support-topics' element={<Support/>}></Route>

      {/*======================================================================================
                                 ⬇️⬇️⬇️ Specific routes for Students Only ⬇️⬇️⬇️
        =======================================================================================*/}
        <Route path='/student-profile' element={<StudentProfile/>}></Route>
        <Route path='/submit-assignment' element={<SubmitAssignment/>}></Route>
        <Route path='/join-class' element={<JoinClass/>}></Route>
        <Route path='/create-ticket' element={<SupportTopics/>}></Route>
        <Route path='/change-password' element={<ChangePassword/>}></Route>
      </Route>
      <Route path='*' element={<NotFound/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  );
};

export default App;