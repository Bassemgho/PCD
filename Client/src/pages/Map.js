import React from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import {format, formatRelative} from 'date-fns';
import '@reach/combobox/styles.css';
import mapStyles from './mapStyles';

const libraries =["places"];
const mapContainerStyle ={
  width: '50vw',
  height: '80vh'
};
const center = {
  lat: 33.892166,
  lng: 9.561555499999997,
};
const options ={
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function Map() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((event) => {
    setMarkers((current) => [
      ...current, 
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  },[]);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <h1>Bears <span role="img" aria-label="tent">⛺️</span></h1>
      <GoogleMap
       mapContainerStyle={mapContainerStyle} 
      zoom={8} 
      center={center}
      options={options}
      onClick={onMapClick}
      onLoad={onMapLoad}
      >
        {markers.map(marker => (
        <Marker 
        key={marker.time.toISOString()} 
        position={{lat: marker.lat, lng: marker.lng}}
        onClick={()=>{
          setSelected(marker);
        }}
        />
        ))}

        {selected ? (
        <InfoWindow 
        position={ {lat: selected.lat, lng: selected.lng }} 
        onCloseClick ={() => {
              setSelected(null);
              }}
              >
          <div>
            <h2>Location spotted</h2>
            <p>Spotted {formatRelative(selected.time, new Date())}</p>
            <p>Latitude : {selected.lat}</p>
            <p>Longitude : {selected.lng}</p>
          </div>
        </InfoWindow>) : null}

      </GoogleMap>
    </div>
  );
}

export default Map;