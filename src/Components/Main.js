import React, {useState} from 'react';
import MapArea from './MapArea';
import Uutiset from './Uutiset';
import geoData from './../data/geo.json';
import FilterPalkki from './FilterPalkki';

export default function Main() {
    const [currQuack, setQuake] = useState(() => null);
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
                <FilterPalkki setQuake={setQuake} setChanged={setChanged} filterObj={filterObj} setFilterObj={setFilterObj}/> 
                <MapArea setChanged={setChanged} changed={changed} quake={currQuack} filterObj={filterObj} changeQuake={setQuake}/>
                <Uutiset quake={currQuack}/>
            </div>
      </div>
    )
}
