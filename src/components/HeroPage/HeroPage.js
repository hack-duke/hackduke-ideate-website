import React from 'react'
import classes from './HeroPage.scss'

export const HeroPage = () => (
  <div>
    <div className={classes.hero}>
      <div className={classes.mainText}>
        <h1 className={classes.header}>IDEATE</h1>
        <h3 className={classes.subheader}>The student innovation & design conference <br/>
            April 15, 2017 @ Duke University</h3>
        <div className={classes.buttonDiv}>
          <a className={classes.registerLink} eventKey={1} href={'http://my.hackduke.org/login'}>
            <button className={classes.registerButton}> Register </button>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default HeroPage
