import React, { useState } from "react";


import { MapContainer, TileLayer,Marker,Popup } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./App.css"
import L from 'leaflet';

L.Icon.Default.imagePath = "/";
const App = () => {
  // const icon = L.icon({ iconUrl: "/marker-icon.png" });
    const [center, setCenter] = useState({ lat: 11.932516, lng: 79.835943 });
    const [details ,setDetails]=useState()
    const [check,setCheck]=useState(true)
    const [time,setTime]=useState()
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

// some other code
const getlocation=()=>{

  
  setCheck(false)
  fetch("http://localhost:5000/location")
	.then(response => response.json())
	.then(data => {

    setDetails(data)
    console.log(data)
  
  }
    )
	.catch(err => console.error(err));
if(details){ 
  setCenter({ lat: details[0].lat, lng: details[0].long })
  setTime( details[0].time)
  console.log("check me",center)
  setCheck(true)
}
  

}


    return (
        <>
          

          <h2>Accident Area</h2>  
          <button onClick={getlocation}> update</button> 

          <br/>
          <br/>
          <br/>
<div>
  {
    time && 
    <div>
      <h5> Latest time : {time}</h5>
    </div>
  }
</div>
<br/>
<br/>
<br/>

     {check &&

<div style={{marginLeft:"50px",border:'2px',borderColor:"red"}}>
          <MapContainer center={center} zoom={20} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={center}>
     
    </Marker>
  </MapContainer>
  </div>
}
        </>
    );
};

export default App;