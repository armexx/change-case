import React, {useState,useEffect} from 'react';
import Heading from './Heading';

export default function CaseChange(props){
  const [text,setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  useEffect(() => {
    const words = text.split(/\s+/);  // array of words
    let wordCount = 0; // update word count
    words.forEach((word) => {
      if (word.trim() !== ''){
        wordCount++;
      }
    });
    setWordCount(wordCount);
    // update char count (including whitespaces)
    setCharCount(text.length);
    // line count if textarea is !empty else print lines.length
    const lines = text.split('\n');
    setLineCount(text.trim() === '' ? 0 : lines.length);
  }, [text]);

  const changeText = (event)=>{
    setText(event.target.value);
  }
  const convertUpcase = ()=>{
    let newtxt = text.toUpperCase();
    setText(newtxt);
  }
  const convertLowcase = ()=>{
    let newtxt = text.toLowerCase();
    setText(newtxt);
  }
  const sentCase = ()=>{
    let newtxt = text.toLowerCase();
    let nwTxt = newtxt.charAt(0).toUpperCase() + newtxt.slice(1);
    setText(nwTxt);
  }
  const titleCase = ()=>{
    let newtxt = text.toLowerCase().split(' ');
    let ftx = newtxt.map(function(word){
      return (word.charAt(0).toUpperCase() + word.slice(1));
    });
    setText(ftx.join(' '));
  }
  const revCase = ()=>{
    const reversed = text.split('').reverse().join('');
    setText(reversed);
  }
  const rmXtraSpc = ()=>{
    let newtxt = text.split(/[ ]+/);
    setText(newtxt.join(" "));
  }
  const clearTxt = ()=>{
    let newtxt = '';
    setText(newtxt);
  }
  const copyText = ()=>{
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied!");
  }
  const downloadTxt = ()=>{
    // Create a Blob object with the text content
    const txtfile = new Blob([document.getElementById('textbox').value],{type: 'text/plain;charset=utf-8'});
    const url = window.URL.createObjectURL(txtfile); // Create a URL for the Blob
    const link = document.createElement('a'); // Create a link element
    link.href = url;
    let dt = new Date();
    let microTime = dt.getTime();
    link.download = "ChangeCaseContent_"+microTime+".txt";
    link.click(); // Simulate a click on the link to trigger download
    window.URL.revokeObjectURL(url); // Clean up by revoking the URL
  }
    return(
    <div>
      <Heading heading="Online case converter"/>
      <p className={`text-${props.mode==='light'?'dark':'light'} text-start`}>Looking for an efficient online case converter? You're in the right place! Our online free tool offers seamless case changes, making it easy to convert uppercase to lowercase and more. With our case converter, you can effortlessly transform text to match your specific needs. Try our online case converter today for a hassle-free way to convert case online and enhance your text formatting. Experience the convenience of our online free tool and unlock the power of case change online. Your one-stop solution for all your case conversion needs is just a click away!</p>
      <div className="mb-3">
        <div className='position-relative'>
          <button disabled={text.length===0} className='btn btn-sm btn-success position-absolute top-0 end-0' onClick={copyText}>copy</button>
          <textarea id='textbox' className={`form-control bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`} rows='8' placeholder='Just enter text here to choose the case you want to convert it' value={text} onChange={changeText}></textarea>
        </div>
        <div className='mt-2'>
          <div className='d-flex flex-row flex-wrap justify-content-start'>
            <button disabled={text.length===0} className="btn btn-sm btn-primary m-1" onClick={convertUpcase}>UPPER CASE</button>
            <button disabled={text.length===0} className="btn btn-sm btn-primary m-1" onClick={convertLowcase}>lower case</button>
            <button disabled={text.length===0} className="btn btn-sm btn-primary m-1" onClick={sentCase}>Sentence case</button>
            <button disabled={text.length===0} className="btn btn-sm btn-primary m-1" onClick={titleCase}>Title Case</button>
            <button disabled={text.length===0} className="btn btn-sm btn-primary m-1" onClick={revCase}>esreveR</button>
            <button disabled={text.length===0} className="btn btn-sm btn-info m-1" onClick={rmXtraSpc}>remove xtra [space]</button>
            <button disabled={text.length===0} className="btn btn-sm btn-success m-1" onClick={downloadTxt}>Download file</button>
            <button disabled={text.length===0} className="btn btn-sm btn-danger m-1" onClick={clearTxt}>clear</button>
          </div>
        </div>
      </div>
      <div className='mt-3 text-start' style={{color: props.mode==='light'?'#000':'#fff'}}>
        <p><b>Words: </b>{wordCount} | <b>Characters: </b>{charCount} | <b>Lines: </b>{lineCount}</p>
      </div>
    </div>
  )
}