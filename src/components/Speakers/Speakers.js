import React from 'react'
import classes from './Speakers.scss'
import SpeakerSection from 'components/SpeakerSection'
import { Col, Row } from 'react-bootstrap'

const title = 'SPEAKERS'

export const Speakers = () => (
  <div>
    <div className={classes.speakers}>
      <h1 className={classes.header}>{title}</h1>
      <div className={classes.sectionContainer}>
        <Row>
          <Col md={6}>
            <SpeakerSection name={'Stephanie Engle'} image={'StephanieEngle.jpg'}
              text={'Stephanie is a Product Designer at Facebook based in San Francisco, CA. \
              Currently she works on Social VR, 360 Media, and Live Videos. \
              In the past, she helped redesign Facebook Profile, studied Public Policy \
              at Duke University, and was that weird horse girl you knew in middle school.'} />
            <SpeakerSection name={'Mark Olson'} image={'MarkOlson.png'}
              text={'Mark Olson is a Professor of Art, Art History & Visual Studies at Duke University. \
              He teaches courses on media (new & old - theory, practice, & history) and medicine \
              & visual culture. With the MacArthur Foundation\'s Digital Media & Learning Initiative, \
              he collaborates on the development of a new interdisciplinary project that connects \
              the study of the material culture of art history, architecture and archaeology with \
              new media modes of representation and visualization.'} />
          </Col>
          <Col md={6}>
            <SpeakerSection name={'Aaron Kutnik'} image={'AaronKutnik.jpg'}
              text={'Professor Kutnick is an instructor at Duke University in the Department of Art, \
              Art History, and Visual Studies, and is a Content Creator for Digital Media in the Documentary \
              Lab at the Center for Documentary Studies at Duke. His work asks what ethnographic fieldwork \
              looks like within the virtual spaces of the internet, and what kind of tools are best suited to \
              meaningfully engage this rich, dynamic realm of cultural artifacts.'} />
            <SpeakerSection name={'Elizabeth Kim'} image={'ElizabethKim.jpg'}
              text={'Elizabeth Kim was formerly a personal research assistant to Dan Ariely \
              at the Center for Advanced Hindsight and a Behavioral UX Researcher for The Fabulous, \
              a Google Material Design awarded mobile health app. She has spent the past 3 years \
              researching and applying behavioral economics to drive product design under Dan’s \
              advisement and is passionate about deepening design thinking with behavioral science.'} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
)

export default Speakers
