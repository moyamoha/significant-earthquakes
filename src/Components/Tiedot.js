import React from 'react';

export default function Tiedot({quake}) {

    
    
    //props = props.filter((x) => x !== "i_d" && x !== "eq_mag_mfa"&&  x !==  "total_damage_description"&& 
    //x !== "region_code" && x !== "intensity" && x !== "location_name" && x !== "eq_mag_unk" && x !== "coordinates"
    //&& x!=="eq_mag_ms")
    

    //tätä pitää vielä siistiä...
               
    //let content = quake ? props.map(x => <div  key={x} ><strong> {x}:</strong> <span>{quake.properties[x]} </span></div>) :
   // <span>Click a record to see more about it</span>
  

            let props = quake ? Object.keys(quake["properties"]) : [];
    
             props = props.filter((x) => x !== "i_d")
             
          let    content = quake ? props.map(x => <div className="kentta"> <span>{x}:</span><span>{quake.properties[x]}</span> </div>) :
             <h3>Select earthquake to display infromation</h3>
           

                    return (
            <div id="tiedot" className="col-3" style={{padding:'5px',textAlign:"justify", lineHeight:"1.8rem"}}>
               {content}
               
            </div>
    );
}