import React from 'react'
import classes from './Workshops.scss'
import WorkshopSection from 'components/WorkshopSection'
import { Col, Row } from 'react-bootstrap'

          // <Col md={6}>
          //   <WorkshopSection title={'Design Thinking / Design in Industry'} presenter={'Stephanie Engle'}
          //     location={'Lecture Hall Rd 1'}
          //     text={'Details coming!'} />

          //   <WorkshopSection title={'UX Research in Deisgn Thinking'} presenter={'Colette Kolenda'}
          //     location={'Lecture Hall Rd 2'}
          //     text={'Details coming!'} />
            
          //   <WorkshopSection title={'Museum Display: Interactive/Experiential Design'} presenter={'Julia Liu \& Adam ___'}
          //     location={'Lecture Hall Rd 3'}
          //     text={'Details coming!'} />      
          // </Col>

          // <Col md={6}>
          //   <WorkshopSection title={'Storyboarding'} presenter={'Julia Liu'}
          //     location={'University Classroom Rd 1'}
          //     text={'Details coming!'} />

          //   <WorkshopSection title={'Introduction to Sketch'} presenter={'Kat Zhou'}
          //     location={'University Classroom Rd 2'}
          //     text={'Details coming!'} />

          //   <WorkshopSection title={'Unkown Workshop'} presenter={'Unknown'}
          //     location={'University Classroom Rd 3'}
          //     text={'Details coming!'} />
          // </Col>

          // <WorkshopSection title={'Unknown Workshop'} presenter={'Unknown'}
          //     location={'Community Classroom Rd 2'}
          //     text={'Details coming!'} />

export const Workshops = () => (
  <div>
    <div className={classes.workshops} >
      <h1 className={classes.header}> WORKSHOPS </h1>
      <div className={classes.sectionContainer}>
        <Row>
          <Col md={6}>
            <WorkshopSection title={'Spatial Audio Design'} presenter={'Aaron Kutnik'}
              location={'Community Classroom, Rd 1'}
              text={'This workshop will explore the technical and creative workflow \
              involved in mixing multitrack audio in a digital audio workstation, \
              spatially positing audio sources within immersive sound spheres, encoding \
              to first-order ambisonics (B-format), and binaural decoding within \
              interactive virtual environments.'} />

            <WorkshopSection title={'Designing for Behavior Change'} presenter={'Elizabeth Kim'}
              location={'Community Classroom, Rd 3'}
              text={'Enjoy an interactive session in which you will learn \
              how to conduct the Center for Advanced Hindshight\'s 3B method to diagnose \
              behavior change on a real-life product.'} /> 
          </Col>
          <Col md={6}>
            <WorkshopSection title={'More Coming!'} presenter={'Releasing soon'}
              location={'TBA'}
              text={'Details to follow'} /> 
          </Col>
        </Row>
      </div>
    </div>
  </div>
)

export default Workshops
