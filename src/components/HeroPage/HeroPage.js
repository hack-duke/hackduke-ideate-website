import React from 'react'
import classes from './HeroPage.scss'
import { Col, Row } from 'react-bootstrap'
export const HeroPage = () => (
  <div>
    <div className={classes.hero}>
      <Row clasName={classes.headerSection}>
        <Col md={9}>
          <div className={classes.header}>IDEATE</div>
          <div className={classes.subheader}>
            The student innovation & design conference <br />
            April 15, 2017 @ Duke University
          </div>
        </Col>
        <Col md={3}>
          <img className={classes.lightbulb} src='lightbulb.png' alt='placeholder' />
        </Col>
      </Row>
      <Row>
        <div className={classes.buttonDiv}>
          <a className={classes.registerLink} eventKey={1} href={'http://my.hackduke.org/login'}>
            <button className={classes.registerButton}> Register </button>
          </a>
        </div>
      </Row>
    </div>
  </div>
)

export default HeroPage
