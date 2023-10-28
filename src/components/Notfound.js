import React from 'react';

function Notfound(props){
  return (
    <div className='container'>
      <div className='d-flex justify-content-center align-items-center divht'>
        <div className={`w-100 text-center bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'} py-4`}>
          <h3>Error 404 Page Not Found</h3>
          <p className='m-0'>The requested url does not exist!</p>
        </div>
      </div>
    </div>
  )
}

export default Notfound