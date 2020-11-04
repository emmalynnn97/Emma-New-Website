import './App.css';
import Nav from './Nav'
import Top from './Top'
import CaseStudies from './CaseStudies'
import Contact from './Contact'
import BlogPosts from './BlogPosts'
function App() {
  const emmaPink='#FFF1FC'
  return (
    <div style={{background:emmaPink}} className="App">
      <Nav/>
      <Top/>
      <CaseStudies/>
      <Contact/>
      <BlogPosts/>
      <div>Footer</div>
    </div>
  );
}

export default App;
