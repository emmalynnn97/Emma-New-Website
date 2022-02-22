import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import useSlideIn from './hooks/useSlideIn'
import useMediaQuery from '@material-ui/core/useMediaQuery';
const CaseStudy = ({ image, title, description, link }) => {
    const itemRef = useSlideIn({ itemOffsetY: 20, itemTransition: '.25s ease-in-out' })
    const isDesktop = !useMediaQuery('(max-width:500px)')
    return (
        <div
            ref={itemRef}
            className='case-study'
            style={
                {
                    height: 500,
                    width: isDesktop ? 300 : '80%',
                    margin: isDesktop ? '1em 3em' : '1em 0',
                    backgroundColor: 'rgba(255, 241, 252,.75)',
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
                    height: 'auto',
                    width: '100%',
                    padding: '1em',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start'
                }}>
                <h3 style={{ margin: '.35em 0' }}>
                    {title}
                </h3>
                <p style={{ lineHeight: '1.35' }}>
                    {description}
                </p>
                <ButtonSecondary isRoute link={link} text='view case study' />
            </div>
        </div>
    )
}
export default CaseStudy
