import React from 'react';
import Navbar from '../navbar';
import Support from '../support';
import Sendmoney from '../sendmoney';
import Footer from '../footer';
import Howtousetheapp from '../howtousetheapp';

const About = ()=>
{
   return(
     <>
     <Navbar/>
     <br/><br/><br/>
     <Howtousetheapp/><br/>
     <Support/>
     <Footer/>
     </>
   )
}

export default About;
