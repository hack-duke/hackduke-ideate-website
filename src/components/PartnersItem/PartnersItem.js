import React from 'react'
import classes from './PartnersItem.scss'

const determineSize = (size) => {
  switch (size) {
    case 4:
      return {'maxWidth': '375px'}
    case 3:
      return {'maxWidth': '225px', 'maxHeight': '150px'}
    case 2:
      return {'maxWidth': '150px'}
    case 1:
      return {'maxWidth': '100px'}
    default:
      return {'maxWidth': '100px'}
  }
}

export const PartnersItem = (props) => (
  <div>
    <div className={classes.imageBox}>
      <a href={props.partnerUrl}>
        <img className={classes.image} style={determineSize(props.size)}
          src={props.imageUrl} />
      </a>
    </div>
  </div>
)

PartnersItem.propTypes = {
  imageUrl: React.PropTypes.string.isRequired,
  partnerUrl: React.PropTypes.string.isRequired,
  size: React.PropTypes.number.isRequired
}

export default PartnersItem
