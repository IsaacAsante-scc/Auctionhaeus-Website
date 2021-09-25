import React from 'react';
import { HeroSectionTwo } from '../../HeroSection';
import Accordian from './Accordion';
import { FaqObjTwo} from './Data';

import './Faq.css';


function Faq() {
    return (
        <>
            <Accordian />  
            <HeroSectionTwo {...FaqObjTwo} />  
        </>
    )
};

export default Faq