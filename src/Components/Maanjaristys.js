import React from 'react';


const Maanjaristys = ({ jaristys, show }) =>

    /*  const klikattu = (e) => {
        console.log(show)
    } */


     (
         <div className="row" >
             <div onClick={() => { show(jaristys.fields.i_d); }} className={'col-md-2'} style={{ backgroundColor: 'beige', cursor: 'pointer' }} >
                 <p ><small>{jaristys.fields.location_name}</small></p>

             </div>
         </div>
    );

export default Maanjaristys;
