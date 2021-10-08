import React from 'react';
import HeroSection, { HeroSectionTwo } from '../../HeroSection';
import {ContactObjOne, ContactObjTwo, ContactContent} from './Data';
import MapSection from '../../Map/Map';
import ContentSection from '../../ContentSection';



const location = {
    address: '3419 Walker RoadWindsor, ON, Canada',
    lat: 42.275780788333094,
    lng: -82.97752705526077
  }

function Contact() {
    return (
        <>
            <ContentSection {...ContactContent} />
            <MapSection location={location} zoomLevel={17} />     
        </>
    )
};

export default Contact