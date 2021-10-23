import React from 'react';
import sampleData from '../data/earthquake_cut.json'

const FilterPalkki = ({data, changeData}) => {
   
    const filterData = () => {
        // Tässä filteroidaan dataa käyttäjän asettamien ehtojen perusteella
    }
    return (
        <div className="col-2 listapalkki">
            {/* Täällä on tarkoituksena luoda erilaisia suodatusvaihtoehtoja */}
        </div>
    );
};

export default FilterPalkki;
