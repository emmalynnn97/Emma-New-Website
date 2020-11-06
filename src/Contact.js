import React from 'react'
import useContactForm from './CustomHooks'
export default function Contact() {
    const { inputs, handleInputChange, handleSubmit } = useContactForm()
    return (
            <div style={{ width: '100%', height: '33vh', background:'#f3f3f3'}}>
                <form onSubmit={handleSubmit} style={{ background:'pink', display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column', height: '100%', width:'70%', margin:'0 auto', position:'relative', top:'-1.5em' }}>
                    <h2 style={{ textAlign: 'center' }}>Contact</h2>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Name</label>
                            <input value={inputs.firstName} onChange={handleInputChange} name='firstName' type="text" required />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Email Address</label>
                            <input value={inputs.lastName} onChange={handleInputChange} name='lastName' type="text" />
                        </div>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Subject</label>
                            <input value={inputs.subject} onChange={handleInputChange} name='subject' type="text" required/>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Message</label>
                            <textarea value={inputs.message} onChange={handleInputChange} name='message' required/>
                        </div>
                    </div>
                     <input type="submit"/>
                </form>
            </div>
        
    )
}
