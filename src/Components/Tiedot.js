import React from 'react';
import Data from "./../data/significant-earthquake-database.json";


export default function Tiedot({quake}) {
    const props = Object.keys(quake["fields"]);
    return (
            <div style={{padding:'5px', textAlign:"justify", lineHeight:"1.8rem"}}>
                {
                    props.map(x => <><strong> {x}:</strong> <span>{quake.fields[x]} </span></>)
                }
                <a style={{display:"block"}} className="linkki">Read more about this</a>
            </div>
    );
}