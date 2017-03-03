import React from 'react'
import classes from './About.scss'
import AboutSection from 'components/AboutSection'

export const About = () => (
  <div>
    <div className={classes.about} >
      <h1 className={classes.header}> WHAT IS IDEATE? </h1>
      <AboutSection title={'Ideate'}
        titleDef={' |\ ˈīdēˌāt\ | vb.'}
        text={'To explore a wide variety of possible solutions through generating a large quantity \
        of diverse possible solutions, allowing you to step beyond the obvious and explore \
        a range of ideas.'}
        textAuthor={'- Stanford Design School'} />
      <AboutSection title={'Ideate @ Duke is...'}
        text={'A day filled with awesome speakers and workshops to explore how design and techonology \
        interacts. Observing and applying design and techonology to address social good.'} />
    </div>
  </div>
)

export default About
