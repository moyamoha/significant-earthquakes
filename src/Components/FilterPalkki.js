import data from './../data/korjattu_geo.json';
import React, {useState} from 'react';

const FilterPalkki = ({setQuake,setChanged, filterObj, setFilterObj}) => {
   let maat = data.features.map(x => x.properties.country)

    maat = [...new Set(maat)].sort()
    
    const [smaxyear, setsMaxyear] = useState(filterObj.maxyear);
    const [sminyear, setsMinyear] = useState(filterObj.minyear);

    const [smaxMagn, setsMaxMagn] = useState("");
    const [sminMagn, setsMinMagn] = useState("");

    const [loc, setLoc] = useState(filterObj.country);

    const [smaxDeaths, setsMaxDeaths] = useState("");
    const [sminDeaths, setsMinDeaths] = useState("");
    

    function changeFilterObj(minyear, maxyear, country, minmagn, maxmagn, mindeath, maxdeath) {

        setsMinyear(minyear);
        setsMaxyear(maxyear);
        setLoc(country);
        setsMaxMagn(maxmagn);
        setsMinMagn(minmagn);
        setsMaxDeaths(maxdeath);
        setsMinDeaths(mindeath);
        let eq_primary = filterObj.eq_primary
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
        <div className="col-2 listapalkki">
            <label htmlFor="opt">Year:</label>
            <div id="opt"> 
                <div>from...</div> 
                <input id="minYearLimit" type="number" placeholder="year" min="0" max="2021" onChange={(e) => changeFilterObj(e.target.value, smaxyear, loc, sminMagn, smaxMagn, sminDeaths,smaxDeaths)}/>
                <div>to..</div>
                <input id="maxYearLimit" type="number" placeholder="year" min="0" max="2021" onChange={(e) => {changeFilterObj(sminyear, e.target.value, loc, sminMagn, smaxMagn, sminDeaths,smaxDeaths)}}/>
           </div>
           <label>Location:</label>
           <div> 
            <input list="loclist" id="searchTerm" type="text" placeholder="Enter location name..." onChange={(e) => {changeFilterObj(sminyear, smaxyear, e.target.value, sminMagn, smaxMagn, sminDeaths,smaxDeaths)}}/>
             <datalist id="loclist">
                {maat.map(item => <option key={item}> {item}</option>)}    
            </datalist>
           </div>
            <label>Magnitude:</label>
            <div>
                <div>from..</div>
            <input placeholder="min" type="number" id="magnitudeMin" min="0" max="12" onChange={(e) => {changeFilterObj(sminyear, smaxyear, loc, e.target.value, smaxMagn, sminDeaths,smaxDeaths)}}></input>
            <div>to..</div>
            <input placeholder="max" type="number" id="magnitudeMax"  min="0" max="12" onChange={(e) => {changeFilterObj(sminyear, smaxyear, loc, sminMagn, e.target.value, sminDeaths,smaxDeaths)}}></input>
            </div>
            <label>Deaths:</label>
            <div>form..</div>
            <input placeholder="min" id="deathMin" type="number" min="0" max="10 000" onChange={(e) => {changeFilterObj(sminyear, smaxyear, loc, sminMagn, smaxMagn, e.target.value,smaxDeaths)}}/>
            <div>to..</div>
            <input placeholder="max" id="deathMax" type="number" min="0" max="10 000" onChange={(e) => {changeFilterObj(sminyear, smaxyear, loc, sminMagn, smaxMagn, sminDeaths, e.target.value)}}/>
        </div>
    );
};

export default FilterPalkki;
