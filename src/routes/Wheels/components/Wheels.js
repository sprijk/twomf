import React from 'react'

export const Wheels = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Wheels: props</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

// Wheels.propTypes = {
//   wheels: React.PropTypes.number.isRequired,
//   doubleAsync: React.PropTypes.func.isRequired,
//   increment: React.PropTypes.func.isRequired
// }

export default Wheels
