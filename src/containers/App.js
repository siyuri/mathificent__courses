//import logo from './logo.svg'
// imporn logo
import './App.css'
import './Main.css'
import './Header.css'
import './Footer.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Game from '../components/Game'
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
// import styling

function App() {
  const [operation, setOperation] = useState('*');
  const [maxNumber, setMaxNumber] = useState(10);

  // main component function
  return ( // return HTML-like code called JSX
    <div className='App'>
      <Header />
      {/* insert component from anither file */}

      <Route exact path="/"
        component={() =>
          <Main operation={operation}
            setOperation={setOperation}
            maxNumber={maxNumber}
            setMaxNumber={setMaxNumber} />} />
      <Route exact path="/Game"
        component={() =>
          <Game operation={operation}
            maxNumber={maxNumber} />} />
      <Footer />
    </div>
  )
}

export default App //export main companent