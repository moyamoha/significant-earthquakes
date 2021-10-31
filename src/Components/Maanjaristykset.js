import React from 'react';
import Maanjaristys from './Maanjaristys';
import sampleData from './/../data/earthquake_cut.json'
import data from './/../data/significant-earthquake-database.json'
import { useState } from 'react'

//ongelmat: Varoitusta epävalidista vuodesta tai nimestä ei vielä ole
//itse significant-earthquake-database.json -tiedoston luku ei onnistu, toimii vain leikkauskella

const Maanjaristykset = ({onChangeQuake}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [opt, setOpt] = useState('loc');

    const filtered = sampleData.filter((val) => {
        if (searchTerm == "") {
            
            return val
        }
        if (opt == "loc"){
          if (val.fields.location_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            
            return val
        }
    } else if (opt == "maxYear") {
        //nyt verrataan vuosia
        if (isNaN(parseInt(searchTerm))) {
           // alert("vuodet on yleensä numeroita")
            return val
            
        } else if (parseInt(val.fields.year) <= parseInt(searchTerm)) {
            return val
        }
    }
    else if (opt == "minYear") {
        //nyt verrataan vuosia
        if (isNaN(parseInt(searchTerm))) {
           // alert("vuodet on yleensä numeroita")
            return val
        } else if (parseInt(val.fields.year) >= parseInt(searchTerm)) {
            return val
        }
    }
    
    } )
    
     if (opt == 'loc') {
        filtered.sort((a, b) => a.fields.location_name.localeCompare(b.fields.location_name, 'en'))
    } else if (opt == 'minYear' || opt == 'maxYear') {
        filtered.sort((a, b) => { if (parseInt(a.fields.year) > parseInt(b.fields.year)) { return -1 }
        if (parseInt(a.fields.year) < parseInt(b.fields.year)) { return 1 }
        return 0
    })
    } 

    const onOptChange = (e) => {
        setOpt(e.target.value)
        setSearchTerm('')
    }


    return (<div className="col-2 listapalkki">
        <label for="opt">Select search option</label>
        <select id="opts" name="opts" onChange={event => {onOptChange(event)}}>
            <option value="loc">By location name</option>
            <option value="maxYear">By max year</option>
            <option value="minYear">By min year</option>
        </select>
        <input value={searchTerm} id="searchTerm" type="text" placeholder={opt == "loc" ? "Enter location name..." : "Enter year..."} onChange={event => {setSearchTerm(event.target.value)}}/>
            <div>
                {filtered.length > 0 ? (
                    filtered.map(jar => <Maanjaristys key={jar.recordid} jaristys={jar} clickFunc={onChangeQuake} />)) : <div>No results</div>}
                   
            </div>
            
        </div>
    );
};

export default Maanjaristykset;
