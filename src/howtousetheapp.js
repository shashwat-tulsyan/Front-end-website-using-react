import React,{useState} from 'react';
import Use from './api/howToUse'
const Howtousetheapp = () =>{
    const[data ,setData]=useState(Use);
   //console.log(data);


  return <>
      <section className='mainuse container mt-3 mb-5'> 
      <div>
      <div className="row text-center">
    <div className="col-12 col-lg-6">
        <img src='./img/ser.jpg' alt="image-ha" className='image-fluid'/>
    </div>
    <div className="col-12 col-lg-6">
        <div className='minititle'>
      <h5 className='mt-4'>--abolable @google and playstore only</h5>
      <h4 className='mt-5'>How to use the app?</h4>
      {data.map((curr)=>{
          const{id,title,info}=curr;

          return(
              <>
              <div className='mini'>
         <h5 className='mt-3'><span className='num'> {id} </span>{title}</h5>
         <p className='text-left mt-3'>{info}</p>
        </div>
              </>
          )

      })}
      {/* <div className='mainuse-number'>1</div> */}
        
        <div className='buton3'>
      <button className="btn btn-outline-success but" type="submit">Learn-more</button>


      </div>
        </div>
        

    </div>
  </div>

      </div>
      

      </section>
  </>
};

export default Howtousetheapp;
