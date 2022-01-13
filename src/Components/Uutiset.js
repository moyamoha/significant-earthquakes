import React, {useEffect, useState} from 'react';
import  Uutinen  from './Uutinen';

require("dotenv").config();

let axios = require("axios").default;

export default function Uutiset({ quake, saaHakea, setSaaHakea }) {
  let [tulokset, setTulokset] = useState(null);
  useEffect(() => {
    if (quake != null && saaHakea) {
      // Toi on laitettu sitä varten, ettei haeta vaikka klikataankin markereista. Pitää poistaa lopullisessa tuotteessa
      const searchString =
        "earthquake+" +
        quake.properties["country"] +
        "+year+" +
        quake.properties["year"];
      console.log(searchString);

      let options = {
        method: "GET",
        url:
          "https://google-search3.p.rapidapi.com/api/v1/search/q=" +
          searchString,
        headers: {
          "x-user-agent": "desktop",
          "x-proxy-location": "US",
          "x-rapidapi-host": "google-search3.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_G_API_KEY,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          let haku = {};
          haku = response.data;
          setTulokset(haku);
          setSaaHakea(false);
        })
        .catch(function (error) {
          setTulokset(null);
          setSaaHakea(false);
        });
    }
  });

  if (tulokset === null) {
    return (
      <div className="mt-1 uutispalkki px-1 pt-1" style={{bottom: "-205px"}} >
      </div>
    );
  } else {
    return (
      <div className='uutispalkki' style={{bottom: "0"}}>
              <a
                class="btn btn-secondary mt-2 mr-1"
                href="#newsCarousel"
                role="button"
                data-bs-slide="prev"
              >
                <i class="fa fa-arrow-left"></i>
              </a>

            <div
              id="newsCarousel"
              class="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="false"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="card mb-2 kortti border border-warning d-block">
                    <div className="card-body">
                      <h5 className="card-title">News</h5>
                      <p className="card-text">
                        Use the arrows to cycle through news
                      </p>
                    </div>
                  </div>
                </div>

                {tulokset.results.map((uut) => (
                  <div class="carousel-item">
                    <Uutinen
                      key={uut.title}
                      text={uut.title}
                      snippet={uut.description}
                      link={uut.link}
                      linktext="Link"
                      setTulokset={setTulokset}
                    ></Uutinen>
                  </div>
                ))}
              </div>
            </div>
            <a
                class="btn btn-secondary mt-2 mr-1 text-right"
                href="#newsCarousel"
                role="button"
                data-bs-slide="next"
              >
                <i class="fa fa-arrow-right"></i>
              </a>
          </div>
    );
  }
}
