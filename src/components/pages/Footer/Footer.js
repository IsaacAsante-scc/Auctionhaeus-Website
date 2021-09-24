import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook
} from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        We will send you e-mail notifications of our upcoming sales and other related information. Thank you for your interest in our auctions.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Auction Haeus
            </Link>
          </div>
          <small className='website-rights'>© 2021 Auction Haeus</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to= {{ pathname: 'https://www.facebook.com/AHLCCanada/' }}
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;