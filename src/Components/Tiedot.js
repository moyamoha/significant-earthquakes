import React from 'react';
import Data from "./../data/significant-earthquake-database.json";


export default function Tiedot({quake}) {
    const props = Object.keys(quake["fields"]);

    const showOhje = () => {
        document.getElementById("ohje").style.display = "block";
        document.querySelector(".linkki").style.display = "none"
    }
    return (
            <div style={{padding:'5px', textAlign:"justify", lineHeight:"1.8rem"}}>
                {
                    props.map(x => <><strong> {x}:</strong> <span>{quake.fields[x]} </span></>)
                } <br></br>
                <span id="ohje" className="text-info" style={{display:"none"}}>More about this on the right side of page</span>
                <a style={{display:"block"}} onClick={() => showOhje()} className="linkki">Read more about this</a>
            </div>
    );
}