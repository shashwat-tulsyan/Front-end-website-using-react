import React from 'react';
import Homemain from './Homemain';
import Contact from './project/Contact';   
import Services from './project/Services';
//import Error from './project/Error';
import About from './project/About';
import {Route,Routes,Router} from 'react-router';
import Error1 from './project/Error1';

function App() {
  return(
  <>
  <Routes>
    <Route exact path ='/' element={<Homemain/>}></Route>
     <Route  exact path='/about' element={<About/>}></Route> 
     <Route  exact path='/contact' element={<Contact/>}></Route>   
     <Route  exact path='/services' element={<Services/>}></Route> 
     <Route element={<Error1/>}></Route> 
  </Routes> 
  </>

  );
}
export default App;
