import React from 'react'
import classes from './SpeakerSection.scss'
import {Row} from 'react-bootstrap'

export const SpeakerSection = (props) => (

  <div>
    <div className={classes.sectionContainer}>
      <Row className={classes.imageContainer}>
        <img className={classes.image} src='hackkitty.png' alt='placeholder' />
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
  </div>
)

SpeakerSection.propTypes = {
  name: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}

export default SpeakerSection
