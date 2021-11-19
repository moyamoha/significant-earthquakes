import React from 'react';
import MyMap from './MyMap';
import Tiedot from './Tiedot';
import Uutiset from './Uutiset';

export default function MapArea( {setChanged ,changed, quake,filterObj, changeQuake}) {
   
    return (
        <div className="col-8 maparea">
            <div className="d-flex flex-column">
                <MyMap changed={changed} setChanged={setChanged} filterObj={filterObj} setCurrentQuake={changeQuake} currentQuake = {quake}/>
                <hr></hr>
                <Uutiset quake={quake}/>
            </div>
        </div>

    );
}
