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
            the first 135 that apply. Sign up quick!'} />
        </Col>
        <Col md={5}>
          <FAQSection title={'Is transportation provided?'}
            text={'Duke has transportation from both West and East Campus to Nasher Museum. \
            From West, it\'s also a 10 minute walk. If you are driving, there is a parking lot!'} />
        </Col>
      </Row>
      <Row style={{'paddingTop': '30px'}}>
        <Col md={5}>
          <FAQSection title={'Will we have access to the Nasher galleries?'}
            text={'Thanks to MUSE, all attendees will have access to the galleries. \
            Check these awesome collections out during lunch!'} />
        </Col>
        <Col md={5}>
          <FAQSection title={'Do I need to bring anything specific to the event?'}
            text={'Bring your laptop, student ID/government ID, and your design soul!'} />
        </Col>
      </Row>
    </div>
  </div>
)

export default FAQ
