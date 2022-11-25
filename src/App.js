import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <Home/>
       <About/>
      </header>
    </div>
  );
}

export default App;
