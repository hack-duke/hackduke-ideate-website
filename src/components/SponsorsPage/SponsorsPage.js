import React from 'react'
import classes from './SponsorsPage.scss'
import SponsorsItem from 'components/SponsorsItem'
import { Row, Col } from 'react-bootstrap'
import colab from 'static/sponsors/colab.png'
import dukecs from 'static/sponsors/dukecs.png'
import epic from 'static/sponsors/epic.png'
import mems from 'static/sponsors/mems.png'

class SponsorsPage extends React.Component {

  constructor () {
    super()
    this.state = {
      sponsorsUrls: ['http://colab.duke.edu', 'http://cs.duke.edu',
        'http://epic.com', 'http://mems.duke.edu'],
      windowWidth: window.innerWidth,
      imageUrls: [colab, dukecs, epic, mems],
      sizes: [3, 3, 3, 4],
      title: 'SPONSORS',
      aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed' +
                  'do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      sponsorButtonText: 'Sponsor Us'
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

  renderSponsors () {
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
        return this.sponsorsColAtMod(mod, mapArray.length)
      })
    )
  }

  sponsorsColAtMod (mod, divisor) {
    return (
      <Col xs={12 / divisor} key={mod}>
        {this.state.imageUrls.map((url, index) => {
          if (index % divisor === mod) {
            return <SponsorsItem key={index}
              imageUrl={url}
              sponsorUrl={this.state.sponsorsUrls[index]}
              size={this.state.sizes[index]} />
          }
        })}
      </Col>
    )
  }

// <p className={classes.sponsorsText}>
//   {this.state.aboutText}
// </p>

  render () {
    return (
      <div>
        <div className={classes.sponsors}>
          <div>
            <h1 className={classes.header}>{this.state.title}</h1>
            <div className={classes.section}>
              <div className={classes.logobox}>
                <Row className={classes.sponsorsRow}>
                  {this.renderSponsors()}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SponsorsPage
