import React, {useState} from 'react';
import Maanjaristykset from './FilterPalkki';
import MapArea from './MapArea';
import Uutiset from './Uutiset';
import Data from './../data/significant-earthquake-database.json';

export default function Main() {
    const [currQuack, setQuake] = useState(() => Data[0]);
    const [data, setData] = useState(() => Array.from(Data).slice(1, 100))
    return (
        <div className="container-fluid pt-3" id="main">
            <div className="row">
                <Maanjaristykset changeData={setData}/> 
                <MapArea quake={currQuack} filteredData={data} changeQuake={setQuake}/>
                <Uutiset quake={currQuack}/>
            </div>
      </div>
    )
}
