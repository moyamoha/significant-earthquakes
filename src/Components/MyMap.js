import React from "react";
import { MapContainer, useMap,TileLayer} from "react-leaflet";
import geo from "./../data/korjattu_geo.json"
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
    return [data.length === 0 ? 0: lat/data.length, data.length === 0 ? 0: lon/data.length].reverse()
}

function MyMap({changed, setChanged, filterObj, setCurrentQuake , currentQuake}) {
    let data = geo.features.filter(item => {
        
        if (filterObj.all) {return true
        } else {//
                 //console.log(item.properties.intensity)

            return (item.properties.country === filterObj.country || (filterObj.country) === "") && 
            ((item.properties.year >= filterObj.minyear) || (filterObj.minyear) === "") &&
            ((item.properties.year <= filterObj.maxyear) || (filterObj.maxyear) === "") &&
            ((item.properties.eq_primary <= filterObj.maxmagn) || (filterObj.maxmagn === "")) &&
            ((item.properties.eq_primary >= filterObj.minmagn) || (filterObj.minmagn === "")) &&
            ((item.properties.deaths <= filterObj.maxdeath) || (filterObj.maxdeath === "")) &&
            ((item.properties.deaths >= filterObj.mindeath) || (filterObj.mindeath === ""))
            
            //item.properties.year >= filterObj.year

        }
    });
    
    let zoom = data.length === 0 ? 2 : 4
    let position = filterObj.all ? [0,0] : getCenter(data);

    const markerClicked = (e) => {
       
        
        setCurrentQuake(e.target.feature)

        //console.log(currentQuake.properties.i_d)
        //console.log(e.target.feature.properties.i_d)
       
     
       
       
    
            
    
    }



    function Pisteet({changed, setChanged}) {
        const map = useMap();
        console.log(changed)
        if (changed) {
           
            map.eachLayer(function (layer) {
                if(layer.id === "markersTaso"){
                    map.removeLayer(layer)
                }
            }) 
            
            setChanged(false)
            map.panTo(position)
        }

        map.setMaxZoom(12)
        map.setMinZoom(2)
        var markers = L.markerClusterGroup()
        
        
        if(changed === true){
            for (let item of data) {
            
            if (item.geometry) {
                var marker = L.marker(item.properties.coordinates);
               
                marker.feature = item;
                marker.bindPopup( function () {
                    return item.properties.country + " " + item.properties.year + " " + "["+item.properties.coordinates+"]";
                }).on('click', markerClicked);
                markers.addLayer(marker)
            }

        }
        
        markers.id = "markersTaso"
        map.addLayer(markers)}
        
        return null;
    }
    
   
    return (
        <div className="px-0 mt-0">
            <MapContainer className="map col-9 w-100" center={position} zoom={changed ? 2 : zoom} style={{height:"500px"}}>
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