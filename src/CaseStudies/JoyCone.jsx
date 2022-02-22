import React from 'react'
import Nav from '../Nav'
import Hero from '../Hero'
export default function JoyCone() {
  return (
    <>
      <Nav />
      <Hero client='Joy Cone' url='https://cdn.cosmicjs.com/04931e00-93a5-11ec-9a4e-05fc85d83574-Screen-Shot-2022-02-21-at-10.58.04-PM.png' />
      <div style={{paddingLeft:70, backgroundColor: '#FFDDFF', height:'100vh' }} className='page'>
        <div style={{display:'flex',gap:125}}>
          <h1>Objective</h1>
          <h2>Deliver a visually appealing WordPress website via a custom theme, in order to modernize the web presence of Joy Cone and dramatically increase their organic search performance.</h2>
        </div>
        
        <h3>Client:</h3>
        <h4>Joy Cone</h4>
      </div>
    </>
  )
}

