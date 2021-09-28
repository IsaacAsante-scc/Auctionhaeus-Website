import React from 'react';
import HeroSection, {HeroSectionThree, HeroSectionTwo } from '../../HeroSection';
import {HomeObjOne, HomeObjTwo, HomeObjThree} from './Data';

function Home() {
    return (
        <>
            <HeroSection {...HomeObjOne} />
            <HeroSectionThree {...HomeObjThree} />
            <HeroSectionTwo {...HomeObjTwo} /> 
        </>
    )
};

export default Home
