import { useRef, useEffect } from 'react'
const useSlideIn = ( {  itemOffsetX, itemOffsetY, itemTransition } ) => {
    const isElementXPercentInViewport = (el, percentVisible) => {
        let
            rect = el.getBoundingClientRect(),
            windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        return !(
            Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
            Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
        )
    };
    const itemRef = useRef(null)
    useEffect(() => {
        if(itemRef.current){
            itemRef.current.style.transition = itemTransition 
            itemRef.current.style.opacity = 0
            itemRef.current.style.position = 'relative'
            itemRef.current.style.left = `${itemOffsetX}vw`
            itemRef.current.style.top = `${itemOffsetY}vh`
        }
        window.addEventListener('scroll', () => {
            if (itemRef.current) {
                 if (isElementXPercentInViewport(itemRef.current, 80)) {
                    itemRef.current.style.left = 0
                    itemRef.current.style.top = 0
                    itemRef.current.style.opacity = 1
                }
            }
        })
    }, [itemOffsetX, itemOffsetY, itemTransition])
    return itemRef
}
export default useSlideIn