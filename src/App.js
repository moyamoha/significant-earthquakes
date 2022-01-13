
import React, {useState} from 'react';
import './App.css';
import './index.css';
import FilterPalkki from './Components/FilterPalkki'
import MapArea from './Components/MapArea'
import Uutiset from './Components/Uutiset'
//import { useTranslation } from "react-i18next";


export default function App() {
  const [currQuack, setQuake] = useState(() => null);
  const [changed, setChanged] = useState(() => true)
  let initialFilterObj = {
      all: true, 
      minyear: "",
      maxyear: "",
      minmagn: "",
      maxmagn: "",
      country: "",
      mindeath: "",
      maxdeath: "",
      eq_primary: 0
  }
  const [filterObj, setFilterObj] = useState(() => initialFilterObj)
  const [saaHakea, setSaaHakea] = useState(true)

  function changeQuake(uusQuake, saakoHakea) {
      setSaaHakea(saakoHakea)
      setQuake(uusQuake)
  }   
  return (
      <div className="App">
          <FilterPalkki
              setQuake={setQuake}
              setChanged={setChanged}
              filterObj={filterObj}
              setFilterObj={setFilterObj}
          />
          <MapArea
              setChanged={setChanged}
              changed={changed}
              quake={currQuack}
              filterObj={filterObj}
              changeQuake={changeQuake}
          />
          <Uutiset
              quake={currQuack}
              saaHakea={saaHakea}
              setSaaHakea={setSaaHakea}
          />
      </div>
  );
}