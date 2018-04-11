import React from 'react'
import classes from './PartnersPage.scss'
import PartnersItem from 'components/PartnersItem'
import { Row, Col } from 'react-bootstrap'
import diveplane from 'static/partners/diveplane.png'
import dukeArt from 'static/partners/duke_art.jpg'
import zapier from 'static/partners/zapier.png'

class PartnersPage extends React.Component {

  constructor () {
    super()
    this.state = {
      partnersUrls: ['https://www.diveplane.net/', 'https://aahvs.duke.edu/',
        'https://zapier.com/'],
      windowWidth: window.innerWidth,
      imageUrls: [diveplane, dukeArt, zapier],
      sizes: [3, 3, 3],
      title: 'Partners',
      aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed' +
                  'do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      partnerButtonText: 'Partner Us'
    }
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize (event) {
    this.setState({windowWidth: window.innerWidth})
  }

  renderPartners () {
    let mapArray = []
    if (this.state.windowWidth < 600) {
      mapArray = [0]
    } else if (this.state.windowWidth < 1000) {
      mapArray = [0, 1]
    } else {
      mapArray = [0, 1, 2]
    }
    return (
      mapArray.map(mod => {
        return this.partnersColAtMod(mod, mapArray.length)
      })
    )
  }

  partnersColAtMod (mod, divisor) {
    return (
      <Col xs={12 / divisor} key={mod}>
        {this.state.imageUrls.map((url, index) => {
          if (index % divisor === mod) {
            return <PartnersItem key={index}
              imageUrl={url}
              partnerUrl={this.state.partnersUrls[index]}
              size={this.state.sizes[index]} />
          }
        })}
      </Col>
    )
  }

// <p className={classes.partnersText}>
//   {this.state.aboutText}
// </p>

  render () {
    return (
      <div>
        <div className={classes.partners}>
          <div>
            <h1 className={classes.header}>{this.state.title}</h1>
            <div className={classes.section}>
              <div className={classes.logobox}>
                <Row className={classes.partnersRow}>
                  {this.renderPartners()}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default PartnersPage
