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
                <div className="navbar-nav my-1">
                    <NavLink link="/" text={t('home')} target="" />
                    <NavLink link="https://www.usgs.gov/natural-hazards/earthquake-hazards/science/science-earthquakes?qt-science_center_objects=0#qt-science_center_objects" target="_blank" text={t('knowledge')} />
                    <NavLink link="https://www.ready.gov/earthquakes" text={t('what_to_do')} target="_blank" />
                  
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {t('language')}
                    </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {languages.map(({ code, name, country_code}) => (
                            <li key={country_code}>
                            <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)} disabled={code === i18next.language}>
                                <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                                {name}
                                </button>
                            </li>
                            ))}
                            
                            
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
}

