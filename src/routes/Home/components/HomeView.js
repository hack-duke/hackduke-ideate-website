import React from 'react'
import Scroll from 'react-scroll'
import HeroPage from 'components/HeroPage'
import About from 'components/About'
import Speakers from 'components/Speakers'
import Workshops from 'components/Workshops'
import FAQ from 'components/FAQ'
import SponsorsPage from 'components/SponsorsPage'
import Social from 'components/Social'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <HeroPage />
    <Scroll.Element name='aboutScrollPoint'></Scroll.Element>
    <About />
    <Scroll.Element name='speakersScrollPoint'></Scroll.Element>
    <Speakers />

    <img src='Section 2 Wire.png' alt='placeholder' className={classes.image} style={{'height': '300px'}} />
    <Scroll.Element name='faqScrollPoint'></Scroll.Element>
    <FAQ />
    <img src='Section 2 Wire.png' alt='placeholder' className={classes.image} style={{'height': '300px'}} />
    <Scroll.Element name='registrationScrollPoint'></Scroll.Element>
    <Registration />
    <img src='Section 3 Wire.png' alt='placeholder' className={classes.image} style={{'height': '300px'}} />
    <Scroll.Element name='sponsorsScrollPoint'></Scroll.Element>
    <SponsorsPage />
    <Social />
  </div>
)

export default HomeView
