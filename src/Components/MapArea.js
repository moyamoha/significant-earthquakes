import React from 'react';
import MyMap from './MyMap';
import Tiedot from './Tiedot';

export default function MapArea( {changed, quake,filterObj, changeQuake}) {
   
    return (
        <div className="col-8 maparea">
            <div className="d-flex flex-column">
                <MyMap changed={changed} filterObj={filterObj} setCurrentQuake={changeQuake}/>
                <hr></hr>
                <Tiedot quake={quake}/>
            </div>
        </div>

    );
}
