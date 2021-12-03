import React from 'react';
import MyMap from './MyMap';
import Tiedot from './Tiedot';

export default function MapArea( {setChanged ,changed, quake,filterObj, changeQuake}) {
   
    return (
        <div className="w-100 maparea">
            <div className="d-flex flex-row">
                <MyMap changed={changed} setChanged={setChanged} filterObj={filterObj} setCurrentQuake={changeQuake} currentQuake = {quake}/>
                <Tiedot quake={quake}/>
            </div>
        </div>

    );
}
