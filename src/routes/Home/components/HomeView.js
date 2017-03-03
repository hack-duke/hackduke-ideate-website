import React from 'react'
import Scroll from 'react-scroll'
import HeroPage from 'components/HeroPage'
import About from 'components/About'
import Speakers from 'components/Speakers'
import Workshops from 'components/Workshops'
import FAQ from 'components/FAQ'
import SponsorsPage from 'components/SponsorsPage'
import Social from 'components/Social'

export const HomeView = () => (
  <div>
    <HeroPage />
    <Scroll.Element name='aboutScrollPoint'></Scroll.Element>
    <About />
    <Scroll.Element name='speakersScrollPoint'></Scroll.Element>
    <Speakers />
    <Scroll.Element name='workshopsScrollPoint'></Scroll.Element>
    <Workshops />
    <Scroll.Element name='faqScrollPoint'></Scroll.Element>
    <FAQ />
    <Scroll.Element name='sponsorsScrollPoint'></Scroll.Element>
    <SponsorsPage />
    <Social />
  </div>
)

export default HomeView
