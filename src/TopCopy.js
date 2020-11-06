import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
export default function TopCopy(props) {
    return (
        <div className='top-copy-container' style={{margin:'0 1.5em', width:'50%'}}>
                <h1 className='top-heading' style={{fontSize:'2.5em'}}>{props.heading}</h1>
                <h2 className='top-subheading' style={{fontSize:'1.75em', marginBottom:'.25em'}}>{props.subheading}</h2>
                <p className='top-body' style={{lineHeight:1.75}}>{props.body}</p>
                <div style={{
                    margin:'1em 0'
                }}>
                   <ButtonPrimary text='Contact'/>
                   <ButtonSecondary text='Portfolio'/> 
                </div>
            </div>
    )
}
