import React from 'react';

const Header = () => {
  return <>
  <header className=''>
  <div className='mainhead container'>
      <div className="container cn">
  <div className="row">
      
 <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-item-start ">
      <h1 className='display2'>Online payment mode<br/>Easy for you</h1>
      <p className='Main-para'>Means of payment means banknotes and coins (cash), and deposits and credit on an account with 
       a financial institution or a similar institution which can be operated by means of payment instruments.</p>
       <h3>Get early access for you</h3>
       <div className='inputgroup'>
           <input className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"/>
           <div className="input-group-button"><button>Get it now</button></div>
        </div>
</div>       
    <div className="mainimg col-12  col-lg-6 justify-content-center align-items-center d-flex header-right-side ">
    {/* <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images"> */}


    <img src='./img/logo192.png' alt='image' className='img-fluid'/>
    <img src='./img/lo2.png' alt='image' className='img-fluid img2' />


    </div>
  </div>

      </div>
      </div>

      </header>
  </>;
};

export default Header;
