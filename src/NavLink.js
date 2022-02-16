import React from 'react'
import { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
const NavLink = ({ text, link }) => {
    const [bgColor, setBgColor] = useState('inherit')
    const isDesktop = !useMediaQuery('(max-width:500px)')
    return (
        <a href={link}><span
            className='nav-link'
            onMouseEnter={() => setBgColor('#FFB9F0')}
            onMouseLeave={() => setBgColor('inherit')}
            style={{
                height: 70,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: isDesktop ? '.5em 2.25em' : '.65em',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: isDesktop ? '1.25em' : '1em',
                backgroundColor: bgColor,
                transition: '.2s ease',
                textAlign: 'center',
                width: isDesktop ? 'auto' : '100%',
                color: 'black',
            }}>
            {text}
        </span></a>
    )
}
export default NavLink
