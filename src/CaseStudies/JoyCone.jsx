import React from 'react'
import Nav from '../Nav'
import Hero from '../Hero'
export default function JoyCone() {
  return (
    <>
      <Nav />
      <Hero client='Joy Cone' url='https://cdn.cosmicjs.com/75fc80a0-93c7-11ec-9a4e-05fc85d83574-joy.png' />
      <div style={{paddingLeft:70, backgroundColor: '#FFDDFF', minHeight:'75vh'}} className='page'>
        <div className='objective' style={{display:'flex',gap:125}}>
          <div><h1>Objective</h1>
          <h3>Client:</h3>
        <h4>Joy Cone</h4>
        </div>
          <h2 className='case-study-desc' style={{width:'50%'}}>Deliver a visually appealing WordPress website via a custom theme, in order to modernize the web presence of Joy Cone and dramatically increase their organic search performance.</h2>
        </div>
        <div style={{position:'relative', left:280}} className='case-study-content'>
        <div style={{display:'flex'}}> 
        <div>
          <h1>The Challenge</h1>
          <p>Joy Cone's legacy website was not optimized for SEO or mobile. <br/>The client desired a new, more visually appealing website that was optimized for SEO and mobile.</p>
        </div>
        hi
        </div>
        
        
        
        <h1>The Solution</h1>
        <p>The UI/UX and graphic design team, myself, and our product manager worked together to produce a custom WordPress theme and website. <br/>This new website was optimized for SEO by our marketing department.<br/>The combination of a performant, modern website and the marketing teams's SEO optimizations dramatically increased organic traffic to the Joy Cone website.</p>
      </div>
      </div>
      
   
    </>
  )
}

