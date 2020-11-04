import React from 'react'

export default function Contact() {
    return (
            <div style={{ width: '100%', height: '33vh'}}>
                <form style={{ background:'pink', display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column', height: '100%', width:'70%', margin:'0 auto', position:'relative', top:'-1.5em' }}>
                    <h2 style={{ textAlign: 'center' }}>Contact</h2>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Name</label>
                            <input type="text" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Email Address</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Subject</label>
                            <input type="text" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Message</label>
                            <textarea />
                        </div>
                    </div>
                   
                     <input type="submit"/>
                </form>
            </div>
        
    )
}
