import React from 'react'
import classes from './Speakers.scss'
import SpeakerSection from 'components/SpeakerSection'
import { Col, Row } from 'react-bootstrap'

const title = 'SPEAKERS'

export const Speakers = () => (
  <div>
    <div className={classes.speakers}>
      <div className={'container text-center'}>
        <h1 className={classes.header}>{title}</h1>
        <Row>
          <Col md={6}>
            <SpeakerSection name={'Person 1'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
              Pellentesque vestibulum tellus et sagittis feugiat. Suspendisse \
              eu sapien sed nisl facilisis fermentum.'} />
          </Col>
          <Col md={6}>
            <SpeakerSection name={'Person 1'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
              Pellentesque vestibulum tellus et sagittis feugiat. Suspendisse \
              eu sapien sed nisl facilisis fermentum.'} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
)

export default Speakers
