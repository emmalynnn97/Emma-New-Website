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
                    description='A custom WordPress theme which served to aid in a rebrand for the largest ice cream cone manufacturer in the world.'
                    image='https://cdn.cosmicjs.com/75fc80a0-93c7-11ec-9a4e-05fc85d83574-joy.png'
                    title='Rebranding the Ice Cream Cone'
                    link='/JoyCone'
                />
            </div>
        </>
    )
}
export default CaseStudies
