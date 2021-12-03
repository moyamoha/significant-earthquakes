
import React from 'react';
import './App.css';
import './index.css';
import Navbar from './Components/Navbar';
import Seprator from './Components/Separator';
import Main from './Components/Main';
//import { useTranslation } from "react-i18next";


function App() {
  //const { t } = useTranslation()
  
  return (
    <div className="App">
      <Navbar/>
      <Seprator/>
      <Main />
    </div>
  );
}

export default App;
