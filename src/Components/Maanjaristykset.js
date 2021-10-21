import React from 'react';
import Maanjaristys from './Maanjaristys';
import './../../src/App.css';

const Maanjaristykset = ({ quakes, show }) => {
    quakes.sort((a, b) => a.fields.location_name.localeCompare(b.fields.location_name, 'en'));

    return (<div className="col-2 listapalkki">
            {quakes.map(jar =><Maanjaristys key={jar.recordid} jaristys={jar} show={show} />)}
        </div>
    );
};

export default Maanjaristykset;
