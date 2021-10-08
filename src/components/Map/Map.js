import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';




const Marker = props => {
  return <div style={{ transform: 'translate(-50%, -50%)' }}className='marker'>
    <div className='pin'>&#x25CF;</div>
  </div>
  
}

  const GMap = ({ location, zoomLevel }) => (

    <div className="map">
      <h2 className="map-h2">3419 Walker Rd. Windsor, ON, Canada</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: (process.env.REACT_APP_GOOGLE_API_KEY) }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <Marker lat={location.lat} lng={location.lng} />
        </GoogleMapReact>
      </div>
    </div>
  )


  export default GMap;
