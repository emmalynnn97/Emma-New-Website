import { useState, useEffect } from 'react'
function isElementXPercentInViewport(el, percentVisible) {
    let
        rect = el.getBoundingClientRect(),
        windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return !(
        Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
};
export default function useSlideIn({x, y, containerClass}){
    const [translationX, setTranslationX] = useState(x)
    const [translationY, setTranslationY] = useState(y)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            var cStudyContainers = document.querySelectorAll(`.${containerClass}`);
            cStudyContainers.forEach((cStudyContainer)=>{
                if (isElementXPercentInViewport(cStudyContainer, 40)) {
                    setTranslationX(0)
                    setTranslationY(0)
                }
            })
        })
    })
    return {
        translationX, 
        translationY, 
        setTranslationX,
        setTranslationY
    }
}