import React, { useState } from 'react'
import useContactForm from './CustomHooks'
import useMediaQuery from '@material-ui/core/useMediaQuery';
export default function Contact() {
    const { inputs, handleInputChange, handleSubmit } = useContactForm()
    const isDesktop = !useMediaQuery('(max-width:500px)')
    const [bgColor, setBgColor] = useState('#FFB9F0')
    return (
        <div id='contact' className='form-container' style={{ width: '100%', height: '75vh', background: '#FFF1FC', padding: '1em 0' }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: '100%',
                    width: isDesktop ? '50%' : '100%',
                    margin: '0 auto',
                }}>
                <h2>Contact Me</h2>
                <div style={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
                    <div
                        style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>Name <span style={{ color: 'red' }}>*</span></label>
                        <input
                            value={inputs.firstName}
                            onChange={handleInputChange}
                            name='firstName'
                            type="text"
                            required
                        />
                    </div>
                    <div
                        style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>Email Address</label>
                        <input
                            value={inputs.email}
                            onChange={handleInputChange}
                            name='email'
                            type="text"
                        />
                    </div>



                    <div
                        style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>Subject <span style={{ color: 'red' }}>*</span></label>
                        <input
                            value={inputs.subject}
                            onChange={handleInputChange}
                            name='subject'
                            type="text"
                            required
                        />
                    </div>
                    <div
                        style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>Message <span style={{ color: 'red' }}>*</span></label>
                        <textarea
                            value={inputs.message}
                            onChange={handleInputChange}
                            name='message'
                            style={{ height: 300 }}
                            required />
                    </div>
                </div>
                <input onMouseEnter={() => setBgColor('inherit')}
                    onMouseLeave={() => setBgColor('#FFB9F0')} onClick={handleSubmit} style={{
                        backgroundColor: bgColor,
                        outline: 'none',
                        border: '2px solid #FFB9F0',
                        padding: '.5em 1.25em',
                        textTransform: 'uppercase',
                        borderRadius: '40px',
                        marginTop: '1.5em',
                        cursor: 'pointer',
                        transition: '.2s ease',
                    }} type="submit" />
            </form>
        </div>

    )
}
