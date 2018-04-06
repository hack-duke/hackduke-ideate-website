import React from 'react'
import classes from './Speakers.scss'
import SpeakerSection from 'components/SpeakerSection'
import { Col, Row } from 'react-bootstrap'

const title = 'Speakers'

export const Speakers = () => (
  <div>
    <div className={classes.speakers}>
      <h1 className={classes.header}>{title}</h1>
      <div className={classes.sectionContainer}>
        <Row>
          <Col md={6}>
            <SpeakerSection name={'Jeremy Magid'} image={'magid.png'}
              text={'Jeremy is a User Interface/User Experience designer at FoodLogiQ, \
              a startup that works on mapping the food chain. Jeremy is excited to discuss \
              with us design thinking in the real world!'} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
)

export default Speakers
