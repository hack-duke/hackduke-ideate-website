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
            <WorkshopSection title={'3D Modeling'} presenter={'Tracy Lu'}
              session={''}
              text={''} />
            <WorkshopSection title={'Duke in the Design Industry'} presenter={'Dorothy Feng'}
              session={''}
              text={''} />
          </Col>
          <Col md={4}>
            <WorkshopSection title={'Design Principles'} presenter={'Raquel Salvatella De Prada'}
              session={''}
              text={''} />
            <WorkshopSection title={'Remote Design'} presenter={'Julia Elman'}
              session={''}
              text={''} />
          </Col>
          <Col md={4}>
            <WorkshopSection title={'Coming Soon'} presenter={'Ariel Spaulding'}
              session={''}
              text={''} />
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
