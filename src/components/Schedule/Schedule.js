
import React from 'react'
import classes from './Schedule.scss'

const title = 'Schedule'

export const Schedule = (props) => (
  <div className={classes.schedule}>
    <h1 className={classes.header}>{title}</h1>
    <div className={classes.schedule}>
	  <img className={classes.image} src={'schedule.png'} alt={'placeholder'} />
	</div>
  </div>
)

Schedule.proptypes = {
  pdf: React.PropTypes.string.isRequired
}

export default Schedule
