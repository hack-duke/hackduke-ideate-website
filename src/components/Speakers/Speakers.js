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
            <SpeakerSection name={'Coming Soon'} image={'hackkitty.png'}
              text={''} />
          </Col>
          <Col md={6}>
            <SpeakerSection name={'Coming Soon'} image={'hackkitty.png'}
              text={''} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
)

export default Speakers
