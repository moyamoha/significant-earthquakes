import React from 'react';

export default function Uutinen(props) {

    return (
        <div className="card mb-2 kortti border border-warning d-block">
            <div className="card-body">
                <h5 className="card-title"><a href={props.link} target="_blank" rel='norefferer'>{props.text}</a></h5>
                <p className="card-text">{props.snippet}</p>
                <span style={{"textDecoration": "underline", color:"blue", "cursor":"pointer"}} onClick={() => props.setTulokset(null) }>Hide</span>
            </div>
        </div>
    );
}
