import React from 'react';
import  Uutinen  from './Uutinen';

export default function Uutiset() {
    return (
        <div className="col-2 pb-2 px-3 uutispalkki">
            <Uutinen link="/" text="Uutinen 1" />
            <Uutinen link="/" text="Uutinen 2" />
            <Uutinen link="/" text="Uutinen 3" />
        </div>
    );
}
