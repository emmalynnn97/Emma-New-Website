import './App.css';
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoyCone from './CaseStudies/JoyCone'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/JoyCone' element={<JoyCone />}></Route>
        <Route path='/Whatever' element={<JoyCone />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
