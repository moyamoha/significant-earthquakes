import React from 'react';
import  Uutinen  from './Uutinen';

//.env -tiedosto projektin juurikansiossa jonne laitetaan api key. Laitetaan
//-env gitignoreen.

//uutisten haku toimii, mutta ei päivity sivulle. Uutiset löytyy ja ne tallennetaan
//objektiksi, edellinen uutinen tulee kun painaa seuraavaa järistystä.

//palautettavien uutisten mappaus? nappi, josta niitä saa lisää näkyviin?

require('dotenv').config()

var axios = require("axios").default;

export default function Uutiset({quake}) {

  if (quake != null) {
    const searchString = "earthquake+" + quake.properties["country"] + "+year+" + quake.properties["year"];
    const encodedString = encodeURI(searchString);
    console.log(searchString);

    var options = {
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
      haku = {};
      haku = response.data;
    	console.log(haku);
    }).catch(function (error) {
    	console.error(error);
    });
    }

  return (
      <div className="col-2 pb-2 px-3 uutispalkki">
          <Uutinen link={haku.results[0].link} text= {haku.results[0].title} linktext= "Siirry uutiseen" snippet={haku.results[0].description} />
          <Uutinen link={haku.results[1].link} text= {haku.results[1].title} linktext= "Siirry uutiseen" snippet={haku.results[1].description} />
          <Uutinen link={haku.results[2].link} text= {haku.results[2].title} linktext= "Siirry uutiseen" snippet={haku.results[2].description} />
          <Uutinen link={haku.results[3].link} text= {haku.results[3].title} linktext= "Siirry uutiseen" snippet={haku.results[3].description} />
          <Uutinen link={haku.results[4].link} text= {haku.results[4].title} linktext= "Siirry uutiseen" snippet={haku.results[4].description} />

      </div>
  );

}

