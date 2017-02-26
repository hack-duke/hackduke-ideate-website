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
        <Col md={4}>
          <FAQSection title={'Lorem ipsum dolor si amet?'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Pellentesque vestibulum tellus et sagittis feugiat. \
            Suspendisse eu sapien sed nisl facilisis fermentum.'} />
        </Col>
        <Col md={4}>
          <FAQSection title={'Lorem ipsum dolor si amet?'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
             Pellentesque vestibulum tellus et sagittis feugiat. \
              Suspendisse eu sapien sed nisl facilisis fermentum.'} />
        </Col>
        <Col md={4}>
          <FAQSection title={'Lorem ipsum dolor si amet?'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
             Pellentesque vestibulum tellus et sagittis feugiat. \
              Suspendisse eu sapien sed nisl facilisis fermentum.'} />
        </Col>
      </Row>
    </div>
  </div>
)

export default FAQ
