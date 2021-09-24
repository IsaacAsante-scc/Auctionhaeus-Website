import React from 'react';
import HeroSection, { HeroSectionTwo } from '../../HeroSection';
import {ContactObjOne, ContactObjTwo} from './Data';

function Contact() {
    return (
        <>
            <HeroSection {...ContactObjOne} />
            <HeroSectionTwo {...ContactObjTwo} />     
        </>
    )
};

export default Contact