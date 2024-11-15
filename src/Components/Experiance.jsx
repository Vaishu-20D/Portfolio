import React from 'react'
import experiance from './Data/experiance.json'

const Experiance = () => {
  return (
    <>
      <div className="container ex" id='experiance'>
        <h1>EXPERIANCE</h1>
{
  experiance.map((Data)=>{
    return(
    <>
    <div key={Data.id} className='ex-items text-center my-5'
    data-aos="zoom-in"
    data-aos-duration="1000"
    >
      <div className="left">
        <img src="" alt="" />
      </div>
      <div className="right">
        <h2>{Data.role}</h2>
        <h2>{Data.organisation}</h2>
        <h4>{Data.startDate} {Data.endDate} {Data.location}</h4>

        <span style={{color:"yellowgreen"}}>
          {Data.startDate}{Data.endDate}{" "}
        </span>{" "}
      </div>

    </div>
    </>
    )
  })
}
      </div>
    
      
    </>
  )
}

export default Experiance
