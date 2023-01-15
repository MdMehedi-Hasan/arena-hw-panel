import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homework from './Components/Assign-homework/Homework';
import Base from './Components/Base';
import Profile from './Components/Profile/Profile';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Base/>}>
      <Route path='/profile' element={<Profile/>} index></Route>
      <Route path='/homework' element={<Homework/>}></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      </Route>
    </Routes>
  );
};

export default App;