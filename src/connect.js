import React from 'react';

const Connect = () => {
  return(
    <>
     <section className='container connectmain mt-5'>
     <div class="container conmain">
  <div class="row">
    <div class="col-12 col-lg-5 mx-auto ">
       <h3>Connect with our<br/>sales team</h3>
<p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis
</p>
<div className='mt-4 connimg'>
  <img src='./img/connect.jpg'alt='connect image' className='image-fluid'/>
</div>

    </div>
    <div class="col-12 col-lg-6 mx-auto ">
      <div className='conform m-3 p-3'>
      <div class="row m-3 ">
  <div class="col ">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
<div class="row m-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone Number"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Email" aria-label="Email"/>
  </div>
</div>
<div class="row m-3">
  <div class="col-12">
    <input type="text" class="form-control" placeholder="Add Address" aria-label="First name"/>
  </div>
  
</div>
<div class="row m-3">
  <div class="col-12 ">
    <input type="text" class="form-control" placeholder="Enter your message" aria-label="Enter your message"/>
  </div>
  </div>
  <div className='row m-4 chech'>
    <div className='col-12'>
      <label className="form-check-label" for="inlineFormCheck">    <input className="form-check-input m-1" type="checkbox" id="inlineFormCheck"/>
      I have read and agree for the term and conditions.
      </label>
    </div>
    </div>
  <div class="d-grid gap-2 m-4">
  <button class="btn btn-primary" type="button">Button</button>
</div>

  </div>

      </div>
    </div>
  </div>

     </section>
    </>
  )
   
};

export default Connect;
