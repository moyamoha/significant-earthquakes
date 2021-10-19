
import React from 'react';
import './App.css';
import  MapArea  from './Components/MapArea';
import Navbar from './Components/Navbar';
import Seprator from './Components/Separator';
import Uutiset from "./Components/Uutiset";
import Maanjaristykset from './Components/Maanjaristykset';
import Data from './data/earthquake_cut.json';


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Seprator/>
      <div className="container-fluid py-2" id="main">
        <div className="row">
          <Maanjaristykset quakes={Data} /> 
          <MapArea/>
          <Uutiset/>
        </div>
      </div>
    </div>
  );
}

export default App;
