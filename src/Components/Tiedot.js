import React from 'react';



export default function Tiedot({quake}) {

    //tätä pitää vielä siistiä...

   let name = quake ? <tr> <td><strong>Location: </strong></td> {quake.properties["country"] ? <td> {quake.properties["country"]}</td>: <td> Not available </td>}</tr>: <div></div>
   let magnitude = quake ? <tr> <td><strong>Magnitude: </strong></td> {quake.properties["eq_primary"] ? <td> {quake.properties["eq_primary"]}</td>: <td> Not available </td> }</tr>: <div></div>
   let deaths = quake ? <tr> <td><strong>Deaths: </strong></td> {quake.properties["deaths"] ? <td> {quake.properties["deaths"]}</td>: <td> Not available </td> }</tr>: <div></div>
   let houses = quake ? <tr> <td><strong>Houses destroyed: </strong></td> {quake.properties["houses_destroyed"] ? <td> {quake.properties["houses_destroyed"]}</td>:<td> Not available </td> }</tr>: <div></div>
  
   
  
   let date =  quake ? <tr> <td><strong>Date: </strong></td> {quake.properties["year"] ? <td> {quake.properties["year"]}</td>: "Not available" }</tr>: <tr> <td></td> </tr>
   
   try{
    date = quake.properties["month"] ?  <tr><strong>Date: </strong>  <td>{quake.properties["month"]}.{quake.properties["year"]}</td></tr>:  date
    try{
        date = quake.properties["day"] ?    <tr><td><strong>Date: </strong></td><td> {quake.properties["day"]}.{quake.properties["month"]}.{quake.properties["year"]}</td></tr>: date
       }
       catch{
           
       }
    }
   
   catch{}
   
   let content = quake ?
               <table >  
               </table>:<h3>Select earthquake to display infromation</h3>
                
                    
    //let content = quake ? props.map(x => <div  key={x} ><strong> {x}:</strong> <span>{quake.properties[x]} </span></div>) :
   // <span>Click a record to see more about it</span>
  
                    return (
            <div id="tiedot" className="col-3" style={{padding:'5px',textAlign:"justify", lineHeight:"1.8rem"}}>
            </div>
        );

}