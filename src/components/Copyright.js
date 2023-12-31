import React from 'react';

function Copyright(props){
  let cYear = new Date().getFullYear();
  return (
    <footer className={`text-center text-lg-start bg-${props.mode==='light'?'light':'dark'}`}>
        <div className={`text-center p-4 text-${props.mode==='light'?'dark':'light'}`}>
        Copyright © {cYear}: <span className="text-reset fw-bold">changecase-onlinetool</span>
        <p className={`sm-font text-${props.mode==='light'?'dark':'light'} m-0`}>Supported by awesomemediatech</p>
        </div>
    </footer>
  )
}

export default Copyright