import React from 'react';
import Data from "./../data/significant-earthquake-database.json";
export default function Tiedot({quake}) {
    quake = Data[2];
    const props = Object.keys(quake["fields"]);
    return (
            <div style={{padding:'5px', textAlign:"justify"}}>
                {
                    props.map(x => <><strong> {x}:</strong> <span>{quake.fields[x]} </span></>)
                }
            </div>
    );
}