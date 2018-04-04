import React from 'react'
import classes from './Schedule.scss'

const title = 'Schedule'

export const Schedule = (props) => (
  <div className={classes.schedule}>
    <h1 className={classes.header}>{title}</h1>
    <h1 className={classes.sectionHeader}>Coming Soon</h1>
  </div>
)

Schedule.proptypes = {
  pdf: React.PropTypes.string.isRequired
}

export default Schedule
