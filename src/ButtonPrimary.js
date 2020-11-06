import React from 'react'
import { useState } from 'react'
export default function ButtonPrimary(props) {
    const [bgColor, setBgColor] = useState('#FFB9F0')
    return (
        <button 
        onMouseEnter={() => setBgColor('inherit')} 
        onMouseLeave={() => setBgColor('#FFB9F0')} 
        style={{
            backgroundColor:bgColor,
            outline:'none',
            border:'2px solid #FFB9F0',
            padding:'.5em 1.25em',
            textTransform:'uppercase',
            borderRadius:'15px',
            marginRight:'1em',
            cursor:'pointer',
            transition:'.2s ease',
        }}>
            {props.text}
        </button>
    )
}
