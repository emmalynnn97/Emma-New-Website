import React from 'react'
import BlogPost from './BlogPost'
const BlogPosts = () => {
    return (
        <>
            <h2 id='blog' style={{ paddingTop: '1em', backgroundColor: '#FFDEFF', textAlign: 'center' }}>Blog Posts</h2>
            <div
                className='blog-posts-container'
                style={{
                    padding: '3em 0',
                    background: '#FFDEFF',
                    width: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                <BlogPost
                    description='I was furloughed recently from a job that I absolutely loved. The culture was wonderful, the mission was admirable, it was remote, and the pay was enough to meet my needs.'
                    image='https://imgix.cosmicjs.com/ebe9b000-ad49-11ea-8ffe-4bdcca0409c6-background-bloom-blooming-blossom-583850.jpg'
                    title='Can a layoff be a net positive?'
                    link='/blog/layoff'
                />
            </div>
        </>
    )
}
export default BlogPosts
