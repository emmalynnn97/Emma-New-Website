import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";

const ButtonSecondary = ({ text, link }) => {
    const [bgColor, setBgColor] = useState('inherit')
    console.log(link)
    return (
        <>
            {!link && <a href='/#case-study-top'>
                <button
                    onMouseEnter={() => setBgColor('#FFB9F0')}
                    onMouseLeave={() => setBgColor('inherit')}
                    style={{
                        backgroundColor: bgColor,
                        outline: 'none',
                        border: '2px solid #FFB9F0',
                        padding: '.5em 2.5em',
                        textTransform: 'uppercase',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        transition: '.2s ease',
                        margin: '1em 0'
                    }}>
                    {text}
                </button>
            </a>} {link && <Link to={link}>
                <button
                    onMouseEnter={() => setBgColor('#FFB9F0')}
                    onMouseLeave={() => setBgColor('inherit')}
                    style={{
                        backgroundColor: bgColor,
                        outline: 'none',
                        border: '2px solid #FFB9F0',
                        padding: '.5em 2.5em',
                        textTransform: 'uppercase',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        transition: '.2s ease',
                        margin: '1em 0'
                    }}>
                    {text}
                </button>
            </Link>}
        </>
    )
}
export default ButtonSecondary
