import React from 'react'
import classes from './Schedule.scss'

export const Schedule = (props) => (
  <div className={classes.schedule}>
    <img className={classes.image} src={'schedule.png'} alt={'placeholder'} />
  </div>
)

Schedule.proptypes = {
  pdf: React.PropTypes.string.isRequired
}

export default Schedule
