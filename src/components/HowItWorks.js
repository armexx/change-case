import React from 'react'
import Heading from './Heading';

function HowItWorks(props) {
  return (
    <div>
        <Heading heading="Convert case online"/>
        <h2 className={`text-${props.mode==='light'?'dark':'light'} pt-3`}>How it works?</h2>
        <p className={`text-${props.mode==='light'?'dark':'light'} text-start`}>A case converter is an invaluable tool for enhancing text formatting and readability. Whether you need to transform text to uppercase, lowercase, title case, or even sentence case, this versatile tool simplifies the process. Case conversion is essential for various applications, from content writing and coding to data formatting. With our user-friendly online case converter, you can effortlessly fine-tune your text to meet specific style and content requirements.</p>
        <p className={`text-${props.mode==='light'?'dark':'light'} text-start`}>Experience the ultimate convenience with our online case converter, an invaluable tool for text formatting. Our free online case converter is your go-to solution for seamless case changes, enabling you to swiftly convert text to lowercase or uppercase with ease. This online free tool is perfect for content creators, writers, and anyone seeking to enhance their writing style. Whether you need to convert lowercase to uppercase or vice versa, our efficient tool ensures your text is properly formatted. Say goodbye to manual case changes and embrace the efficiency of our online case converter. Transform your text effortlessly, all with the power of our user-friendly case change online tool. Trust us to handle your text formatting needs with our convert uppercase to lowercase online solution</p>
    </div>
  )
}

export default HowItWorks