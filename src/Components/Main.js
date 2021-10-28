import React, {useState} from 'react';
import MapArea from './MapArea';
import Uutiset from './Uutiset';
import FilterPalkki from './FilterPalkki';

export default function Main() {
    const [currQuack, setQuake] = useState(() => null);
    const [changed, setChanged] = useState(() => false)
    let initialFilterObj = {
        all: false,
        year: 0,
        country: "CHINA",
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
