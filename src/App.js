
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home'
import Features from './Component/Features';
import About from './Component/About';
import Pricing from './Component/Pricing';
import NewsLetter from './Component/NewsLetter';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Features/>
     <About/>
     <Pricing/>
     <NewsLetter/>
     <Footer/>
    </div>
  );
}

export default App;
