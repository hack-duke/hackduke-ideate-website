import React from 'react'
import regclasses from '../Registration/Registration.scss'

export const Registration = () => (
  <div>
    <div className={regclasses.ready}>
      Ready to go?
    </div>
    <a className={regclasses.button} href={'https://hackduke.typeform.com/to/nhQDIn?route_receive_participant=xxxxx'}>
      <div className={regclasses.register}>
        Register Now
      </div>
    </a>
  </div>
  )

export default Registration
