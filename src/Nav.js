import React from 'react'
import NavLink from './NavLink'
export default function Nav() {
    return (
        <div
        className='nav' 
        style={{
            height:'65px', 
            width:'100%',
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'center',
            padding:'0em 1em',
        }}
        >
            <NavLink text='Home'/>
            <NavLink text='Blog'/>
            <NavLink text='Case Studies'/>
            <NavLink text='Portfolio'/>
        </div>
    )
}
