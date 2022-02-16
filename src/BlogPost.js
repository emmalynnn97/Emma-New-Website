import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import useSlideIn from './hooks/useSlideIn'
const BlogPost = ({ image, title, description }) => {
    const emmaPink = '#FFF1FC'
    const itemRef = useSlideIn({ itemOffsetY: 15, itemTransition: '.3s ease-in-out' })
    return (
        <div
            ref={itemRef}
            className='blog-post'
            style={
                {
                    height: '450px',
                    width: '300px',
                    margin: '1em 3em',
                    background: emmaPink,
                }
            }
        >
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '50%',
                }}
            >
            </div>
            <div
                className='post-card'
                style={{
                    height: 'auto',
                    width: '100%',
                    padding: '1em',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start'
                }}
            >
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
export default BlogPost