let haku =
{
    "results": [
        {
            "title": "List of earthquakes in 1951 - Wikipedia",
            "link": "https://en.wikipedia.org/wiki/List_of_earthquakes_in_1951",
            "description": "This is a list of earthquakes in 1951. Only magnitude 6.0 or greater earthquakes appear on the list. Lower magnitude events are included if they have caused ...‎Overall · ‎By magnitude · ‎Notable events · ‎April",
            "additional_links": [
                {
                    "text": "List of earthquakes in 1951 - Wikipediahttps://en.wikipedia.org › wiki › List_of_earthquakes_i...",
                    "href": "https://en.wikipedia.org/wiki/List_of_earthquakes_in_1951"
                },
                {
                    "text": "Overall",
                    "href": "https://en.wikipedia.org/wiki/List_of_earthquakes_in_1951#Overall"
                },
                {
                    "text": "By magnitude",
                    "href": "https://en.wikipedia.org/wiki/List_of_earthquakes_in_1951#By_magnitude"
                },
                {
                    "text": "Notable events",
                    "href": "https://en.wikipedia.org/wiki/List_of_earthquakes_in_1951#Notable_events"
                },
                {
                    "text": "April",
                    "href": "https://en.wikipedia.org/wiki/List_of_earthquakes_in_1951#April"
                }
            ],
            "cite": {
                "domain": "https://en.wikipedia.org › wiki › List_of_earthquakes_i...",
                "span": " › wiki › List_of_earthquakes_i..."
            }
        },
        {
            "title": "Quake info: Very strong mag. 6.1 earthquake - Indian Ocean on ...",
            "link": "https://www.volcanodiscovery.com/earthquakes/quake-info/2941878/mag6quake-Jan-25-1951-South-Indian-Ocean.html",
            "description": "Very strong mag. 6.1 earthquake - Indian Ocean on Thursday, 25 Jan 1951 4:35 pm (GMT +0) ... Very strong magnitude 6.1 earthquake at 15 km depth.",
            "additional_links": [
                {
                    "text": "Quake info: Very strong mag. 6.1 earthquake - Indian Ocean on ...https://www.volcanodiscovery.com › quake-info › mag6q...",
                    "href": "https://www.volcanodiscovery.com/earthquakes/quake-info/2941878/mag6quake-Jan-25-1951-South-Indian-Ocean.html"
                }
            ],
            "cite": {
                "domain": "https://www.volcanodiscovery.com › quake-info › mag6q...",
                "span": " › quake-info › mag6q..."
            }
        },
        {
            "title": "6.1 magnitude earthquake near South Indian Ocean : January 25 ...",
            "link": "https://earthquaketrack.com/quakes/1951-01-25-16-35-35-utc-6-1-15",
            "description": " › quakes › 1951-01-25-16-...  › quakes › 1951-01-25-16-... Today: 6.0 magnitude earthquake near Sinabang, Aceh, Indonesia. 6.1 magnitude earthquake. 70 years ago. UTC time: Thursday, January 25, 1951 16:35 PM.",
            "additional_links": [
                {
                    "text": "6.1 magnitude earthquake near South Indian Ocean : January 25 ...https://earthquaketrack.com › quakes › 1951-01-25-16-...",
                    "href": "https://earthquaketrack.com/quakes/1951-01-25-16-35-35-utc-6-1-15"
                },
                {
                    "text": "6.3 magnitude earthquake near Mid-Indian Ridge : May 02, 1951 16 ...https://earthquaketrack.com › quakes › 1951-05-02-16-...",
                    "href": "https://earthquaketrack.com/quakes/1951-05-02-16-17-03-utc-6-3-15"
                }
            ],
            "cite": {
                "domain": "https://earthquaketrack.com › quakes › 1951-01-25-16-...",
                "span": " › quakes › 1951-01-25-16-..."
            }
        },
        {
            "title": "6.1 magnitude earthquake near South Indian Ocean : January 25 ...",
            "link": "https://earthquaketrack.com/quakes/1951-01-25-16-35-35-utc-6-1-15",
            "description": "Today: 6.0 magnitude earthquake near Sinabang, Aceh, Indonesia. 6.1 magnitude earthquake. 70 years ago. UTC time: Thursday, January 25, 1951 16:35 PM.",
            "additional_links": [
                {
                    "text": "6.1 magnitude earthquake near South Indian Ocean : January 25 ...https://earthquaketrack.com › quakes › 1951-01-25-16-...",
                    "href": "https://earthquaketrack.com/quakes/1951-01-25-16-35-35-utc-6-1-15"
                }
            ],
            "cite": {
                "domain": "https://earthquaketrack.com › quakes › 1951-01-25-16-...",
                "span": " › quakes › 1951-01-25-16-..."
            }
        },
        {
            "title": "6.3 magnitude earthquake near Mid-Indian Ridge : May 02, 1951 16 ...",
            "link": "https://earthquaketrack.com/quakes/1951-05-02-16-17-03-utc-6-3-15",
            "description": "Yesterday: 6.2 magnitude earthquake near Masachapa, Managua, Nicaragua. 6.3 magnitude earthquake. 70 years ago. UTC time: Wednesday, May 02, 1951 16:17 PM.",
            "additional_links": [
                {
                    "text": "6.3 magnitude earthquake near Mid-Indian Ridge : May 02, 1951 16 ...https://earthquaketrack.com › quakes › 1951-05-02-16-...",
                    "href": "https://earthquaketrack.com/quakes/1951-05-02-16-17-03-utc-6-3-15"
                }
            ],
            "cite": {
                "domain": "https://earthquaketrack.com › quakes › 1951-05-02-16-...",
                "span": " › quakes › 1951-05-02-16-..."
            }
        },
        {
            "title": "Today in Earthquake History: Assam 1950",
            "link": "https://seismo.berkeley.edu/blog/2017/08/15/today-in-earthquake-history-assam-1950.html",
            "description": "Aug 15, 2017 — It was August 15, 1950. People all over India were ready to celebrate their Independence Day, three years after Britain had released the ...",
            "additional_links": [
                {
                    "text": "Today in Earthquake History: Assam 1950https://seismo.berkeley.edu › blog › 2017/08/15 › toda...",
                    "href": "https://seismo.berkeley.edu/blog/2017/08/15/today-in-earthquake-history-assam-1950.html"
                }
            ],
            "cite": {
                "domain": "https://seismo.berkeley.edu › blog › 2017/08/15 › toda...",
                "span": " › blog › 2017/08/15 › toda..."
            }
        },
        {
            "title": "Seismicity of the Indian Ocean - Wiley Online Library",
            "link": "https://onlinelibrary.wiley.com/doi/pdf/10.1029/JZ071i010p02575",
            "description": "c 1922, excep• for the years 1942 and 1951 when large earthquakes occurred. A solution of the equation Log N' -- a n u b(8 -- M), based on data.",
            "additional_links": [
                {
                    "text": "Seismicity of the Indian Ocean - Wiley Online Libraryhttps://onlinelibrary.wiley.com › doi › pdf",
                    "href": "https://onlinelibrary.wiley.com/doi/pdf/10.1029/JZ071i010p02575"
                }
            ],
            "cite": {
                "domain": "https://onlinelibrary.wiley.com › doi › pdf",
                "span": " › doi › pdf"
            }
        },
        {
            "title": "ith Dee - USGS Publications Repository",
            "link": "https://pubs.usgs.gov/bul/1951/report.pdf",
            "description": " › bul › 1951 › report  › bul › 1951 › report PDF (U.S. Geological Survey bulletin ; 1951) ... Year of. Well site or oil field location. Type. (m) pressure earthquake injection earthquakes.",
            "additional_links": [
                {
                    "text": "ith Dee - USGS Publications Repositoryhttps://pubs.usgs.gov › bul › 1951 › report",
                    "href": "https://pubs.usgs.gov/bul/1951/report.pdf"
                },
                {
                    "text": "Why are we having so many earthquakes? Has naturally ...https://www.usgs.gov › faqs › why-are-we-having-so-m...",
                    "href": "https://www.usgs.gov/faqs/why-are-we-having-so-many-earthquakes-has-naturally-occurring-earthquake-activity-been"
                },
                {
                    "text": "Tsunami Generation from the 2004 M=9.1 Sumatra-Andaman ...https://www.usgs.gov › centers › pcmsc › science › tsun...",
                    "href": "https://www.usgs.gov/centers/pcmsc/science/tsunami-generation-2004-m91-sumatra-andaman-earthquake"
                }
            ],
            "cite": {
                "domain": "https://pubs.usgs.gov › bul › 1951 › report",
                "span": " › bul › 1951 › report"
            }
        },
        {
            "title": "ith Dee - USGS Publications Repository",
            "link": "https://pubs.usgs.gov/bul/1951/report.pdf",
            "description": "(U.S. Geological Survey bulletin ; 1951) ... Year of. Well site or oil field location. Type. (m) pressure earthquake injection earthquakes.",
            "additional_links": [
                {
                    "text": "ith Dee - USGS Publications Repositoryhttps://pubs.usgs.gov › bul › 1951 › report",
                    "href": "https://pubs.usgs.gov/bul/1951/report.pdf"
                }
            ],
            "cite": {
                "domain": "https://pubs.usgs.gov › bul › 1951 › report",
                "span": " › bul › 1951 › report"
            }
        },
        {
            "title": "Why are we having so many earthquakes? Has naturally ...",
            "link": "https://www.usgs.gov/faqs/why-are-we-having-so-many-earthquakes-has-naturally-occurring-earthquake-activity-been",
            "description": "That includes 15 earthquakes in the magnitude 7 range and one earthquake magnitude 8.0 or greater. In the past 40-50 years, our records show that we have ...",
            "additional_links": [
                {
                    "text": "Why are we having so many earthquakes? Has naturally ...https://www.usgs.gov › faqs › why-are-we-having-so-m...",
                    "href": "https://www.usgs.gov/faqs/why-are-we-having-so-many-earthquakes-has-naturally-occurring-earthquake-activity-been"
                }
            ],
            "cite": {
                "domain": "https://www.usgs.gov › faqs › why-are-we-having-so-m...",
                "span": " › faqs › why-are-we-having-so-m..."
            }
        },
        {
            "title": "Tsunami Generation from the 2004 M=9.1 Sumatra-Andaman ...",
            "link": "https://www.usgs.gov/centers/pcmsc/science/tsunami-generation-2004-m91-sumatra-andaman-earthquake",
            "description": "The December 26, 2004 magnitude (M) 9.1 Sumatra-Andaman earthquake occurred along a tectonic subduction zone in which the India Plate, an oceanic plate, ...",
            "additional_links": [
                {
                    "text": "Tsunami Generation from the 2004 M=9.1 Sumatra-Andaman ...https://www.usgs.gov › centers › pcmsc › science › tsun...",
                    "href": "https://www.usgs.gov/centers/pcmsc/science/tsunami-generation-2004-m91-sumatra-andaman-earthquake"
                }
            ],
            "cite": {
                "domain": "https://www.usgs.gov › centers › pcmsc › science › tsun...",
                "span": " › centers › pcmsc › science › tsun..."
            }
        },
        {
            "title": "Deep Earthquakes - Page 419 - Google Books Result",
            "link": "https://books.google.com/books?id=-lZGdmBwSPkC&pg=PA419&lpg=PA419&dq=earthquake+INDIAN+OCEAN+year+1951&source=bl&ots=XQjTLvZPJk&sig=ACfU3U3RK0yFyCCJedJQbFeiscEe0QZ0Fw&hl=en&sa=X&ved=2ahUKEwiv_qCSzKL0AhWVpnIEHVuPAwwQ6AF6BAgWEAM",
            "description": "Cliff Frohlich · 2006 · ‎ScienceSeismicity and plate deformation below the Andaman arc, northeastern Indian Ocean, Tectonophysics, 225, doi:10.1016/0040-1951(93)90314-A, 529–542.",
            "additional_links": [
                {
                    "text": "Deep Earthquakes - Page 419 - Google Books Resulthttps://books.google.com › books",
                    "href": "https://books.google.com/books?id=-lZGdmBwSPkC&pg=PA419&lpg=PA419&dq=earthquake+INDIAN+OCEAN+year+1951&source=bl&ots=XQjTLvZPJk&sig=ACfU3U3RK0yFyCCJedJQbFeiscEe0QZ0Fw&hl=en&sa=X&ved=2ahUKEwiv_qCSzKL0AhWVpnIEHVuPAwwQ6AF6BAgWEAM"
                },
                {
                    "text": "Cliff Frohlich",
                    "href": "/search?tbm=bks&q=inauthor:%22Cliff+Frohlich%22&sa=X&ved=2ahUKEwiv_qCSzKL0AhWVpnIEHVuPAwwQ9Ah6BAgWEAY"
                }
            ],
            "cite": {
                "domain": "https://books.google.com › books",
                "span": " › books"
            }
        }
    ],
    "image_results": [],
    "total": 1680000,
    "answers": [],
    "ts": 1.3125956058502197,
    "device_region": "US",
    "device_type": "desktop"
}
