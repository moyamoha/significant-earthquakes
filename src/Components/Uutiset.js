import React, {useEffect, useState} from 'react';
import  Uutinen  from './Uutinen';

//.env -tiedosto projektin juurikansiossa jonne laitetaan api key. Laitetaan
//-env gitignoreen.

//uutisten haku toimii, mutta ei päivity sivulle. Uutiset löytyy ja ne tallennetaan
//objektiksi, edellinen uutinen tulee kun painaa seuraavaa järistystä.

//palautettavien uutisten mappaus? nappi, josta niitä saa lisää näkyviin?

require('dotenv').config()

let axios = require("axios").default;

export default function Uutiset({quake}) {
    let [tulokset, setTulokset] = useState(null);
    useEffect(() => {
        if (quake != null) {
            const searchString = "earthquake+" + quake.properties["country"] + "+year+" + quake.properties["year"];
            const encodedString = encodeURI(searchString);
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
            }).catch(function (error) {
                console.error(error);
            });
            }
    })

    if(tulokset === null) {
        return (
            <div className="col-12 pb-2 px-3 uutispalkki border border-info">

            </div>
        );
    } else {
        return (
            <div className="col-12 pb-2 px-3 uutispalkki border border-info">
                {tulokset.results.map(uut => <Uutinen text={uut.title} snippet={uut.description} link={uut.link} linktext="Siirry uutiseen"></Uutinen>)}      
            </div> 
        )
    }

}

