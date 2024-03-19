import React from 'react'

const Commanbtn = (props) => {
  return (
    <div>
        <button className={`btn-bg text-white rounded-pill fw-bold border-0 ${props.custm}`}>{props.name}</button>
    </div>
  )
}

export default Commanbtn