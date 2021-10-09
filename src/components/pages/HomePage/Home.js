import React from 'react';
import HeroSection, {HeroSectionThree } from '../../HeroSection';
import {HomeObjOne, HomeObjThree, AboutContent} from './Data';
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
