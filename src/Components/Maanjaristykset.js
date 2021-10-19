import React from 'react';
// import Maanjaristys from './Maanjaristys'
import Maanjaristys from './Maanjaristys';

// esimerkkidataa
/* const testijaristykset = [
    {
        i_d:78,
        flag_tsunami:'',
        year:334,
        month:0,
        day:0,
        focal_depth:0,
        EQ_primary:0,
        Mw_Magnitude:0,
        Ms_Magnitude:0,
        Mb_Magnitude:0,
        MI_Magnitude:0,
        MFA_Magnitude:0,
        unknown_Magnitude:0,
        intensity:10,
        country:'ALBANIA',
        state:'',
        location_name:'ALBANIA: DURRES',
        region_code:130,
        earthquake_deaths:0,
        earthquake_deaths_description:0,
        earthquake_missing:0,
        earthquake_missing_description:0,
        earthquake_injuries:0,
        earthquake_injuries_description:0,
        earthquake_damage:0,
        earthquake_damage_description:0,
        earthquakes_Houses_destroyed:0,
        earthquakes_Houses_damaged:0,
        earthquakes_Houses_damaged_description:0,
        total_effects_deaths:0,
        total_effects_deaths_description:0,
        total_effects_missing:0,
        total_effects_missing_description:0,
        total_effects_injuries:0,
        total_effects_injuries_description:0,
        total_effects_damages_in_million_dollars:0,
        total_effects_damage_description:0,
        total_effects_houses_destroyed:0,
        total_effects_houses_destroyed_description:0,
        coordinates:[41.2,19.3],
    },{
        "datasetid": "significant-earthquake-database",
         "recordid": "a18a6ad4bd64b61f8e03d0586b5401776ed6432b",
             "region_code": 150,
             location_name: "MEXICO-GUATEMALA:  S CHIAPAS",
             "damage_description": "MODERATE (~$1 to $5 million)",
             "deaths": 20,
             "country": "MEXICO",
             "focal_depth": 114,
             i_d: "4465",
              "eq_mag_unk": 5.7,
              "coordinates": [15.5, -92.7],
              "month": "09",
              "flag_tsunami": "Tsunami",
              year: 1968,
              "deaths_description": "Few (~1 to 50 deaths)",
              "eq_primary": 5.7,
              "day": "25",
              "geometry": {"type": "Point", "coordinates": [-92.7, 15.5]},
              "record_timestamp": "2020-08-27T16:34:54.079+03:00"},

    {"datasetid": "significant-earthquake-database",
    "recordid": "c603830bcc98d9b9c33b05fd4dfb33d373230521",
        "region_code": 140,
        location_name: "IRAN:  NE KHURASAN PROVINCE",
        "damage_description": "MODERATE (~$1 to $5 million)",
        "deaths": 50,
        "country": "IRAN",
        "focal_depth": 11,
        i_d: "4471",
        "eq_mag_unk": 5.6,
        "coordinates": [37.1, 57.9],
        "month": "01",
        "intensity": 8,
        year: 1969,
        "deaths_description": "Few (~1 to 50 deaths)",
        "eq_primary": 5.6, "day": "03",
        "geometry": {"type": "Point", "coordinates": [57.9, 37.1]},
        "record_timestamp": "2020-08-27T16:34:54.079+03:00"},
] */


const Maanjaristykset = ({ quakes, show }) => {
    // const json = '{"result":true, "count":42}';
    // const obj = JSON.parse(json);
    // console.log(obj);

    /* const sortable = [];
    for (let i = 0; i < quakes.length; i += 1) {
        const jsonObj = quakes[i];
        sortable.push(jsonObj);
    } */

    // sortable.sort((a, b) => parseFloat(b.fields.i_d) - parseFloat(a.fields.i_d));
    quakes.sort((a, b) => {
        const textA = a.fields.location_name.toUpperCase();
        const textB = b.fields.location_name.toUpperCase();
        if (textA < textB) { return -1; }
        if (textA > textB) { return 1; }
        return 0;
    });


    return (<div className="col-2">
        {quakes.map(jar => <Maanjaristys key={jar.recordid} jaristys={jar} show={show} />)}
    </div>
    );
};

export default Maanjaristykset;
