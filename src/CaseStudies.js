import React from 'react'
import CaseStudy from './CaseStudy'
export default function CaseStudies() {
    return (
        <>
        <h2 style={{background:'white', textAlign:'center'}}>Case Studies</h2>
        <div
            className='case-study-container'
            style={{ 
                padding: '3em 0', 
                background: '#FFF1FC', 
                width: '100%', 
                overflow: 'hidden', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexWrap: 'wrap' }}>
            <CaseStudy
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                image='https://imgix.cosmicjs.com/315afb00-c73d-11ea-b44f-f5c7da208e23-business-code-coding-computer-270360.jpg'
                title='Custom WordPress Site'
                 />
                <CaseStudy
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                image='https://imgix.cosmicjs.com/315afb00-c73d-11ea-b44f-f5c7da208e23-business-code-coding-computer-270360.jpg'
                title='Custom WordPress Site'
                 />
            <CaseStudy
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' 
                image='https://imgix.cosmicjs.com/4a02ad30-a2d3-11ea-a53d-43d1307482f8-joshua-aragon-FkjaN-7gWC0-unsplash-1.jpg'
                title='Website Refresh'
                />
        </div>
        </>
    )
}
