import React, { useEffect } from 'react';
import MyMap from './MyMap';
import Tiedot from './Tiedot';



export default function MapArea() {
   
    return (
        <div className="map-area" id="maparea" >

            <MyMap />
            <Tiedot />

        </div>

    );
}
