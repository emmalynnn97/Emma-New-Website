import React from 'react'
import CaseStudy from './CaseStudy'
const CaseStudies = () => {
    return (
        <>
            <h2 id='case-study-top' style={{ paddingTop: '1em', background: '#fdf', textAlign: 'center' }}>Case Studies</h2>
            <div
                className='case-study-container'
                style={{
                    padding: '3em 0',
                    background: '#fdf',
                    width: '100%',
                    overflow: 'scroll',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}
            >
                <CaseStudy
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                    image='https://imgix.cosmicjs.com/315afb00-c73d-11ea-b44f-f5c7da208e23-business-code-coding-computer-270360.jpg'
                    title='Rebranding the Ice Cream Cone'
                />
            </div>
        </>
    )
}
export default CaseStudies
