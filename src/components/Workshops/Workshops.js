import React from 'react'
import classes from './Workshops.scss'
import WorkshopSection from 'components/WorkshopSection'
import { Col, Row } from 'react-bootstrap'

export const Workshops = () => (
  <div>
    <div className={classes.workshops} >
      <h1 className={classes.header}> WORKSHOPS </h1>
      <div className={classes.sectionContainer}>
        <h2 className={classes.sessionOne}> Session One </h2>
        <Row>
          <Col md={4}>
            <WorkshopSection title={'Design in Industry'} presenter={'Stephanie Engle'} />
          </Col>

          <Col md={4}>
            <WorkshopSection title={'Museum Display: Interactive / Experiential Design'} presenter={'Julia Liu \& Adam Spring'} />
          </Col>

          <Col md={4}>
            <WorkshopSection title={'Designing for Behavior Change'} presenter={'Elizabeth Kim'} />
          </Col>
        </Row>

        <h2 className={classes.sessionTwo}> Session Two </h2>
        <Row>
          <Col md={4}>
            <WorkshopSection title={'User Research & Design Thinking'} presenter={'Colette Kolenda'} />
          </Col>

          <Col md={4}>
            <WorkshopSection title={'Introduction to Sketch'} presenter={'Kat Zhou'} />
          </Col>

          <Col md={4}>
            <WorkshopSection title={'Spatial Audio Design'} presenter={'Aaron Kutnik'} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
)

export default Workshops
