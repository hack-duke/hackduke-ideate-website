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
        <h3 className={classes.sessionOne}> Session One </h3>
        <Row>
          <Col md={4}>
            <WorkshopSection title={'3D Modeling'} presenter={'Tracy Lu'}
              session={''}
              text={''} />
          </Col>
          <Col md={4}>
            <WorkshopSection title={'Duke in the Design Industry'} presenter={'Dorothy Feng'}
              session={''}
              text={''} />
          </Col>
          <Col md={4}>
            <WorkshopSection title={'Design Principles'} presenter={'Raquel Salvatella de Prada'}
              session={''}
              text={''} />
          </Col>
        </Row>
        <h3 className={classes.sessionTwo}> Session Two </h3>
        <Row>
          <Col md={4}>
            <WorkshopSection title={'Remote Design'} presenter={'Julia Elman'}
              session={''}
              text={''} />
          </Col>
          <Col md={4}>
            <WorkshopSection title={'\"Good UX\" = Squishy'} presenter={'Ariel Spaulding'}
              session={''}
              text={''} />
          </Col>
          <Col md={4}>
            <WorkshopSection title={'Coming Soon'} presenter={'Sinclair Toffa'}
              session={''}
              text={''} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
)

export default Workshops
