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
                    image='https://cdn.cosmicjs.com/589ab840-93d3-11ec-9a4e-05fc85d83574-pexels-energepiccom-313690.jpg'
                    title='Can a layoff be a net positive?'
                    link='/blog/layoff'
                />
            </div>
        </>
    )
}
export default BlogPosts
