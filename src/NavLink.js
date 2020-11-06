import React from 'react'
import { useState } from 'react'
export default function NavLink(props) {
    const [bgColor, setBgColor] = useState('inherit')
    return (
        <span
        className='nav-link' 
        onMouseEnter = {() => setBgColor('#FFB9F0')}
        onMouseLeave = {()=> setBgColor('inherit')}
        style={{
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'.5em 2.25em',
        cursor:'pointer',
        fontWeight:'500',
        fontSize:'1.25em',
        backgroundColor:bgColor,
        transition:'.2s ease',
        textAlign:'center',
        }}>
            {props.text}
        </span>
    )
}
