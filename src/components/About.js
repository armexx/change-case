import React from 'react';
import Heading from './Heading';
import dp from '../dp/ani.jpg';

export default function About(props){
  return(
    <div>
        <Heading heading="About Me"/>
        <div>
          <div className='dp'>
            <img src={dp} alt='developer of the app'/>
          </div>
        </div>
        <div className={`text-${props.mode==='light'?'dark':'light'}`}>
          <p>Hi there, I'm anirban. I made this application for online users who are looking for a text case converter. This app will be helpful in converting any text content to change case according to your needs. Improve the overall presentation of your text and ensure consistency with ease. Try our case converter today and unlock the potential for polished, professional, and error-free content. Streamline your text formatting process and achieve the best results in no time. I made this app totally free, and I will keep it free forever. If you want to support me, then please donate by buying me a Ko-fi. Your little support will be my inspiration for my hard work. Thanks.</p>
          <a href='https://ko-fi.com/changecase' target='_blank' rel="noreferrer" className='btn btn-sm btn-light text-decoration-none'><img src='https://raw.githubusercontent.com/armexx/hello-atx/master/images/kofi.png' alt='ko-fi'/> Buy me a ko-fi</a>
        </div>
    </div>
  )
}