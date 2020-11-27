import React from 'react'
import emmaIllustration from './emma-website-illustration.png'
import TopCopy from './TopCopy'
const Top = () => {
    return (
        <div
        className='top-container' 
        style={{
            display:'flex',
            height:'75vh',
            alignItems:'center',
            justifyContent:'center',
            width:'100%',
            flexWrap:'wrap',
        }}>
            <TopCopy 
            heading='Emma Lynn Web Development' 
            subheading='Where development meets design'
            body='I am a front end developer with 1.5 years of experience producing visually appealing websites using HTML5, CSS3, ES5/ES6 JavaScript, PHP7, and React. Some of my recent projects include WooCommerce and Shopify powered Ecommerce Stores.'
            />
            <img
            className='emma-image' 
            style={{width:'400px',margin:'0 1.5em'}} 
            alt="Emma Lynn Web Development illustration" 
            src={emmaIllustration}/>
        </div>
    )
}
export default Top
