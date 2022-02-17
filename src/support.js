import React ,{useState}from 'react';
import Workapi from './api/workapi'


const Support = () => {
    const[data,setData]=useState(Workapi);

  return <>
<section className='mainuse container mt-5 mb-5'> 
      <div>
      <div className="row text-center">
    
    <div className="col-12 col-lg-6">
        <div className='minititle'>
      <h5 className='mt-2'>--Support in any languages</h5>
      <h4 className='mt-5'>World class support is avilable 24/7</h4>
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
        
        <div className='buton3'>
      <button className="btn btn-outline-success but" type="submit">Learn-more</button>
    </div>
    
 </div>
        

    </div>
    <div className="col-12 col-lg-6">
        <img src='./img/ser.jpg' alt="image-ha" className='image-fluid'/>
    </div>
  </div>

      </div>
      

      </section>

  </>
};

export default Support;
