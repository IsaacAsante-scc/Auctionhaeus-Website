import React from 'react';
import HeroSection, {HeroSectionThree, HeroSectionTwo } from '../../HeroSection';
import {HomeObjOne, HomeObjTwo, HomeObjThree, AboutContent} from './Data';
import ContentSection from '../../ContentSection';

function Home() {
    return (
        <>
            <HeroSection {...HomeObjOne} />
            <HeroSectionThree {...HomeObjThree} />
            <ContentSection {...AboutContent} />
        </>
    )
};

export default Home
