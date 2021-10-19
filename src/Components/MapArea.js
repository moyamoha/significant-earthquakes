import React, { useEffect } from 'react';
import MyMap from './MyMap';
import Tiedot from './Tiedot';



export default function MapArea() {
   
    return (
        <div className="col-8">
            <div className="d-flex flex-column px-3" id="maparea" >
                <MyMap />
                <hr></hr>
                <Tiedot />
            </div>
        </div>

    );
}
