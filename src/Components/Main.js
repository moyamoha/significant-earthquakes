import React, {useState} from 'react';
import MapArea from './MapArea';
import Uutiset from './Uutiset';
import FilterPalkki from './FilterPalkki';

export default function Main() {
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
        <div className="container-fluid pt-3" id="main">
            <div className="row">
                <FilterPalkki setQuake={setQuake} setChanged={setChanged} filterObj={filterObj} setFilterObj={setFilterObj}/> 
                <div className="col-10">
                    <MapArea setChanged={setChanged} changed={changed} quake={currQuack} filterObj={filterObj} changeQuake={changeQuake}/>
                    <Uutiset quake={currQuack} saaHakea={saaHakea} setSaaHakea={setSaaHakea}/>
                </div>
            </div>
      </div>
    )
}
