import React from 'react';
import MyMap from './MyMap';

export default function MapArea( {setChanged ,changed, quake,filterObj, changeQuake}) {
   
    return (
        <div className="w-100 maparea">
            <MyMap
                changed={changed}
                setChanged={setChanged}
                filterObj={filterObj}
                setCurrentQuake={changeQuake}
                currentQuake={quake}
            />
        </div>
    );
}
