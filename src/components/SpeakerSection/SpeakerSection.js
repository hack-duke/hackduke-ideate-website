import React from 'react'
import classes from './SpeakerSection.scss'
import {Row} from 'react-bootstrap'

export const SpeakerSection= (props) => (

  <div>
    <Row className={classes.imageSection}>
      <div className={classes.image}>

      </div>
    </Row>
    <Row className={classes.contentSection}>
      <div className={classes.sectionHeader}>
        {props.name}
      </div>
      <div className={classes.sectionText}>
        {props.text}
      </div>
    </Row>
  </div>
)

SpeakerSection.propTypes = {
  name: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}

export default SpeakerSection
