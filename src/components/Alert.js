import React from 'react';

export default function Alert(props){
  return(
    <div>
      {props.alert && <div className='modal-alert'>
        <div className="alert alert-success py-1 w-50 mx-auto" role="alert">
          <div className='text-center'>
              <b>{props.alert.msg}</b>
          </div>
        </div>
      </div>}
    </div>
  )
}