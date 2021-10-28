import React from "react";
import { MapContainer, useMap,TileLayer} from "react-leaflet";
import geo from "./../data/geo.json"
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster/dist/leaflet.markercluster';
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
        if (!item.geometry) continue;
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
    let zoom = data.length === 0 ? 2 : 4
    let position = data.length > 0 ? getCenter(data): [0,0]

    const markerClicked = (e) => {
        setCurrentQuake(e.target.feature)
    }

    function Pisteet({changed, setChanged}) {
        const map = useMap();

        if (changed) {
            map.eachLayer(function (layer) {
                if(layer.id === "markersTaso"){
                    map.removeLayer(layer)
                }
            }) 
            setChanged(false)
            map.panTo(position)
        }

/*         var geoTaso = L.geoJSON(data,{
            onEachFeature: function (feature, layer) {
                layer.on({
                    click: markerClicked,
                })
                layer.bindPopup(function (layer) {
                    return layer.feature.properties.country + " " + layer.feature.properties.year
                })
            }
        }) */
        map.setMaxZoom(10)
        var markers = L.markerClusterGroup()
        for (let item of data) {
            if (item) {
                var marker = L.marker(item.properties.coordinates);
                marker.feature = item;
                marker.bindPopup( function () {
                    return item.properties.country + " " + item.properties.year;
                }).on('click', markerClicked);
                markers.addLayer(marker)
            }

        }
        markers.id = "markersTaso"
        map.addLayer(markers)
        return null;
    }
    
   
    return (
        <div className="px-4 mt-3">
            <MapContainer   className="map col-9 w-100" center={position} zoom={zoom} style={{height:"500px"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />
            <Pisteet changed={changed} setChanged={setChanged}/>
            </MapContainer>
            <div style={{textAlign: "center", }}>Found {data.length} records</div>
        </div>
    )

}
export default MyMap;
