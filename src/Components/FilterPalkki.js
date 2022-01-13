import data from './../data/korjattu_geo.json';
import React, { useState } from 'react';
import Opener from './Opener';

const FilterPalkki = ({ setQuake, setChanged, filterObj, setFilterObj }) => {
    let maat = data.features.map(x => x.properties.country)

    maat = [...new Set(maat)].sort()

    const [smaxyear, setsMaxyear] = useState(filterObj.maxyear);
    const [sminyear, setsMinyear] = useState(filterObj.minyear);

    const [smaxMagn, setsMaxMagn] = useState("");
    const [sminMagn, setsMinMagn] = useState("");

    const [loc, setLoc] = useState(filterObj.country);

    const [smaxDeaths, setsMaxDeaths] = useState("");
    const [sminDeaths, setsMinDeaths] = useState("");

    const [sideOpened, setSideOpened] = useState(false)


    function changeFilterObj(minyear, maxyear, country, minmagn, maxmagn, mindeath, maxdeath) {

        if ((minmagn < 0) || (maxmagn < minmagn)) {
            console.log("invalid input")
            return;
        }

        if ((mindeath < 0) || (maxdeath < mindeath)) {
            console.log("invalid input")
            return;
        }

        setsMinyear(minyear);
        setsMaxyear(maxyear);
        setLoc(country);
        setsMaxMagn(maxmagn);
        setsMinMagn(minmagn);
        setsMaxDeaths(maxdeath);
        setsMinDeaths(mindeath);

        // console.log(e.target.value)
        //let year = filterObj.year //näiden tarkoitus päivittyä kun lisätään hakuehtoja?
        let eq_primary = filterObj.eq_primary
        //let year = filterObj.year
        //console.log(e.target.textContent)


        let uusiObj = {
            all: false,
            minyear: minyear,
            maxyear: maxyear,
            country: country,
            maxmagn: maxmagn,
            minmagn: minmagn,
            maxdeath: maxdeath,
            mindeath: mindeath,
            eq_primary

        }
        if (uusiObj !== filterObj) {
            setChanged(true)
            setQuake(null)
            setFilterObj(uusiObj)
        } else {
            setChanged(false)
        }
    }


    return (
        <div className="filterpalkki" style={sideOpened ? {"left": 0} : {left:`-20%`}}>
            <div style={{width: "calc(100%-50px)", "padding": "15px", "borderRadius": "15px"}}>
                <div id="opt" >
                    <label className="h5 container p-0" >year::</label>
                    <div><small>from...</small></div>
                    <input id="minYearLimit" type="number" placeholder="year" min="0" max="2021" onChange={(e) => changeFilterObj(e.target.value, smaxyear, loc, sminMagn, smaxMagn, sminDeaths, smaxDeaths)} />
                    <div><small>to..</small></div>
                    <input id="maxYearLimit" type="number" placeholder="year" min="0" max="2021" onChange={(e) => { changeFilterObj(sminyear, e.target.value, loc, sminMagn, smaxMagn, sminDeaths, smaxDeaths) }} />
                </div>
                <div >
                    <label className="h5 container p-0 pt-3 ">location:</label>
                    <input list="loclist" id="searchTerm" type="text" placeholder="location name" onChange={(e) => { changeFilterObj(sminyear, smaxyear, e.target.value, sminMagn, smaxMagn, sminDeaths, smaxDeaths) }} />
                    <datalist id="loclist">
                        {maat.map(item => <option key={item}> {item}</option>)}
                    </datalist>
                </div>

                <div>
                    <label className="h5 container p-0 pt-3">magnitude:</label>
                    <div><small>from...</small></div>
                    <input placeholder="min" type="number" id="magnitudeMin" min="0" max="12" onChange={(e) => { changeFilterObj(sminyear, smaxyear, loc, e.target.value, smaxMagn, sminDeaths, smaxDeaths) }}></input>
                    <div><small>to..</small></div>
                    <input placeholder="max" type="number" id="magnitudeMax" min="0" max="12" onChange={(e) => { changeFilterObj(sminyear, smaxyear, loc, sminMagn, e.target.value, sminDeaths, smaxDeaths) }}></input>
                </div>
                <div>
                    <label className="h5 container p-0 pt-3">deaths:</label>
                    <div><small>from...</small></div>
                    <input placeholder="min" id="deathMin" type="number" min="0" max="10 000" onChange={(e) => { changeFilterObj(sminyear, smaxyear, loc, sminMagn, smaxMagn, e.target.value, smaxDeaths) }} />
                    <div><small>to..</small></div>
                    <input placeholder="max" id="deathMax" type="number" min="0" max="10 000" onChange={(e) => { changeFilterObj(sminyear, smaxyear, loc, sminMagn, smaxMagn, sminDeaths, e.target.value) }} />
                </div>
            </div>
            <Opener sideOpened={sideOpened} setSideOpened={setSideOpened}></Opener>
        </div>
    );
};

export default FilterPalkki;
