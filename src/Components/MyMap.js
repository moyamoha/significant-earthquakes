import React from "react";
import { MapContainer, useMap} from "react-leaflet";
import geo from "./../data/geo.json"
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';



delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});


function getCenter(data) {
    let lat = 0
    let lon = 0
    for (let item of data) {
        lat += item.geometry.coordinates[0]
        lon += item.geometry.coordinates[1]
    }
    return [lat / data.length, lon/data.length].reverse()
}

function MyMap({changed, setChanged, filterObj, setCurrentQuake}) {
    let data = geo.features.filter(item => {
        if (filterObj.all) return true
        else {
            return item.properties.country === filterObj.country && 
            item.properties.eq_primary >= filterObj.eq_primary &&
            item.properties.year >= filterObj.year
        }
    });

    let num = data.length;
    if (data.length === 0) {

    }
    let zoom = data.length === 0 ? 2 : 4
    let position = data.length > 0 ? getCenter(data): [0,0]

    const markerClicked = (e) => {
        setCurrentQuake(e.target.feature)
    }

    function Pisteet({changed, setChanged}) {
        const map = useMap();
        if (changed) {
            map.eachLayer(function (l) {
                l.remove()
            })
            setChanged(false)
            map.panTo(position)
        }
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.geoJSON(data,{
            onEachFeature: function (feature, layer) {
                layer.on({
                    click: markerClicked,
                })
                layer.bindPopup(function (layer) {
                    return layer.feature.properties.country + " " + layer.feature.properties.year
                })
            }
        }).addTo(map)
        return null;
    }
    
   
    return (
        <div className="px-4 mt-3">
            <MapContainer   className="map col-9 w-100" center={position} zoom={zoom} style={{height:"500px"}}>
                <Pisteet changed={changed} setChanged={setChanged}/>
            </MapContainer>
            <div style={{textAlign: "center", }}>Found {num} records</div>
        </div>
    )

}
export default MyMap;
