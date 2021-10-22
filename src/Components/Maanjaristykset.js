import React from 'react';
import Maanjaristys from './Maanjaristys';
import sampleData from './/../data/earthquake_cut.json'

const Maanjaristykset = ({onChangeQuake}) => {
    sampleData.sort((a, b) => a.fields.location_name.localeCompare(b.fields.location_name, 'en'));

    return (<div className="col-2 listapalkki">
            {sampleData.map(jar =><Maanjaristys key={jar.recordid} jaristys={jar} clickFunc={onChangeQuake} />)}
        </div>
    );
};

export default Maanjaristykset;
