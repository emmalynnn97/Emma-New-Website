import React from 'react'
import emma from './emma.JPG'
export default function Top() {
    return (
        <div
        className='top-container' 
        style={{
            display:'flex',
            height:'60vh',
            alignItems:'center',
            justifyContent:'center',
            width:'100%',
            flexWrap:'wrap',
        }}>
            <div style={{margin:'0 3em'}}>
                <h1>Emma Lynn Web Development</h1>
                <h2>Where Development meets Design</h2>
            </div>
            <img
            className='emma-image' 
            style={{width:'400px'}} 
            alt="Emma Lynn" 
            src={emma}/>
        </div>
    )
}
