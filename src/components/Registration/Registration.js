import React from 'react'
import regclasses from '../Registration/Registration.scss'

export const Registration = () => (
  <div>
    <div className={regclasses.ready}>
      Ready to go?
    </div>
    <div className={regclasses.register}>
      <a className={regclasses.button} href={'https://hackduke.typeform.com/to/Qp48Z7?route_receive_participant=xxxxx'}>
        Register Now
      </a>
    </div>
  </div>
  )

export default Registration
