import React from 'react'
import classes from './Workshops.scss'
import WorkshopSection from 'components/WorkshopSection'
import { Col, Row } from 'react-bootstrap'

const title = 'Workshops'

export const Workshops = () => (
  <div>
    <div className={classes.workshops} >
      <h1 className={classes.header}> {title} </h1>
      <div className={classes.sectionContainer}>
        <Row>
          <Col md={4}>
            <WorkshopSection title={'Coming Soon'} presenter={''}
            session={''}
            text={''} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
)

export default Workshops
