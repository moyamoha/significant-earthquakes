import React, {useState} from 'react';
import Maanjaristykset from './Maanjaristykset';
import Data from './../data/significant-earthquake-database.json'


export default function Main() {
    const [currQuack, setQuake] = useState(() => Data[0]);
    return (
        <div className="container-fluid pt-4" id="main">
            <div className="row">
                <Maanjaristykset quakes={Data} onClick={setQuake}/> 
                <MapArea quake={currQuack}/>
                <Uutiset quake={currQuack}/>
            </div>
      </div>
    )
}
