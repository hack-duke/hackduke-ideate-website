import React from 'react'
import classes from './Workshops.scss'
import WorkshopSection from 'components/WorkshopSection'
import { Col, Row } from 'react-bootstrap'

      // Spatial Audio Design
      // text={'This workshop will explore the technical and creative workflow \
      // involved in mixing multitrack audio in a digital audio workstation, \
      // spatially positing audio sources within immersive sound spheres, encoding \
      // to first-order ambisonics (B-format), and binaural decoding within \
      // interactive virtual environments.'}

      // Designing for Behavior Change
      // text={'Enjoy an interactive session in which you will learn \
      // how to conduct the Center for Advanced Hindshight\'s 3B method to diagnose \
      // behavior change on a real-life product.'}

export const Workshops = () => (
  <div>
    <div className={classes.workshops} >
      <h1 className={classes.header}> WORKSHOPS </h1>
      <div className={classes.sectionContainer}>
        <Row>
          <Col md={6}>
            <WorkshopSection title={'Design in Industry'} presenter={'Stephanie Engle'}
              location={'Lecture Hall Rd 1'} />

            <WorkshopSection title={'Research in Design Thinking'} presenter={'Colette Kolenda'}
              location={'Lecture Hall Rd 2'} />

            <WorkshopSection title={'Museum Display - Interactive/Experiential Design'} presenter={'Julia Liu \& Adam Spring'}
              location={'Lecture Hall Rd 3'} />

            <WorkshopSection title={'Storyboarding'} presenter={'Julia Liu'}
              location={'University Classroom Rd 1'} />

            <WorkshopSection title={'Introduction to Sketch'} presenter={'Kat Zhou'}
              location={'University Classroom Rd 2'} />
          </Col>
          <Col md={6}>
            <WorkshopSection title={'Spatial Audio Design'} presenter={'Aaron Kutnik'}
              location={'Community Classroom, Rd 1'} />

            <WorkshopSection title={'Interactive Media & Software'} presenter={'TBA'}
              location={'Community Classroom Rd 2'} />

            <WorkshopSection title={'Designing for Behavior Change'} presenter={'Elizabeth Kim'}
              location={'Community Classroom, Rd 3'} />

            <WorkshopSection title={'Designing for Society'} presenter={'TBA'}
              location={'University Classroom Rd 3'} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
)

export default Workshops
