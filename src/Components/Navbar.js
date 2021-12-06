import React from 'react';
import NavLink from './NavLink';
import { useTranslation } from "react-i18next";
import 'flag-icon-css/css/flag-icons.min.css';
import i18next from 'i18next';


const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code: 'fi',
        name: 'Suomi',
        country_code: 'fi'
    }
]

export default function Navbar() {
    const { t } = useTranslation()
    return (
        <nav id="top-nav" className="navbar navbar-expand-lg navbar-light bg-light py-0">
            <div className="container-fluid">
                <div className="navbar-nav my-1 d-flex w-100 justify-content-between">
                    <div className="navbar-linkit">
                        <NavLink link="/" text={t('home')} target="" />
                        <NavLink link="https://www.usgs.gov/natural-hazards/earthquake-hazards/science/science-earthquakes?qt-science_center_objects=0#qt-science_center_objects" target="_blank" text={t('knowledge')} />
                        <NavLink link="https://www.ready.gov/earthquakes" text={t('what_to_do')} target="_blank" />
                    </div>

                    <div className="d-flex justify-content-between mx-1" style={{width:"60px"}}>
                        { languages.map(( {code} ) => <span className="lan" onClick={() => i18next.changeLanguage(code)} >
                            {code.toUpperCase()}
                        </span> 
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

