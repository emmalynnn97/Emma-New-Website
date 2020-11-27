import React from 'react'
import { useState } from 'react'
const ButtonSecondary = ({ text }) => {
    const [bgColor, setBgColor] = useState('inherit')
    return (
        <button 
        onMouseEnter={()=>setBgColor('#FFB9F0')} 
        onMouseLeave={()=>setBgColor('inherit')}
        style={{
            backgroundColor:bgColor,
            outline:'none',
            border:'2px solid #FFB9F0',
            padding:'.5em 1.25em',
            textTransform:'uppercase',
            borderRadius:'15px',
            cursor:'pointer',
            transition:'.2s ease'
        }}>
            {text}
        </button>
    )
}
export default ButtonSecondary
