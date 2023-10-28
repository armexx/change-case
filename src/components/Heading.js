import React from 'react';

export default function Heading(props){
  return(
    <h1 className={`my-3 text-primary`}>{props.heading}</h1>
  )
}