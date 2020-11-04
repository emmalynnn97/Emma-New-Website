import './App.css';
import Nav from './Nav'
import Top from './Top'
import CaseStudies from './CaseStudies'
function App() {
  const emmaPink='#FFF1FC'
  return (
    <div style={{background:emmaPink}} className="App">
      <Nav/>
      <Top/>
      <CaseStudies/>
      <div>Contact</div>
      <div>Footer</div>
    </div>
  );
}

export default App;
