import React from 'react';

export default function Tiedot({quake}) {
    const props = Object.keys(quake["properties"]);
    return (
            <div style={{padding:'5px', textAlign:"justify", lineHeight:"1.8rem"}}>
                {
                    props.map(x => <><strong> {x}:</strong> <span>{quake.properties[x]} </span></>)
                }
                <span style={{display:"block"}} className="linkki">Read more about this</span>
            </div>
    );
}