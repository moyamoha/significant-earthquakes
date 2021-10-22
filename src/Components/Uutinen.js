import React from 'react';

export default function Uutinen(props) {
    return (
        <div className="card mb-2 kortti border border-warning">
            <div className="card-body">
                <h5 className="card-title">{props.text}</h5>
                <p className="card-text">Uutisen sisältö</p>
                <a href={props.link}>Linkki</a>
            </div>
        </div>
    );
}
