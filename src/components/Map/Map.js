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
      <div className="google-map">
        <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.128963406764!2d-82.97974258454633!3d42.275770379192664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2966e5ccd143%3A0x46effc2298bcb32e!2sAuction%20Haeus%20and%20Liquidation%20Centre!5e0!3m2!1sen!2sca!4v1634815873924!5m2!1sen!2sca" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div className="google-map-text">
        <h2 className="map-h2"><a className="link" style={{ color:'#f00946' }} href={MapLink.link} rel="noopener noreferrer" target='_blank'>3419 WALKER RD. WINDSOR, ON, CANADA</a></h2>
        <h2 className='map-h2'><a className="link" style={{ color:'#f00946' }} href="mailto:auctionhaeus@outlook.com" rel="noopener noreferrer">auctionhaeus@outlook.com</a></h2>
        <h2 className='map-h2'><a className="link" style={{ color:'#f00946' }} href='tel:519-816-8357' rel="noopener noreferrer">519-816-8357</a></h2>
      </div>
    </div>
  )


  export default GMap;
