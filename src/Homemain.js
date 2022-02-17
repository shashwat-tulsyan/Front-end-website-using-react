import React from 'react';
import Navbar from './navbar';
import Header from './Header';
import Work from './work';
import Howtousetheapp from './howtousetheapp';
import Support from './support';
import Sendmoney from './sendmoney';
import Connect from './connect';
import Footer from './footer';
import './index.css';

const Homemain = () => {
  return(

<>
<Navbar/>
<br/>

<Header/>
<Work/>
<Howtousetheapp/>
    <br/>
    <Support/>
    <br/>
    <Sendmoney/>
    <Connect/>
    <Footer/> 
</>

  ) 
  

    

};

export default Homemain;
