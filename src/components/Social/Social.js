import React from 'react'
import classes from './Social.scss'
// import mlh from 'static/sponsors/mlh.png'

export const Social = () => (
  <div>
    <div className={classes.footerBackground}>
      <div className={classes.contact}>
        <div className={classes.contactContainer}>

          <a className={classes.footerIcon} href={'mailto:hackers@hackduke.org'}>
            <i className={'fa fa-envelope'}></i>
          </a>
          <a className={classes.footerIcon} href={'https://www.facebook.com/hackduke'}>
            <i className={'fa fa-facebook'}></i>
          </a>
          <a className={classes.footerIcon} href={'https://twitter.com/hackduke'}>
            <i className={'fa fa-twitter'}></i>
          </a>
        </div>
        <div className={classes.copyright}>Copyright © 2018 Ideate. </div>
      </div>
    </div>
  </div>
)

export default Social
