import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import  useSlideIn  from './hooks/useSlideIn'
const CaseStudy = ({ image, title, description }) => {
    const itemRef = useSlideIn({ itemOffsetY:20, itemTransition:'.3s ease-in-out' })
    return (
        <div
            ref = { itemRef }
            className='case-study'
            style={
                {
                    height: '450px',
                    width: '300px',
                    margin: '1em 3em',
                    background: 'white',
                }
            }>
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '50%',
                }}>
            </div>
            <div
                style={{
                    height: '50%',
                    width: '100%',
                    padding: '1em',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'flex-start',
                    justifyContent:'flex-start'
                }}>
                <h3 style={{ margin: '.35em 0'}}>
                    {title}
                </h3>
                <p style={{lineHeight:'1.35'}}>
                    {description}
                </p>
                <ButtonSecondary text='view'/>
            </div>
        </div>
    )
}
export default CaseStudy
