import React,{onClick}  from "react";
import { MapContainer, Marker, TileLayer , Popup,useMapEvents,MapConsumer} from "react-leaflet";
import Data from "./../data/significant-earthquake-database.json";

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';



delete L.Icon.Default.prototype._getIconUrl;
let position = Data[0].fields.coordinates;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});



function MyMap({data, setCurrentQuake}) {
    
    function lisaa(){
       return( data.map(piste => (
                
            <Marker 
             
            key = {piste.fields.id}
             eventHandlers={{
                 click: () => setCurrentQuake(piste)
               }}
               
             position = {piste.fields.coordinates}
             >
                <Popup>{piste.fields.country}</Popup>
            </Marker>
       
         ))
       )}
    
    return (
        <div className="px-5 pt-4 pb-3">
            <MapContainer   className="map col-9 w-100" center={position} zoom={5} style={{height:"500px"}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {lisaa()}
            </MapContainer>
        </div>
    )

}
export default MyMap;