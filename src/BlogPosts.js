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
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                    image='https://imgix.cosmicjs.com/ebe9b000-ad49-11ea-8ffe-4bdcca0409c6-background-bloom-blooming-blossom-583850.jpg'
                    title='Blog Post 1'
                    link='/whatever'
                />
                <BlogPost
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                    image='https://imgix.cosmicjs.com/ebe9b000-ad49-11ea-8ffe-4bdcca0409c6-background-bloom-blooming-blossom-583850.jpg'
                    title='Blog Post 2'
                />
                <BlogPost
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                    image='https://imgix.cosmicjs.com/ebe9b000-ad49-11ea-8ffe-4bdcca0409c6-background-bloom-blooming-blossom-583850.jpg'
                    title='Blog Post 2'
                />
                <BlogPost
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                    image='https://imgix.cosmicjs.com/ebe9b000-ad49-11ea-8ffe-4bdcca0409c6-background-bloom-blooming-blossom-583850.jpg'
                    title='Blog Post 2'
                />
                <BlogPost
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                    image='https://imgix.cosmicjs.com/ebe9b000-ad49-11ea-8ffe-4bdcca0409c6-background-bloom-blooming-blossom-583850.jpg'
                    title='Blog Post 2'
                />
            </div>
        </>
    )
}
export default BlogPosts
