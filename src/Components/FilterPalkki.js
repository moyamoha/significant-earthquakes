import React from 'react';
import data from './../data/geo.json';

const FilterPalkki = ({setChanged, filterObj, setFilterObj}) => {
   let maat = data.features.map(x => x.properties.country)

    maat = [...new Set(maat)].sort()

    function changeFilterObj(e) {
        let year = filterObj.year
        let eq_primary = filterObj.eq_primary
        let country = filterObj.country
        console.log(e.target.textContent)
        let uusiObj = {
            all: false,
            year,
            country: e.target.textContent,
            eq_primary
        }
        if (uusiObj !== filterObj) {
            setChanged(true)
        } else {
            setChanged(false)
        }
        setFilterObj(uusiObj)
    }
    return (
        <div className="col-2 listapalkki">
            {/* Täällä on tarkoituksena luoda erilaisia suodatusvaihtoehtoja */}
            <ul>
                maat {maat.length}:
                {maat.map(item => <li onClick={(e) => changeFilterObj(e)}>{item}</li>)}
            </ul>
        </div>
    );
};

export default FilterPalkki;
