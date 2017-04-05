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
            <SpeakerSection name={'Stephanie Engle'} image={'StephanieEngle.png'}
              text={'Stephanie is a Product Designer at Facebook based in San Francisco, CA. \
              Currently she works on Social VR, 360 Media, and Live Videos. \
              In the past, she helped redesign Facebook Profile, studied Public Policy \
              at Duke University, and was that weird horse girl you knew in middle school.'} />
          </Col>
          <Col md={6}>
            <SpeakerSection name={'Mark Olson'} image={'MarkOlson.png'}
              text={'Mark Olson is a Professor of Art, Art History & Visual Studies at Duke University. \
              He teaches courses on media (new & old - theory, practice, & history) and medicine \
              & visual culture. With the MacArthur Foundation\'s Digital Media & Learning Initiative, \
              he collaborates on the development of a new interdisciplinary project that connects \
              the study of the material culture of art history, architecture and archaeology with \
              new media modes of representation and visualization.'} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
)

export default Speakers
