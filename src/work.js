import React,{useState} from 'react';
import Workapi from './api/workapi'

const Work = () => {

    const[date,setData]=useState(Workapi);
   //console.log(date);
  return(
      <>
       <div>
       <section className='main-head container'>
           <h3 className='head1 text-center'>How does it work</h3>
           <div className="data row">
               {date.map((cc)=>{
                   const{id,logo,title,info}=cc;

                   return(
                        <>
                        <div className="col col-12 col-lg-4 text-center" key={id}>
                        <i className={` logo ${logo}`}></i> 
                        <h4>{title}</h4>
                        <p className=''>{info}</p>
                        </div>
                        </>
                   )

               })}
          </div>
          </section>
          </div>
          </> 
) 
     
};

export default Work;
