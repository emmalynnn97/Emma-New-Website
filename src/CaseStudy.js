import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import useSlideIn from './hooks/useSlideIn'
import useMediaQuery from '@material-ui/core/useMediaQuery';
const CaseStudy = ({ image, title, description }) => {
    const itemRef = useSlideIn({ itemOffsetY: 20, itemTransition: '.3s ease-in-out' })
    const isDesktop = !useMediaQuery('(max-width:500px)')
    return (
        <div
            ref={itemRef}
            className='case-study'
            style={
                {
                    height: isDesktop ? 450 : 425,
                    width: isDesktop ? 300 : '80%',
                    margin: isDesktop ? '1em 3em' : '1em 0',
                    background: '#FFF1FC',
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
                <ButtonSecondary text='view' />
            </div>
        </div>
    )
}
export default CaseStudy
