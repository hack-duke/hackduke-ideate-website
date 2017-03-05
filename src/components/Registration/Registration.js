import regclasses from '../Registration/Registration.scss'

const title = 'Registration'

export const Registration = () => (
  <div>
      <div className ={regclasses.ready}>
      	Ready to go?
      </div>
      <div className = {regclasses.register}>
      	Register Now
    </div>
  </div>
)

export default Registration