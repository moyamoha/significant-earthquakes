import React, {useEffect, useState} from 'react';
import  Uutinen  from './Uutinen';
import { useTranslation } from "react-i18next"; //use translation lisätty

require('dotenv').config()

let axios = require("axios").default;


export default function Uutiset({quake, saaHakea, setSaaHakea}) {   
    let [tulokset, setTulokset] = useState(null);
    useEffect(() => {
        if (quake != null && 2==3) { // Toi on laitettu sitä varten, ettei haeta vaikka klikataankin markereista. Pitää poistaa lopullisessa tuotteessa 
            const searchString = "earthquake+" + quake.properties["country"] + "+year+" + quake.properties["year"];
            console.log(searchString);
        
            let options = {
              method: 'GET',
              url: 'https://google-search3.p.rapidapi.com/api/v1/search/q='+searchString,
              headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'US',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_G_API_KEY
              }
            };
        
            axios.request(options).then(function (response) {
              let haku = {};
              haku = response.data;
              setTulokset(haku);
              setSaaHakea(false);
            }).catch(function (error) {
                setTulokset(null);
                setSaaHakea(false)
                });
            }
    })
    const { t } = useTranslation()
    
    if(tulokset === null) {
        return (
            <div className="col-12 pb-2 my-3 uutispalkki h-50 px-3 pt-3">
                <strong>{t('choose')}</strong>
            </div>
        );
    } else {
        return ( // Tässä tapauksessa haku on onnistunut
            <div className="col-12 pb-2 my-3 uutispalkki h-50 px-3 pt-3">
                {tulokset.results.map(uut => <Uutinen key={uut.title} text={uut.title} snippet={uut.description} link={uut.link} linktext="Siirry uutiseen"></Uutinen>)}
            </div> 
        )
    }
}

