import React from 'react'
import faqclasses from '../FAQ/FAQ.scss'
import { Col, Row } from 'react-bootstrap'
import FAQSection from 'components/FAQSection'

const title = 'FAQ'

export const FAQ = () => (
  <div>
    <div className={faqclasses.faq}>
      <h1 className={faqclasses.header}>
        {title}
      </h1>
      <Row style={{'paddingTop': '30px'}}>
        <Col md={5}>
          <FAQSection title={'Is this event open for everyone?'}
            text={'Due to venue capacity, we are only able to accept \
            the first 100 that apply. Registration will open shortly!'} />
        </Col>
        <Col md={5}>
          <FAQSection title={'Is transportation provided?'}
            text={'Duke has transportation from both West and East Campus to The Rubenstein Arts Center. \
            From West, it\'s also a 10 minute walk. If you are driving, there is a parking lot, and the Nasher Museum\
            has additional parking across the street!'} />
        </Col>
      </Row>
      <Row style={{'paddingTop': '30px'}}>
        <Col md={5}>
          <FAQSection title={'Do I need to bring anything specific to the event?'}
            text={'Bring your laptop, student ID/government ID, and your design soul!'} />
        </Col>
      </Row>
    </div>
  </div>
)

export default FAQ
