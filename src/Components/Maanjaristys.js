import React from 'react';

const Maanjaristys = ({ jaristys, clickFunc }) =>

     (
        <div onClick={() => {
            clickFunc(jaristys)
        }}>
            <p ><small>{jaristys.fields.location_name.toLowerCase()}</small></p>
        </div>
    );

export default Maanjaristys;
