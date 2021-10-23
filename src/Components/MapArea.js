import React, { useEffect } from 'react';
import MyMap from './MyMap';
import Tiedot from './Tiedot';
import Data from './../data/significant-earthquake-database.json';



export default function MapArea( {quake,filterFunction, changeQuake}) {
   
    return (
        <div className="col-8 maparea">
            <div className="d-flex flex-column">
                <MyMap filterFunc={filterFunction} setCurrentQuake={changeQuake}/>
                <hr></hr>
                <Tiedot quake={quake}/>
            </div>
        </div>

    );
}
