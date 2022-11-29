import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <main className="App-header">
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Hobbies/>
       <Contact/>
       <Footer/>
      </main>
    </div>
  );
}

export default App;
