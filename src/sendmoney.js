import React, { useState } from 'react';
import send from './api/send';

const Sendmoney = () => {
    const[data ,setData]=useState(send);
    console.log(data)
  return <>
  <section className='mainsend container text-center'>
      <h3>How To Send Money</h3>
       
      <div className="container ">
  <div className="row">

   { data.map((cur)=>{
  
    const{id,logo,title,info}=cur;

        return(
            <>

            <div className="col-12 col-lg-4 bord" key={id}>
       <i className={`logo ${logo}`}/>
       <h4>{title}</h4>
       <di>
           <p>{info}</p>
       </di>
     </div>
            </>
        )



   })}

    
  </div>
</div>
   
  </section>

  </>
};

export default Sendmoney;

