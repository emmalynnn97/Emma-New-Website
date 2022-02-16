import React from 'react'
import { ReactComponent as Git } from './git-logo.svg'
import { ReactComponent as Linkedin } from './linkedin.svg'
const Footer = () => {
    return (
        <div style={{
            height: '100px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h3 className='footer-tagline' style={{ margin: '0 1em', fontWeight: 500 }}>Emma Lynn Web Development</h3>
            <div className='footer-icon-container' style={{ margin: '0 1em', display: 'flex' }}>
                <a target="_blank" rel='noreferrer' href="https://github.com/emmalynnn97"><Git className='footer-icon' /></a>
                <a target="_blank" rel='noreferrer' href="https://linkedin.com/in/emmalynnn97"><Linkedin className='footer-icon' /></a>
            </div>
        </div>
    )
}
export default Footer
