import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Instrumentation from './components/Instrumentation';
import History from './components/History';
import Tuning from './components/Tuning';
import Range from './components/Range';
import Techniques from './components/Techniques';
import Sample from './components/Sample';
import Contact from './components/Contact';
import Resources from './components/Resources';

import Bandurria1 from './assets/Bandurria1_edited.png';
import Laud1 from './assets/Laud2_edited.png';
import Octavina1 from './assets/Octavina1_edited.png';

 const App = () => {
  return (
    <div className="App">
        <h1 id="top">Filipino Rondalla</h1>
        <main className="main-section">
          <div className="img-container">
            <img className="img" src={Bandurria1} alt="Bandurria"></img>
            <span className="pop-up-text">Bandurria</span>
          </div>
          <div className="img-container">
            <img className="img" src={Laud1} alt="Laud"></img>
            <span className="pop-up-text">Laud</span>
          </div>     
          <div className="img-container">
            <img className="img" src={Octavina1} alt="Octavina"></img>    
            <span className="pop-up-text">Octavina</span>
          </div>
            <h2>What is Filipino Rondalla?</h2>
            <p>It is a traditional Filipino music plucked-string ensemble.</p> 
          <History/>
          <Instrumentation/>
          <Tuning/>
          <Range/>
          <Techniques/>
          <Sample/>
          <Contact/>
          <Resources/>
        </main>
        <Navbar/>
        <Footer/>
    </div>
  );
}

export default App;
