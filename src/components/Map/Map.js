import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';


const MapLink = {
  link: 'https://www.google.com/maps/dir//3419+Walker+Rd,+Windsor,+ON+N8W+3S2/@42.292849,-83.0078477,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883b2bec9983af77:0x662938ea359436b8!2m2!1d-82.9775539!2d42.2757704'
}


const Marker = props => {
  return <div style={{ transform: 'translate(-50%, -50%)' }}className='marker'>
    <div className='pin'>&#x25CF;</div>
  </div>
  
}

  const GMap = ({ location, zoomLevel }) => (

    <div className="map">
      <h2 className="map-h2"><a href={MapLink.link} rel="noopener noreferrer" target='_blank'>3419 WALKER RD. WINDSOR, ON, CANADA</a></h2>
      <h2 className='map-h2'><a href="mailto:auctionhaeus@outlook.com" rel="noopener noreferrer">auctionhaeus@outlook.com</a></h2>
      <h2 className='map-h2'><a href='tel:519-816-8357' rel="noopener noreferrer">519-816-8357</a></h2>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: (process.env.REACT_APP_GOOGLE_API_KEY) }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <Marker lat={location.lat} lng={location.lng}/>
        </GoogleMapReact>
      </div>
    </div>
  )


  export default GMap;
