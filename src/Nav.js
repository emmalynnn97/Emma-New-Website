import React from 'react'
import NavLink from './NavLink'
import useMediaQuery from '@material-ui/core/useMediaQuery';
const Nav = () => {
    const isDesktop = !useMediaQuery('(max-width:500px)')
    return (
        <div
        className='nav' 
        style={{
            height:'65px', 
            width:'100%',
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'center',
            padding:isDesktop ? '0em 1em' : '0',
        }}
        >
            <NavLink text='Home'/>
            <NavLink text='Blog'/>
            <NavLink text='Case Studies'/>
            <NavLink text='Portfolio'/>
        </div>
    )
}
export default Nav
