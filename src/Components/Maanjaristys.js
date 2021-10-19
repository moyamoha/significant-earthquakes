import React from 'react';


const Maanjaristys = ({ jaristys, show }) =>

    /*  const klikattu = (e) => {
        console.log(show)
    } */


     (
        <div onClick={() => { show(jaristys.fields.i_d); }}>
            <p ><small>{jaristys.fields.location_name.toLowerCase()}</small></p>
        </div>
    );

export default Maanjaristys;
