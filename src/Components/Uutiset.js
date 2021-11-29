import React from 'react';
import  Uutinen  from './Uutinen';

export default function Uutiset() {
    return (
        <div className=" pb-2 px-3 uutispalkki d-flex flex-row">
            <Uutinen link="/" text="Uutinen 1" />
            <Uutinen link="/" text="Uutinen 2" />
            <Uutinen link="/" text="Uutinen 3" />
        </div>
    );
}
