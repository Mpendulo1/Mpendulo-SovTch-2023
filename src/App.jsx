import { useRef } from 'react';

import './App.css'
import Header from './components/Header';
import About from './sections/About';

import Home from './sections/Home'
import Motive from './sections/Motive';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const motiveRef = useRef(null);

  return (
    <div className="App">
        <Header homeRef={homeRef} aboutRef={aboutRef} motiveRef={motiveRef} />
        <Home homeRef={homeRef} aboutRef={aboutRef} />
        <About aboutRef={aboutRef} />
        <Motive motiveRef={motiveRef} />
    </div>
  );
}

export default App;
