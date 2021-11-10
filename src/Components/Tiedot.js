import React from 'react';

export default function Tiedot({quake}) {

    
    let props = quake ? Object.keys(quake["properties"]) : [];
    
    props = props.filter((x) => x !== "i_d")
    //props = props.filter((x) => x !== "i_d" && x !== "eq_mag_mfa"&&  x !==  "total_damage_description"&& 
    //x !== "region_code" && x !== "intensity" && x !== "location_name" && x !== "eq_mag_unk" && x !== "coordinates"
    //&& x!=="eq_mag_ms")
    

    //tätä pitää vielä siistiä...
   let name = quake ? <div> <strong>Country name: </strong> {quake.properties["country"] ? quake.properties["country"]: "Not available" }</div>: <div></div>
   let magnitude = quake ? <div> <strong>Magnitude: </strong> {quake.properties["eq_primary"] ? quake.properties["eq_primary"]: "Not available"}</div>: <div></div>
   let deaths = quake ? <div> <strong>Deaths: </strong> {quake.properties["deaths"] ? quake.properties["deaths"]: "Not available"}</div>: <div></div>
   let houses = quake ? <div> <strong>Houses destroyed</strong> {quake.properties["houses_destroyed"] ? quake.properties["houses_destroyed"]: "Not available"}</div>: <div></div>
   let date = quake ? <div> <strong>Date: </strong> {quake.properties["year"] ? quake.properties["year"]: "Not available" }</div>: <div></div>
   date = quake ? <div> <strong>Date: </strong> {quake.properties["month"] ? quake.properties["month"] +"."+ quake.properties["year"]: "Not available" }</div>: <div></div>
   date = quake ? <div> <strong>Date: </strong> {quake.properties["day"] ? quake.properties["day"]+"."+quake.properties["month"] +"."+ quake.properties["year"]: "Not available" }</div>: <div></div>
   let content = 
               <div>  {name}
               {magnitude}
               {deaths}
               {houses}
               {date}</div>
                
                    
    //let content = quake ? props.map(x => <div  key={x} ><strong> {x}:</strong> <span>{quake.properties[x]} </span></div>) :
   // <span>Click a record to see more about it</span>
  
                    return (
            <div style={{padding:'5px', textAlign:"justify", lineHeight:"1.8rem"}}>
                {content}
               
            </div>
    );
}