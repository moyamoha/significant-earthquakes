import React, {useState} from 'react';
import MapArea from './MapArea';
import Uutiset from './Uutiset';
import Data from './../data/significant-earthquake-database.json';
import FilterPalkki from './FilterPalkki';

export default function Main() {
    const [currQuack, setQuake] = useState(() => Data[0]);
    const [data, setData] = useState(() => Array.from(Data))
    return (
        <div className="container-fluid pt-3" id="main">
            <div className="row">
                <FilterPalkki data={data} changeData={setData}/> 
                <MapArea quake={currQuack} filteredData={data} changeQuake={setQuake}/>
                <Uutiset quake={currQuack}/>
            </div>
      </div>
    )
}
