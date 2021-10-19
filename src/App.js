
import React from 'react';
import './App.css';
import  MapArea  from './Components/MapArea';
import Navbar from './Components/Navbar';
import Seprator from './Components/Separator';
import Uutiset from "./Components/Uutiset";


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Seprator/>
      <MapArea/>
      <Uutiset/>
    </div>
  );
}

export default App;
