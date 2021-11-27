import React from 'react';


export default function Tiedot({quake}) {

    if (quake !== null) {
        let q = quake.properties;
        let arvot = {
            "country": q["country"] ? q["country"] : "N/A",
            "year":    q["year"]    ? q["year"]    : "N/A",
            "month":   q["month"]   ? q["mont  h"] : "N/A",
            "day":     q["day"]     ? q["day"]     : "N/A",

            "location_name": q["location_name"] ? q["location_name"]     : "N/A",
            "eq_primary":    q["eq_primary"]    ? q["eq_primary"]        : "N/A",

            "damage_description": q["damage_description"] ? q["damage_description"]     : "N/A",
            "deaths_description": q["deaths_description"] ? q["deaths_description"]     : "N/A",     
        };
        let kentat = Object.keys(arvot);
        return (
            <div id="tiedot" className="col-3 pt-3 px-2" style={{padding:'5px',textAlign:"justify", lineHeight:"1.8rem"}}>
                { kentat.map(knt => <div><strong>{knt}</strong>: <span>{quake.properties[knt] ? quake.properties[knt] : "N/A" }</span></div>) }
            </div>
        );
    } else {
        return (
            <div id="tiedot" className="col-3" style={{padding:'5px',textAlign:"justify", lineHeight:"1.8rem"}}>
            </div>
        );
    }

}