import React from 'react';
import  Uutinen  from './Uutinen';

export default function Uutiset({quake}) {

    return (
        <div className="col-2 pb-2 px-3 uutispalkki">
            <Uutinen link={haku.organic[0].url} text= {haku.organic[0].title} linktext= "Siirry uutiseen" snippet={haku.organic[0].snippet} />
            <Uutinen link={haku.organic[5].url} text= {haku.organic[5].title} linktext= "Siirry uutiseen" snippet={haku.organic[5].snippet} />
            <Uutinen link={haku.organic[2].url} text= {haku.organic[2].title} linktext= "Siirry uutiseen" snippet={haku.organic[2].snippet} />
            <Uutinen link={haku.organic[3].url} text= {haku.organic[3].title} linktext= "Siirry uutiseen" snippet={haku.organic[3].snippet} />
            <Uutinen link={haku.organic[4].url} text= {haku.organic[4].title} linktext= "Siirry uutiseen" snippet={haku.organic[4].snippet} />

        </div>
    );
}
// TESTIUUTINEN, ETTEI SEARCH QUOTA MENE TÄYTEEN
let haku = {
    "currentPage": 1,
    "keyword": "earthquake+CANADA+year+1982",
    "organic": [
        {
            "domain": "earthquakescanada.nrcan.gc.ca",
            "linkType": "LANDING",
            "position": 1,
            "snippet": "2, Spring 1982. At 0853 Atlantic Standard Time Saturday January 9, 1 982, the Miramichi region of north-central New Brunswick was shaken by the largest earthquake to have affected the Maritimes since 1929.Jan 9, 1982",
            "title": "Double-Earthquake of Miramichi, New Brunswick, in 1982",
            "url": "https://earthquakescanada.nrcan.gc.ca/historic-historique/events/19820109-en.php#:~:text=2%2C%20Spring%201982.,affected%20the%20Maritimes%20since%201929.",
            "featured": true
        },
        {
            "domain": "earthquakescanada.nrcan.gc.ca",
            "linkType": "LANDING",
            "position": 2,
            "snippet": "",
            "title": "Double-Earthquake of Miramichi, New Brunswick, in 1982",
            "url": "https://earthquakescanada.nrcan.gc.ca/historic-historique/events/19820109-en.php#:~:text=2%2C%20Spring%201982.,affected%20the%20Maritimes%20since%201929."
        },
        {
            "domain": "www.cbc.ca",
            "linkType": "LANDING",
            "position": 3,
            "snippet": "The epicentre of the 1982 earthquake was in Miramichi, but tremors were felt throughout the Maritime Provinces, Quebec and the New England States.",
            "title": "1982: Earthquake shakes up East Coast - CBC Archives",
            "url": "https://www.cbc.ca/archives/entry/1982-earthquake-shakes-up-east-coast"
        },
        {
            "domain": "en.wikipedia.org",
            "linkType": "LANDING",
            "position": 4,
            "snippet": "DatePlaceLatLonDeathsInjuriesMag.MMI2017‑05‑01Stikine Region, British Columbia59.83‑136.70006.3VIII2017‑05‑01Stikine Region, British Columbia59.82‑136.71006.2VII2017‑01‑08Nunavut74.39‑92.42006.0VIIView 45 more rows",
            "title": "List of earthquakes in Canada - Wikipedia",
            "url": "https://en.wikipedia.org/wiki/List_of_earthquakes_in_Canada"
        },
        {
            "domain": "pubs.geoscienceworld.org",
            "linkType": "LANDING",
            "position": 5,
            "snippet": "by RJ Wetmiller · 1984 · Cited by 101 — ... New Brunswick, earthquake of 9 January 1982 was located by comparison to the aftershock distribution in central New Brunswick, Canada, ...",
            "title": "Aftershock sequences of the 1982 Miramichi, New Brunswick ...",
            "url": "https://pubs.geoscienceworld.org/ssa/bssa/article/74/2/621/102208/aftershock-sequences-of-the-1982-miramichi-new"
        },
        {
            "domain": "cdnsciencepub.com",
            "linkType": "LANDING",
            "position": 6,
            "snippet": "by S Ma · 2017 · Cited by 2 — On 9 January 1982, in the Miramichi region of New Brunswick, Canada, an earthquake with body-wave magnitude (mb) 5.7 occurred, and extensive aftershocks ...",
            "title": "Focal depth distribution of the 1982 Miramichi earthquake ...",
            "url": "https://cdnsciencepub.com/doi/abs/10.1139/cjes-2016-0111"
        },
        {
            "domain": "www.volcanodiscovery.com",
            "linkType": "LANDING",
            "position": 7,
            "snippet": "Strong mag. 5.1 earthquake - 87 km west of Miramichi, Northumberland County, New Brunswick, Canada, on Saturday, January 9, 1982 at 16:36 (GMT) · Strong ...",
            "title": "Quake info: Strong mag. 5.1 earthquake - 87 km west of ...",
            "url": "https://www.volcanodiscovery.com/earthquakes/quake-info/3047613/mag5quake-Jan-9-1982-New-Brunswick-Canada.html"
        },
        {
            "domain": "pubs.er.usgs.gov",
            "linkType": "LANDING",
            "position": 8,
            "snippet": "by WJ Person · 1982 — The first major earthquake (magnitude 7.0-7.9) of the year was on January 11 ... Canada experienced one of its strongest earthquakes in a number of years on ...",
            "title": "Earthquakes; January-February 1982 - USGS Publications ...",
            "url": "https://pubs.er.usgs.gov/publication/70169164"
        },
        {
            "domain": "www.nytimes.com",
            "linkType": "LANDING",
            "position": 9,
            "snippet": "Jan 12, 1982 — 12, 1982, Section A, Page 12 of the National edition with the headline: Around the Nation; Third Earthquake Hits Canada, New England.",
            "title": "Around the Nation; Third Earthquake Hits Canada, New England",
            "url": "https://www.nytimes.com/1982/01/12/us/around-the-nation-third-earthquake-hits-canada-new-england.html"
        },
        {
            "domain": "www.saltwire.com",
            "linkType": "LANDING",
            "position": 10,
            "snippet": "Allison Bent, a seismologist with Earthquakes Canada, said Sunday's quake was recorded ... The 1982 quake, centred midway between Miramichi and Grand Falls, ...",
            "title": "N.B. earthquake not an every day experience, but not unusual ...",
            "url": "https://www.saltwire.com/atlantic-canada/holidays/nb-earthquake-not-an-every-day-experience-but-not-unusual-either-64966/"
        },
        {
            "domain": "www.csmonitor.com",
            "linkType": "LANDING",
            "position": 11,
            "snippet": "Jan 11, 1982 — The worst earthquake in 126 years shook New England and southeast Canada this weekend, causing minor property damage in Maine and rocking ...",
            "title": "New England, Canada shaken by earthquake - CSMonitor.com",
            "url": "https://www.csmonitor.com/1982/0111/011125.html"
        }
    ],
    "pagination": [
        {
            "page": 1,
            "path": ""
        },
        {
            "page": 2,
            "path": "/search?q=earthquake%2BCANADA%2Byear%2B1982&gl=us&hl=en&ei=JVeNYbHJH8_AytMPl_uakAI&start=10&sa=N&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ8tMDegQIARA3"
        },
        {
            "page": 3,
            "path": "/search?q=earthquake%2BCANADA%2Byear%2B1982&gl=us&hl=en&ei=JVeNYbHJH8_AytMPl_uakAI&start=20&sa=N&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ8tMDegQIARA5"
        },
        {
            "page": 4,
            "path": "/search?q=earthquake%2BCANADA%2Byear%2B1982&gl=us&hl=en&ei=JVeNYbHJH8_AytMPl_uakAI&start=30&sa=N&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ8tMDegQIARA7"
        },
        {
            "page": 5,
            "path": "/search?q=earthquake%2BCANADA%2Byear%2B1982&gl=us&hl=en&ei=JVeNYbHJH8_AytMPl_uakAI&start=40&sa=N&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ8tMDegQIARA9"
        },
        {
            "page": 6,
            "path": "/search?q=earthquake%2BCANADA%2Byear%2B1982&gl=us&hl=en&ei=JVeNYbHJH8_AytMPl_uakAI&start=50&sa=N&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ8tMDegQIARA_"
        },
        {
            "page": 7,
            "path": "/search?q=earthquake%2BCANADA%2Byear%2B1982&gl=us&hl=en&ei=JVeNYbHJH8_AytMPl_uakAI&start=60&sa=N&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ8tMDegQIARBB"
        },
        {
            "page": 8,
            "path": "/search?q=earthquake%2BCANADA%2Byear%2B1982&gl=us&hl=en&ei=JVeNYbHJH8_AytMPl_uakAI&start=70&sa=N&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ8tMDegQIARBD"
        },
        {
            "page": 9,
            "path": "/search?q=earthquake%2BCANADA%2Byear%2B1982&gl=us&hl=en&ei=JVeNYbHJH8_AytMPl_uakAI&start=80&sa=N&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ8tMDegQIARBF"
        },
        {
            "page": 10,
            "path": "/search?q=earthquake%2BCANADA%2Byear%2B1982&gl=us&hl=en&ei=JVeNYbHJH8_AytMPl_uakAI&start=90&sa=N&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ8tMDegQIARBH"
        }
    ],
    "relatedKeywords": [
        {
            "keyword": "ontario earthquake history",
            "path": "/search?gl=us&hl=en&q=Ontario+earthquake+history&sa=X&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ1QJ6BAgcEAE"
        },
        {
            "keyword": "list of earthquakes in the last 10 years",
            "path": "/search?gl=us&hl=en&q=List+of+earthquakes+in+the+last+10+years&sa=X&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ1QJ6BAgtEAE"
        },
        {
            "keyword": "victoria canada earthquake",
            "path": "/search?gl=us&hl=en&q=Victoria+Canada+earthquake&sa=X&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ1QJ6BAgkEAE"
        },
        {
            "keyword": "the big one earthquake canada",
            "path": "/search?gl=us&hl=en&q=The+Big+one+earthquake+Canada&sa=X&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ1QJ6BAgnEAE"
        },
        {
            "keyword": "last major earthquake",
            "path": "/search?gl=us&hl=en&q=Last+major+earthquake&sa=X&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ1QJ6BAgmEAE"
        },
        {
            "keyword": "worst earthquake in history",
            "path": "/search?gl=us&hl=en&q=Worst+earthquake+in+history&sa=X&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ1QJ6BAglEAE"
        },
        {
            "keyword": "alberta earthquake history",
            "path": "/search?gl=us&hl=en&q=Alberta+earthquake+history&sa=X&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ1QJ6BAgoEAE"
        },
        {
            "keyword": "buckingham earthquake",
            "path": "/search?gl=us&hl=en&q=Buckingham+earthquake&sa=X&ved=2ahUKEwjx74D47pD0AhVPoHIEHZe9BiIQ1QJ6BAgdEAE"
        }
    ],
    "totalResults": 10400000,
    "timeTaken": 0.52
}
