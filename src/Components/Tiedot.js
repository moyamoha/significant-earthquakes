import React from 'react';

export default function Tiedot({quake}) {

    let props = quake ? Object.keys(quake["properties"]) : [];
    props = props.filter((x) => x !== "i_d")
    let content = quake ? props.map(x => <><strong> {x}:</strong> <span>{quake.properties[x]} </span></>) :
                    <span>Click a record to see more about it</span>
    return (
            <div style={{padding:'5px', textAlign:"justify", lineHeight:"1.8rem"}}>
                {content}
                <span style={{display:quake ? 'block' : "none"}} className="linkki">Read more about this</span>
            </div>
    );
}