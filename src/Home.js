import './App.css';
import Nav from './Nav'
import Top from './Top'
import CaseStudies from './CaseStudies'
import Contact from './Contact'
import BlogPosts from './BlogPosts'
import Footer from './Footer'

import React from 'react'

export default function Home() {
    const emmaPink = '#FFF1FC'
    return (
        <div style={{ background: emmaPink }} className="App">
            <Nav />
            <Top />
            <CaseStudies />
            <Contact />
            <BlogPosts />
            <Footer />
        </div>
    )
}
