import React from 'react';

const FilterPalkki = ({setFilterFunction}) => {
   
    const filterData = (data) => {
        // Tässä filteroidaan dataa käyttäjän asettamien ehtojen perusteella
    }
    return (
        <div className="col-2 listapalkki" onClick={e => filterData()}>
            {/* Täällä on tarkoituksena luoda erilaisia suodatusvaihtoehtoja */}
        </div>
    );
};

export default FilterPalkki;
