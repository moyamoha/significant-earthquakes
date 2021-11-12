import React, {useState} from 'react';
import Maanjaristykset from './Maanjaristykset';
import MapArea from './MapArea';
import Uutiset from './Uutiset';
import FilterPalkki from './FilterPalkki';
import Data from './../data/significant-earthquake-database.json';
//import SampleData from './../data/earthquake_cut.json';


export default function Main() {
     const changeQuake = (jar) => {
        setQuake(jar)
    } 
    //<Maanjaristykset onChangeQuake={changeQuake}/> 
    // <FilterPalkki setQuake={setQuake} setChanged={setChanged} filterObj={filterObj} setFilterObj={setFilterObj}/> 


    const [currQuack, setQuake] = useState(() => Data[0]);
    const [changed, setChanged] = useState(() => false)
    let initialFilterObj = {
        all: false,
        year: 0,
        country: "AFGHANISTAN",
        eq_primary: 0
    }
    const [filterObj, setFilterObj] = useState(() => initialFilterObj)
    return (
        <div className="container-fluid pt-3" id="main">
            <div className="row">
           
            <Maanjaristykset onChangeQuake={changeQuake}/> 
            <MapArea quake={currQuack} changeQuake={changeQuake}/>
            <Uutiset quake={currQuack}/>
            </div>
      </div>
    )
}
