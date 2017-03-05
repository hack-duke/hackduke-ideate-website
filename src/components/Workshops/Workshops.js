import React from 'react'
import classes from './Workshops.scss'
import WorkshopSection from 'components/WorkshopSection'
import { Col, Row } from 'react-bootstrap'

export const Workshops = () => (
  <div>
    <div className={classes.workshops} >
      <h1 className={classes.header}> WORKSHOPS </h1>
      <Row>
        <Col md={6}>
          <WorkshopSection title={'Workshop 1'} presenter={'Presenter'}
            text={'Lorem ipsum dolor sit amet, sint delicata electram eos at.\
             Eu mundi legendos eam. Esse ancillae eos ea, nam perfecto \
             comprehensam at, an quo lorem labitur propriae. Decore munere \
             singulis ei usu, eu vel accusam evertitur, ne agam sanctus \
             intellegat mei.'} />
          <WorkshopSection title={'Workshop 2'} presenter={'Presenter'}
            text={'Lorem ipsum dolor sit amet, sint delicata electram eos at.\
             Eu mundi legendos eam. Esse ancillae eos ea, nam perfecto \
             comprehensam at, an quo lorem labitur propriae. Decore munere \
             singulis ei usu, eu vel accusam evertitur, ne agam sanctus \
             intellegat mei.'} />
        </Col>
        <Col md={6}>
          <WorkshopSection title={'Workshop 3'} presenter={'Presenter'}
            text={'Lorem ipsum dolor sit amet, sint delicata electram eos at.\
             Eu mundi legendos eam. Esse ancillae eos ea, nam perfecto \
             comprehensam at, an quo lorem labitur propriae. Decore munere \
             singulis ei usu, eu vel accusam evertitur, ne agam sanctus \
             intellegat mei.'} />
          <WorkshopSection title={'Workshop 4'} presenter={'Presenter'}
            text={'Lorem ipsum dolor sit amet, sint delicata electram eos at.\
             Eu mundi legendos eam. Esse ancillae eos ea, nam perfecto \
             comprehensam at, an quo lorem labitur propriae. Decore munere \
             singulis ei usu, eu vel accusam evertitur, ne agam sanctus \
             intellegat mei.'} />
        </Col>
      </Row>
    </div>
  </div>
)

export default Workshops
