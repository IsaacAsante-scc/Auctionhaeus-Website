import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
 

/* Hero Section Function */
/* Inculdes Heading, Title, Text and Button */
function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
    return (<>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} 
        >
            <div className='container'>
                <div className='row home__hero-row' style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className='row home__hero-row' style={{ display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                <Link to={{ pathname: 'https://auctionhaeus.hibid.com/' }} rel="noopener noreferrer" target='_blank'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img'/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>);
}


/* Hero Section Two Function */
/* Inculdes Title and Text */
function HeroSectionTwo({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
    return (<>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} 
        >
            <div className='container'>
                <div  className='center'>
                    <div style={{ textAlign:'center'}}>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle2' : 'home__hero-subtitle dark'}>{description}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>);
}


/* Hero Section Three Function */
/* Inculdes Heading, Title, Text and Button */
function HeroSectionThree({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, buttonLabel2, img, alt, imgStart
}) {
    return (<>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} 
        >
            <div className='container'>
                <div className='row home__hero-row' style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className='row home__hero-row' style={{ display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                <div className='facebookBtn'>
                                <Link to={{ pathname: 'https://www.facebook.com/marketplace/profile/100058448917243/?ref=share_attachment' }} rel="noopener noreferrer" target="_blank">
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                                </Link>
                                <div className='btnDivider' />
                                <Link to={{ pathname: 'https://www.facebook.com/AHLCCanada/' }} rel="noopener noreferrer" target="_blank">
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel2}</Button>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img'/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>);
}

export default HeroSection;
export { HeroSectionTwo, HeroSectionThree};

