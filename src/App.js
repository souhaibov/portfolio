import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <main className="App-header">
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Contact/>
      </main>
    </div>
  );
}

export default App;
