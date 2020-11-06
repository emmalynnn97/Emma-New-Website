import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import useSlideIn from './useSlideIn'
export default function CaseStudy(props) {
    const { translationX, translationY} = useSlideIn({x:0, y:100, containerClass:'case-study-container'})
    return (
        <div
            className='case-study'
            style={
                {
                    height: '450px',
                    width: '300px',
                    transform: `translateX(${translationX}vw) translateY(${translationY}vh)`,
                    transition: '.75s ease-in-out',
                    margin: '1em 3em',
                    background: 'white',
                }
            }>
            <div
                style={{
                    backgroundImage: `url(${props.image})`,
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
                    {props.title}
                </h3>
                <p style={{lineHeight:'1.35'}}>
                    {props.description}
                </p>
                <ButtonSecondary text='view'/>
            </div>
        </div>
    )
}
