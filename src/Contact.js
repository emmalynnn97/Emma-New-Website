import React from 'react'
import useContactForm from './CustomHooks'
import useMediaQuery from '@material-ui/core/useMediaQuery';
export default function Contact() {
    const { inputs, handleInputChange, handleSubmit } = useContactForm()
    const isDesktop = !useMediaQuery('(max-width:500px)')
    return (
        <div id='contact' className='form-container' style={{ width: '100%', height: '50vh', background: '#FFF1FC', padding: '1em 0' }}>
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
                <h2>Contact</h2>
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
                        <label>Subject<span style={{ color: 'red' }}>*</span></label>
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
                        <label>Message<span style={{ color: 'red' }}>*</span></label>
                        <textarea
                            value={inputs.message}
                            onChange={handleInputChange}
                            name='message'
                            required />
                    </div>
                </div>
                <input onClick={handleSubmit} style={{
                    width: 125,
                    height: 30,
                    backgroundColor: '#fefefe',
                    textTransform: 'uppercase',
                    margin: '1em 0',
                    outline: 'none',
                    border: 'none',
                    fontWeight: 600,
                    zIndex: 2,
                    cursor: 'pointer'
                }} type="submit" />
            </form>
        </div>

    )
}
