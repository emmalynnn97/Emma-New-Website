import React from 'react'
import Nav from '../Nav'
import Hero from '../Hero'
import Footer from '../Footer'
export default function JoyCone() {
  return (
    <>
      <Nav />
      <Hero client='Joy Cone' url='https://cdn.cosmicjs.com/75fc80a0-93c7-11ec-9a4e-05fc85d83574-joy.png' />
      <div style={{paddingLeft:70, backgroundColor: '#FFDDFF', minHeight:'75vh'}} className='page'>
        <div className='objective'>
          <h2>Client:<br/><a style={{color:'blue'}} href="https://joycone.com">Joy Cone</a></h2>
          <div><h1>Objective</h1>
        </div>
          <h2 className='case-study-desc' style={{width:'50%'}}>Deliver a visually appealing WordPress website via a custom theme, in order to modernize the web presence of Joy Cone and dramatically increase their organic search performance.</h2>
        </div>
        <div  className='case-study-content'>
        <h1>The Challenge</h1>
       <div className='challenge'>
          <p>Joy Cone's legacy website was not optimized for SEO or mobile. <br/>The client desired a new, more visually appealing website that was optimized for SEO and mobile.</p>
            <img src="https://imgix.cosmicjs.com/76061d90-93c7-11ec-9a4e-05fc85d83574-Screen-Shot-2022-02-22-at-3.05.11-AM.png" alt="Previous Joy Cone website" />
       </div>
          

        
        
        
        <h1>The Solution</h1>
        <div className='solution'>
        <p>The UI/UX and graphic design team, myself as the lead engineer, and our product manager worked together to produce a custom WordPress theme and website. <br/>This new website was optimized for SEO by our marketing department.<br/>The combination of a performant, modern website and the marketing teams's SEO optimizations dramatically increased organic traffic to the Joy Cone website.</p>
        <img src="https://cdn.cosmicjs.com/75fc80a0-93c7-11ec-9a4e-05fc85d83574-joy.png" alt="New Joy Cone website" />
        </div>
      </div>
      </div>
      <Footer/>
   
    </>
  )
}

