
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
      <div className="container-fluid py-2" id="main">
        <div className="row">
          <MapArea/>
          <Uutiset/>
        </div>
      </div>
    </div>
  );
}

export default App;
