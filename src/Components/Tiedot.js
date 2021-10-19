
import React,{useEffect} from 'react';
import Data from "./../data/significant-earthquake-database.json";
export default function Tiedot() {
    useEffect(() => {

         document.getElementById("sijainti").textContent = " " +  Data[0].fields.country;
        document.getElementById("voimakkuus").textContent = " " + Data[0].fields.eq_primary;
        document.getElementById("ajankohta").textContent = " " + Data[0].fields.year+"."+Data[0].fields.month+"."+Data[0].fields.day;
       });
    return (
        <div className="tiedot" id="tiedot" >
            
            <h5>Voimakkuus:<span id = "voimakkuus"></span></h5>
            <h5>Maa:<span id = "sijainti"></span></h5>
            <h5>Ajankohta:<span id="ajankohta"></span></h5>
            
           
        </div>
       

    );
    
    
}

