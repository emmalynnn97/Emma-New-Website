import React from 'react'
import { useState } from 'react'
const ButtonPrimary = ({ text }) => {
    const [bgColor, setBgColor] = useState('#FFB9F0')
    return (
        <a href='/#contact'><button
            onMouseEnter={() => setBgColor('inherit')}
            onMouseLeave={() => setBgColor('#FFB9F0')}
            style={{
                backgroundColor: bgColor,
                outline: 'none',
                border: '2px solid #FFB9F0',
                padding: '.5em 1.25em',
                textTransform: 'uppercase',
                borderRadius: '40px',
                marginRight: '1em',
                cursor: 'pointer',
                transition: '.2s ease',
            }}>
            {text}
        </button></a>
    )
}
export default ButtonPrimary
