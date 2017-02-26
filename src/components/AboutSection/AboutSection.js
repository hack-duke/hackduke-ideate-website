import React from 'react'
import classes from './AboutSection.scss'
import { Col, Row } from 'react-bootstrap'

export const AboutSection = (props) => (

  <div>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionHeader}>
            {props.title}
            <span className={classes.titleDef}>
              {props.titleDef}
            </span>
        </div>

        <div className={classes.sectionText}>
          {props.text}
        </div>
        <div className={classes.textQuote}>
          {props.textAuthor}
        </div>
      </div>
  </div>
)

AboutSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}

export default AboutSection
