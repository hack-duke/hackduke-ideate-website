import React from 'react'
import classes from './HeroPage.scss'
import { Col, Row } from 'react-bootstrap'

export const HeroPage = () => (
  <div>
    <div className={classes.hero}>
      <div className={classes.videoBlock}>
        <video preload='preload' className={classes.video} autoPlay loop>
          <source src='Ideate2k17.mp4' type='video/mp4'></source>
        </video>
      </div>
        <div className={classes.headerSection}>
          <Col md={10}>
            <div className={classes.header}>IDEATE</div>
            <div className={classes.subheader}>
              The student innovation & design conference <br />
              April 15, 2017 @ Duke University
            </div>
          </Col>
          <Col md={2}>
            <img className={classes.lightbulb} src='lightbulb.png' alt='placeholder' />
          </Col>
        </div>
      <div className={classes.buttonDiv}>
        <a className={classes.registerLink} href={''}>
          <button className={classes.registerButton}> Register Soon </button>
        </a>
      </div>
    </div>
  </div>
)

export default HeroPage
