import './App.css';
import Navbar from './components/Navbar';
import Instrumentation from './components/Instrumentation';
import History from './components/History';
import Tuning from './components/Tuning';
import Range from './components/Range';
import Techniques from './components/Techniques';

import Bandurria1 from './assets/Bandurria1_edited.png';
import Laud1 from './assets/Laud2_edited.png';
import Octavina1 from './assets/Octavina1_edited.png';

 const App = () => {
  return (
    <div className="App">
        <h1 id="top">Filipino Rondalla</h1>
        <main className="main-section">
          <img className="img" src={Bandurria1} alt="Bandurria"></img>
          <img className="img" src={Laud1} alt="Laud"></img>
          <img className="img" src={Octavina1} alt="Octavina"></img>
            <h2>What is Filipino Rondalla?</h2>
            <p>It is a traditional Filipino music plucked-string ensemble.</p> 
          <History/>
          <Instrumentation/>
          <Tuning/>
          <Range/>
          <Techniques/>
        </main>
        <Navbar/>

    </div>
  );
}

export default App;
