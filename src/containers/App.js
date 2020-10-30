//import logo from './logo.svg'
// imporn logo
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Game from '../components/Game'
import React, { useState } from 'react';
// import styling

function App() {
  const [operation, setOperation] = useState('*');
  const [maxNumber, setMaxNumber] = useState(10);

  // main component function
  return ( // return HTML-like code called JSX
    <div className='App'>
      <Header />
      {/* insert component from anither file */}
      <h1 className="title text-dark">Mathificent</h1>
      <Main operation={operation}
        setOperation={setOperation}
        maxNumber={maxNumber}
        setMaxNumber={setMaxNumber} />
      <Game operation={operation}
        maxNumber={maxNumber} />
      <Footer />
    </div>
  )
}

export default App //export main companent