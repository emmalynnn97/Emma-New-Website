import React from 'react'
import useContactForm from './CustomHooks'
import useMediaQuery from '@material-ui/core/useMediaQuery';
export default function Contact() {
    const { inputs, handleInputChange, handleSubmit } = useContactForm()
    const isDesktop = !useMediaQuery('(max-width:500px)')
    return (
            <div className='form-container' style={{ width: '100%', height: '33vh', background:'#f3f3f3', padding:'1em 0'}}>
                <form 
                onSubmit={handleSubmit} 
                style={{ 
                    background:'pink', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent:'center', 
                    flexDirection: 'column', 
                    height: '100%', 
                    width:isDesktop ? '70%' : '100%', 
                    margin:'0 auto' 
                    }}>
                    <h2 
                    style={{ textAlign: 'center' }}>Contact</h2>
                    <div style={{ display: 'flex' }}>
                        <div 
                        style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Name</label>
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
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div 
                        style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Subject</label>
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
                            <label>Message</label>
                            <textarea 
                            value={inputs.message} 
                            onChange={handleInputChange} 
                            name='message' 
                            required/>
                        </div>
                    </div>
                     <input type="submit"/>
                </form>
            </div>
        
    )
}
