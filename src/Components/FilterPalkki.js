import React from 'react';
import sampleData from '../data/earthquake_cut.json'

const FilterPalkki = ({changeData}) => {
   
    const filterData = () => {
        const eq_primary = document.getElementById
    }
    return (<div className="col-2 listapalkki">
                <h4>Filter map by:</h4>
                <hr></hr>
                <input type="range" min="1" max="10" onInput={{filterData}}></input>
            </div>
    );
};

export default FilterPalkki;
