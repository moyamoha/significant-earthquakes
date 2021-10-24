import React, {useState}  from "react";
import { MapContainer, useMap} from "react-leaflet";
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



function MyMap({changed, setChanged, filterObj, setCurrentQuake}) {
    let data = geo.features.filter(item => {
        if (filterObj.all) return true;
        else {
            return item.properties.country === filterObj.country && 
            item.properties.eq_primary >= filterObj.eq_primary &&
            item.properties.year >= filterObj.year
        }
    });
    let num = data.length;

    function Pisteet({changed, setChanged}) {
        const [reload, setReload] = useState(() => false)
        const map = useMap();
        const clicked = (e) => {
            setCurrentQuake(e.target.feature)
        }
        if (changed) {
            map.eachLayer(function (l) {
                l.remove()
            })
            setChanged(false)
        }
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        let myLayer = L.geoJSON(data,{
            onEachFeature: function (feature, layer) {
                layer.on({
                    click: clicked,
                })
                layer.bindPopup(function (layer) {
                    return layer.feature.properties.country;
                })
            }
        }).addTo(map); 
        


        return null;
    }
    
   
    return (
        <div className="px-4 mt-3">
            <MapContainer   className="map col-9 w-100" center={position} zoom={1} style={{height:"500px"}}>
                <Pisteet changed={changed} setChanged={setChanged}/>
            </MapContainer>
            <div>{num}</div>
        </div>
    )

}
export default MyMap;
