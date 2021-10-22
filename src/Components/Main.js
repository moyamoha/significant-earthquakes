import React, {useState} from 'react';
import Maanjaristykset from './Maanjaristykset';
import MapArea from './MapArea';
import Uutiset from './Uutiset';
import Data from './../data/significant-earthquake-database.json';
import SampleData from './../data/earthquake_cut.json';


export default function Main() {
    const [currQuack, setQuake] = useState(() => Data[0]);
    const changeQuake = (jar) => {
        setQuake(jar)
    }
    return (
        <div className="container-fluid pt-3" id="main">
            <div className="row">
                <Maanjaristykset onChangeQuake={changeQuake}/> 
                <MapArea quake={currQuack} changeQuake={changeQuake}/>
                <Uutiset quake={currQuack}/>
            </div>
      </div>
    )
}
