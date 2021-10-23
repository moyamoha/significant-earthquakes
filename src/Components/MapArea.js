import React from 'react';
import MyMap from './MyMap';
import Tiedot from './Tiedot';

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
