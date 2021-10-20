import React from 'react';
import Maanjaristys from './Maanjaristys';

const Maanjaristykset = ({ quakes, show }) => {
    // const json = '{"result":true, "count":42}';
    // const obj = JSON.parse(json);
    // console.log(obj);

    /* const sortable = [];
    for (let i = 0; i < quakes.length; i += 1) {
        const jsonObj = quakes[i];
        sortable.push(jsonObj);
    } */

    // sortable.sort((a, b) => parseFloat(b.fields.i_d) - parseFloat(a.fields.i_d));
    quakes.sort((a, b) => a.localeCompare(b, 'en'));

    return (<div className="col-2">
            {quakes.map(jar =><Maanjaristys key={jar.recordid} jaristys={jar} show={show} />)}
        </div>
    );
};

export default Maanjaristykset;
