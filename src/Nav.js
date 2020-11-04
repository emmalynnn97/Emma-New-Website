import React from 'react'

export default function Nav() {
    const linkStyle={
        margin:'0 1em',
        border:'2px solid black',
        padding:'.5em 1em',
        cursor:'pointer'
    }
    return (
        <div 
        style={{
            height:'75px', 
            width:'100%',
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'center',
            padding:'0em 1em',
            background:'white'
        }}
        >
            <span style={linkStyle}>Link 1</span>
            <span style={linkStyle}>Link 2</span>
            <span style={linkStyle}>Link 3</span>
        </div>
    )
}
