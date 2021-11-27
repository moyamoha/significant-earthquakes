import React from 'react';

export default function NavLink(props) {
    return (
        <a className="nav-link" aria-current="page" href={props.link} target={props.target}>{props.text}</a>
    );
}
