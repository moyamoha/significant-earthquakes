import React, {useState} from 'react';
import MapArea from './MapArea';
import Uutiset from './Uutiset';
import Data from './../data/significant-earthquake-database.json';
import geoData from './../data/geo.json';
import FilterPalkki from './FilterPalkki';

export default function Main() {
    const [currQuack, setQuake] = useState(() => geoData.features[0]);
    const [filterFunc, setFilterFunc] = useState(() => function(item) {
        return item.properties.country === "CHINA" && item.properties.year > 2000
    })
    return (
        <div className="container-fluid pt-3" id="main">
            <div className="row">
                <FilterPalkki setFilterFunction={setFilterFunc}/> 
                <MapArea quake={currQuack} filterFunction={filterFunc} changeQuake={setQuake}/>
                <Uutiset quake={currQuack}/>
            </div>
      </div>
    )
}
