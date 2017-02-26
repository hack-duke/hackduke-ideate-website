import React from 'react'
import classes from './WorkshopSection.scss'
import { Col, Row } from 'react-bootstrap'

export const WorkshopSection = (props) => (

  <div>
    <Row className={classes.section}>
        <div className={classes.sectionHeader}>
          {props.title}
        </div>
        <div className={classes.sectionSubheader}>
          {props.presenter}
        </div>
        <div className={classes.sectionText}>
          {props.text}
        </div>
    </Row>
  </div>
)

WorkshopSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}

export default WorkshopSection
