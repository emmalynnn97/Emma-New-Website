import React from 'react'
import emmaIllustration from './emma-website-illustration.png'
import TopCopy from './TopCopy'
import useMediaQuery from '@material-ui/core/useMediaQuery';
const Top = () => {
    const isMobile = useMediaQuery('(max-width:500px)')
    return (
        <div
            id='#top'
            className='top-container'
            style={{
                display: 'flex',
                paddingTop: 70,
                height: '75vh',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                flexWrap: 'wrap',
            }}>
            <TopCopy
                heading='Emma Lynn'
                subheading='Where development meets design'
                body='I am a full stack software engineer with 3+ years experience producing visually appealing, client facing web applications and user interfaces.'
            />
            <img
                className='emma-image'
                style={{
                    width: !isMobile ? '400px' : '275px',
                    margin: '0 1em'
                }}
                alt="Emma Lynn Web Development illustration"
                src={emmaIllustration} />
        </div>
    )
}
export default Top
