import React from 'react'
const Hero = ({ url }) => {
    const heroStyle = {
        height: '87.5vh',
        width: '100%',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '2.5em'
    }

    return (
        <div style={heroStyle} />
    )
}
export default Hero
