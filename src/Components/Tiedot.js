import React from 'react';

export default function Tiedot({quake}) {
    
   let name = quake ? <div> <strong>Country name: </strong> {quake.properties["country"] ? quake.properties["country"]: "Not available" }</div>: <div></div>
   let magnitude = quake ? <div> <strong>Magnitude: </strong> {quake.properties["eq_primary"] ? quake.properties["eq_primary"]: "Not available"}</div>: <div></div>
   let deaths = quake ? <div> <strong>Deaths: </strong> {quake.properties["deaths"] ? quake.properties["deaths"]: "Not available"}</div>: <div></div>
   let houses = quake ? <div> <strong>Houses destroyed</strong> {quake.properties["houses_destroyed"] ? quake.properties["houses_destroyed"]: "Not available"}</div>: <div></div>
  
   
  
   let date = quake ? <div> <strong>Date: </strong> {quake.properties["year"] ? quake.properties["year"]: "Not available" }</div>: <div></div>
   
   try{
    date = quake.properties["month"] ?  <div><strong>Date: </strong>  {quake.properties["month"]}.{quake.properties["year"]}</div>:  date
    try{
        date = quake.properties["day"] ?    <div><strong>Date: </strong> {quake.properties["day"]}.{quake.properties["month"]}.{quake.properties["year"]}</div>:  date
       }
       catch{
           
       }
    }
   
   catch{

   }
   
   //date = quake.properties["month"] ?  <div><strong>Date: </strong>  {quake.properties["month"]}.{quake.properties["year"]}</div>:  date 
   //date = quake.properties["day"] ?    <div><strong>Date: </strong> {quake.properties["day"]}.{quake.properties["month"]}.{quake.properties["year"]}</div>:  date

   
   
   let content = 
               <div >  {name}
               {magnitude}
               {deaths}
               {houses}
               {date}</div>
                
                    
    //let content = quake ? props.map(x => <div  key={x} ><strong> {x}:</strong> <span>{quake.properties[x]} </span></div>) :
   // <span>Click a record to see more about it</span>
  
                    return (
            <div id="tiedot" className="col-3" style={{padding:'5px',textAlign:"justify", lineHeight:"1.8rem"}}>
                {content}
               
            </div>
    );
}