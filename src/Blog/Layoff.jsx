import React from 'react'
import Hero from '../Hero'
import Nav from '../Nav'
import Footer from '../Footer'
const Layoff = () => {
    return(
        <>
        <Nav/>
            <Hero url='https://cdn.cosmicjs.com/589ab840-93d3-11ec-9a4e-05fc85d83574-pexels-energepiccom-313690.jpg'/>
            <div className='blog-content'>
                <h1>Can a layoff be a net positive?</h1>
                <p>Whether it be a furlough or a layoff from a company, there is no denying that it's a stressful situation to experience.
                    <br/>
                    I was furloughed recently from a job that I absolutely loved. The culture was wonderful, the mission was admirable, it was remote, <br/>
                    and the pay was enough to meet my needs. It would be correct to assume that being furloughed was devastating for me.
                </p>
                <h2>What I am doing to move forward</h2>
                <p>Depending on the industry you are in, there are many websites to apply for jobs and careers, such as ZipRecruiter, Linkedin, Angie's List, <br/>and many others. I updated my Linkedin profile and resume to highlight all of my relevant talents and skills,<br/>and applied for a large number of jobs via ZipRecruiter, or Linkedin. </p>
                <h2>What am I doing to occupy my time during my job hunt?</h2>
                <p>I am approaching the free time I have as a result of being furloughed as a job in itself. I apply to <br/>at least 25 jobs daily, and have several technical recruiters that I am working with to find a position that fits <br/> me and my particular skillset. I am also utilizing this time to build out my portfolio by working on personal projecdts.<br/>
                I also do 2 to 3 video calls or phone calls a day with different hiring managers from various companies.
                </p>
                <h2>A layoff can be a net positive</h2>
                <p>Many of the positions I am currently being considered offer better compensation, 401k matching, and equity than<br/> my previous role did. There are also a handful of companies considering me for more design focused positions, <br/> which is exciting in itself as I've always had a passion for the development and design.</p>
            </div>
            <Footer/>
        </>
        
    )
}
export default Layoff
