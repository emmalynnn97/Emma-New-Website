import React from 'react'
import { useState, useEffect} from 'react'
export default function CaseStudy(props) {
    const isElementXPercentInViewport = function (el, percentVisible) {
        let
            rect = el.getBoundingClientRect(),
            windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        return !(
            Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
            Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
        )
    };
    const [translationX, setTranslationX] = useState(props.initialOffset.x);
    const [translationY, setTranslationY] = useState(props.initialOffset.y)
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            var cStudyContainers = document.querySelectorAll('.case-study-container');
            cStudyContainers.forEach((cStudyContainer)=>{
                if (isElementXPercentInViewport(cStudyContainer, 100)) {
                    setTranslationX(0)
                    setTranslationY(0)
                }
            })
            
        })
    })
    const emmaPink = '#FFF1FC'
    const btnStyle={
        border:'2px solid black',
        padding:'.35em 1.25em',
        margin:'.35em 0',
        cursor:'pointer'
    }
    return (
        <div
            className='case-study'
            style={
                {
                    height: '450px',
                    width: '300px',
                    transform: `translateX(${translationX}vw) translateY(${translationY}vh)`,
                    transition: '.75s ease-in-out',
                    margin: '0 3em',
                    background: emmaPink,
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
                <span style={btnStyle}>View</span>
            </div>
        </div>
    )
}
