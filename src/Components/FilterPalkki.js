import React from 'react';
import sampleData from '../data/earthquake_cut.json'

const FilterPalkki = ({setFilterFunction}) => {
   
    const filterData = () => {
        // Tässä filteroidaan dataa käyttäjän asettamien ehtojen perusteella
        const filterF = (item) => { return item.fields.year > 2000}
        setFilterFunction(filterF)
    }
    return (
        <div className="col-2 listapalkki" onClick={e => filterData()}>
            {/* Täällä on tarkoituksena luoda erilaisia suodatusvaihtoehtoja */}
        </div>
    );
};

export default FilterPalkki;
