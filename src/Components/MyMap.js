import React, {useState}  from "react";
import { MapContainer, TileLayer ,useMap} from "react-leaflet";
import Data from "./../data/significant-earthquake-database.json";
import geo from "./../data/geo.json"
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';



delete L.Icon.Default.prototype._getIconUrl;
let position = Data[0].fields.coordinates;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});



function MyMap({filterFunc, setCurrentQuake}) {
    let data = geo.features.filter(filterFunc);
    let num = data.length;
    function Pisteet() {
        const map = useMap();
        const clicked = (e) => {
            setCurrentQuake(e.target.feature)
        }
        var myLayer = L.geoJSON(data,{
            filter:filterFunc,
            onEachFeature: function (feature, layer) {
                layer.on({
                    click: clicked,
                })
            }
        }).bindPopup(
            function (layer) {
                return layer.feature.properties.country;
            }
        ).addTo(map);
        return null;
    }
    
   
    return (
        <div className="px-4 mt-3">
            <MapContainer   className="map col-9 w-100" center={position} zoom={5} style={{height:"500px"}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Pisteet/>
            </MapContainer>
            <div>{num}</div>
        </div>
    )

}
export default MyMap;
