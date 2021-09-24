import React from 'react';
import HeroSection, { HeroSectionTwo } from '../../HeroSection';
import {HomeObjOne, HomeObjTwo} from './Data';

function Home() {
    return (
        <>
            <HeroSection {...HomeObjOne} />
            <HeroSectionTwo {...HomeObjTwo} />     
        </>
    )
};

export default Home
