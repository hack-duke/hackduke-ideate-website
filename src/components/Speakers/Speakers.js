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
          <Col className={classes.keynote} md={6}>
            <SpeakerSection name={'Jeremy Magid'} image={'magid.png'}
              text={'Jeremy is a User Interface/User Experience designer at FoodLogiQ, \
              a startup that works on mapping the food chain. Jeremy is excited to discuss \
              with us design thinking in the real world!'} />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <SpeakerSection name={'Raquel Salvatella De Prada'} image={'duke_art.jpg'}
              text={'Art, Art History, and Visual Arts Professor @ Duke University'} />
          </Col>
          <Col md={4}>
            <SpeakerSection name={'Julia Elman'} image={'zapier.png'}
              text={'Director of Design @ Zapier'} />
          </Col>
          <Col md={4}>
            <SpeakerSection name={'Tracy Lu'} image={'tracy.jpg'}
              text={'Student @ Duke University,\r\nPrevious Amazon Intern on Spherical Operation Support Team'} />
          </Col>
          <Col md={4}>
            <SpeakerSection name={'Dorothy Feng'} image={'dorothy.jpg'}
              text={'Student @ Duke University,\r\nFuture Microsoft UI/UX designer'} />
          </Col>
          <Col md={4}>
            <SpeakerSection name={'Sinclair Toffa'} image={'sinclair.jpg'}
              text={'Student @ Duke University,\r\nFuture Palantir Engineer'} />
          </Col>
          <Col md={4}>
            <SpeakerSection name={'Ariel Spaulding'} image={'diveplane.png'}
              text={'Senior UX Designer @ DivePlane'} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
)

export default Speakers
