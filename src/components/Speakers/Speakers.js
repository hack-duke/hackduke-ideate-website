import React from 'react'
import classes from './Speakers.scss'
import SpeakerSection from 'components/SpeakerSection'
import { Col, Row } from 'react-bootstrap'

const title = 'Speakers'

export const Speakers = () => (
  <div>
    <div className={classes.speakers}>
      <h1 className={classes.header}>{title}</h1>
      <div className={classes.sectionContainer}>
        <Row>
          <Col className={classes.keynote} md={6}>
            <SpeakerSection name={'Jeremy Magid'} image={'magid.png'}
              text={'Jeremy is a User Experience designer and proud Durham native. \
              Over the last ten years his career has been a whirlwind adventure through the world \
              of healthcare and mobile technology. In his new role as senior UX\/UI Designer at FoodLogiQ \
              he is excited to apply what he has learned about solving complex and critical design \
              challenges through Design Thinking to help map the world\'s food chain.'} />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <SpeakerSection name={'Raquel Salvatella de Prada'} image={'dePrada.jpg'} session={'Session 1'}
              text={'Raquel Salvatella de Prada is a computer artist and assistant professor of the \
              practice of Visual Arts at Duke University. She practices graphic design, motion graphics \
              and video design. Her work often focuses on integrating computer animation and motion design \
              with different traditional art forms by collaborating with artists of diverse backgrounds \
              such as printmaking, painting, installation art, poetry, puppetry, theater, and musical \
              performance. She finds that the combination of her digital medium with physical visual \
              media can be a powerful way to communicate social issues.'} />
          </Col>
          <Col md={4}>
            <SpeakerSection name={'Julia Elman'} image={'elman.jpg'} session={'Session 1'}
              text={'Julia Elman is the Director of Design at Zapier. She has 13 years of \
              experience in design and technology. Known as a leader in her field, her most recent \
              work includes the U.S. Web Design System project, Pulseand developing the project \
              scoping and evaluation process for 18F Experience Design. Prior to Zapier, Julia \
              published a book called Lightweight Django with O’Reilly Media. She also wrote \
              curriculum and tutorials about design and development as the Front end Engineering \
              Instructor at the Iron Yard Academy. She has also worked with clients such as Mozilla, \
              the Python Software Foundation, University of Chicago, Hallmark Cards and Product(RED).'} />
          </Col>
          <Col md={4}>
            <SpeakerSection name={'Tracy Lu'} image={'tracy.jpg'} session={'Session 1'}
              text={'Tracy is a student at Duke majoring in Mechanical Engineering and Minoring \
              in Computer Science and Visual Arts. She is passionate about using technology and \
              design to solve human-centered problems. She was previously an intern at Amazon \
              Lab126 and does various design work for organizations on campus such as Duke \
              Robotics and DIDA. '} />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <SpeakerSection name={'Dorothy Feng'} image={'dorothy.png'} session={'Session 2'}
              text={'Student @ Duke University,\r\nFuture Microsoft UI/UX designer'} />
          </Col>
          <Col md={4}>
            <SpeakerSection name={'Sinclair Toffa'} image={'sinclair.jpg'} session={'Session 2'}
              text={'Sinclair is a graduating senior and an incoming Forward Deployed Engineer at \
              Palantir London.  He has previously worked on aerospace, auto-manufacturing, and \
              cybersecurity deployments, working with engineering, design, and business development teams. \
              In the past, Sinclair has taught UI\/UX design, iOS development, prototyping, and \
              wireframing at Make School.'} />
          </Col>
          <Col md={4}>
            <SpeakerSection name={'Ariel Spaulding'} image={'spaulding.png'} session={'Session 2'}
              text={'Transplant into the area from Seattle, Ariel is a User Experience designer \
              who firmly believes that anything can be made understandable if the information is \
              presented in the right way.  She has been working in the industry as a UX Designer \
              for roughly 15 years and has worked with companies like Papa Johns, Amazon, \
              Starbucks, Microsoft in Education, and many others.'} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
)

export default Speakers
