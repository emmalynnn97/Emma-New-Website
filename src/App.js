import './App.css';
import Nav from './Nav'
import Top from './Top'
import CaseStudies from './CaseStudies'
import Contact from './Contact'
import BlogPosts from './BlogPosts'
import Footer from './Footer'
function App() {
  const emmaPink='#FFF1FC'
  return (
    <div style={{background:'#f3f3f3'}} className="App">
      <Nav/>
      <Top/>
      <CaseStudies/>
      <Contact/>
      <BlogPosts/>
      <Footer/>
    </div>
  );
}

export default App;
