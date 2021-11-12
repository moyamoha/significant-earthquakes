import React from 'react'
import Maanjaristys from './Maanjaristys'
import sampleData from './/../data/earthquake_cut.json'
import data from './/../data/significant-earthquake-database.json'
import { useState } from 'react'

//ongelmat: Varoitusta epävalidista vuodesta tai nimestä ei vielä ole
//itse significant-earthquake-database.json -tiedoston luku ei onnistu, toimii vain leikkauskella

const Maanjaristykset = ({onChangeQuake}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [opt, setOpt] = useState('loc');
    const [limitTermMin, setLimitTermMin] = useState('');
    const [limitTermMax, setLimitTermMax] = useState('');
    const [showQuakes, setShowQuakes] = useState(5);
    //let showQuakes = 3;
    

    

    const filtered = sampleData.filter((val) => {

        if (opt === "limitYear") {
            //tänne limitin toteutus
            const min = parseInt(limitTermMin);
            const max = parseInt(limitTermMax);
           
            
            if ((parseInt(val.fields.year) >= min) && (parseInt(val.fields.year) <= max)) {
                
                return val
             }

            if (!min || !max) {
                console.log("vuodet on yleensä numeroita")
                 return val
             }

             return  
        }

        if (searchTerm === "") {
        
        
            return val
        }
         
        if (opt === "loc"){
           
          if (val.fields.location_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            
            return val
        }
    } else if (opt === "maxYear") {
        //nyt verrataan vuosia
        if (isNaN(parseInt(searchTerm))) {
           // alert("vuodet on yleensä numeroita")
            return val
            
        } else if (parseInt(val.fields.year) <= parseInt(searchTerm)) {
            return val
        }
    }
    else if (opt === "minYear") {
        //nyt verrataan vuosia
        if (isNaN(parseInt(searchTerm))) {
           // alert("vuodet on yleensä numeroita")
            return val
        } else if (parseInt(val.fields.year) >= parseInt(searchTerm)) {
            return val
        }
    }  else if (opt == "magnitude") {
        //magnituudilla rajaus
    }

    
    } )
    
     if (opt == 'loc') {
        filtered.sort((a, b) => a.fields.location_name.localeCompare(b.fields.location_name, 'en'))
    } else if (opt === 'minYear' || opt === 'maxYear') {
        filtered.sort((a, b) => { if (parseInt(a.fields.year) > parseInt(b.fields.year)) { return -1 }
        if (parseInt(a.fields.year) < parseInt(b.fields.year)) { return 1 }
        return 0
    })
    }
    
    const onOptChange = (e) => {
        setOpt(e.target.value)
        setSearchTerm('')
    }

    //const map1 = new Map()
    //filtered.map(jar => map1.set(list.fields.location_name, jar))
    
    
    
   /*
   let addedCountries = []
   //ottaa yhden kärsityksen
   const byCountry1 = (jar, addedContries) => {
    let isListed = false
    //----
    for (let c of addedContries) {
        if (c === key) {
            isListed = true
            break
            
        }
    }
    //---
    if (isListed) {continue}
    addedContries.push(jar.fields.location_name);


   }
   */
  const loadResources = () => {
    
    return (
        filtered.length > 0 ? (
            filtered.splice(0, showQuakes).map(jar => <Maanjaristys key={jar.recordid} jaristys={jar} clickFunc={onChangeQuake} />)) : <div>No results</div> 
    );
  }


    return (<div className="col-2 listapalkki">
        <label for="opt">Select search option</label>
        <select id="opts" name="opts" onChange={event => {onOptChange(event)}}>
            <option value="loc">By location name</option>
            <option value="maxYear">By max year</option>
            <option value="minYear">By min year</option>
            <option value="limitYear">pick a limit</option>

        </select>
        {opt !== "limitYear" ? <div> 
            <input list={opt == "loc" ? "loclist" : "yearlist"} value={searchTerm} id="searchTerm" type="text" placeholder={opt == "loc" ? "Enter location name..." : "Enter year..."} onChange={event => {setSearchTerm(event.target.value)}}/>
             <datalist id="loclist">
                 <option>finland</option>
                 <option>california</option>
                 <option>china</option>
            </datalist></div>
         : <div> 
          <div>from...</div> <input value={limitTermMin} id="minYearLimit" type="text" placeholder="year" onChange={event => {setLimitTermMin(event.target.value)}} /><div>to..</div><input value={limitTermMax} id="maxYearLimit" type="text" placeholder="year"onChange={event => {setLimitTermMax(event.target.value)}} /> </div>}
            <div>  
                {loadResources()}    
            </div>
            <button type="button" onClick={(event) => {setShowQuakes(showQuakes - 1)}}>show less</button>
            <button type="button" onClick={(event) => {setShowQuakes(showQuakes + 1)}}>show more</button>
            
            
        </div>
    );
};

export default Maanjaristykset;
