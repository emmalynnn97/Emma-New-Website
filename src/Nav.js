import React from 'react'
import NavLink from './NavLink'
import useMediaQuery from '@material-ui/core/useMediaQuery';
const Nav = () => {
    const isDesktop = !useMediaQuery('(max-width:500px)')
    return (
        <div
            className='nav'
            style={{

                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexWrap: 'wrap',
                padding: isDesktop ? '0em 1em' : '0',
                position: 'fixed',
                backgroundColor: 'rgba(255, 222, 255, .75)',
                backdropFilter: 'blur(4px)',
                zIndex: 2
            }}
        >
            <NavLink link='/#top' text='Home' />
            <NavLink link='/#case-study-top' text='Case Studies' />
            <NavLink link='/#contact' text='Contact' />
            <NavLink link='/#blog' text='Blog' />


        </div>
    )
}
export default Nav
