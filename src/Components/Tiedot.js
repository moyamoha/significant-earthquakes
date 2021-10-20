
import React, {useEffect} from 'react';
import Data from "./../data/significant-earthquake-database.json";
export default function Tiedot(jaristys) {
    useEffect(() => {

         document.getElementById("sijainti").textContent = " " +  Data[0].fields.country;
        document.getElementById("voimakkuus").textContent = " " + Data[0].fields.eq_primary;
        document.getElementById("ajankohta").textContent = " " + Data[0].fields.year+"."+Data[0].fields.month+"."+Data[0].fields.day;
       });
    return (
        <div className="tiedot col-3" >    
            <strong>Voimakkuus: </strong> <span id = "voimakkuus"></span> <br></br>
            <strong>Maa: </strong> <span id = "sijainti"></span> <br></br>
            <strong>Voimakkuus: </strong> <span id = "ajankohta"></span> <br></br>
        </div>
       

    );
    
    
}

