import React from 'react'
import BlogPost from './BlogPost'
export default function BlogPosts() {
    return (
        <div 
        className='blog-posts-container'
        style={{ 
            padding: '3em 0', 
            background: 'white', 
            width: '100%', 
            overflow: 'hidden', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexWrap: 'wrap'
        }}>
            <BlogPost 
            title='Blog Post 1'  
            initialOffset={{x:0, y:100}}
            />
            <BlogPost 
            title='Blog Post 2'  
            initialOffset={{x:0, y:100}}
            />
        </div>
    )
}
