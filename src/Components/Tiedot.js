
import React,{useEffect} from 'react';
import Data from "./../data/significant-earthquake-database.json";
export default function Tiedot() {
    useEffect(() => {
       
       

         document.getElementById("sijainti").value = Data[0].fields.country;
        document.getElementById("voimakkuus").value = Data[0].fields.eq_primary;
        document.getElementById("ajankohta").value = Data[0].fields.year+"."+Data[0].fields.month+"."+Data[0].fields.day;
       });
    return (
        <div className="tiedot" id="tiedot" >
            
            
            <h2>Voimakkuus:<textarea id = "voimakkuus"/></h2>
            <h2>Maa:<textarea id = "sijainti"/></h2>
            <h2>Ajankohta:<textarea id = "ajankohta"/></h2>
            
           
        </div>
       

    );
    
    
}

