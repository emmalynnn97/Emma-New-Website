import './App.css';
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoyCone from './CaseStudies/JoyCone'
function App() {
  return (
    /*<div style={{ background: emmaPink }} className="App">
      <Nav />
      <Top />
      <CaseStudies />
      <Contact />
      <BlogPosts />
      <Footer />
    </div>*/
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/JoyCone' element={<JoyCone />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
