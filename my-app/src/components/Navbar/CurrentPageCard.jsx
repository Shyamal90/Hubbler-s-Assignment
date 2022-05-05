import React from 'react'

function CurrentPageCard({heading,subHeading}) {
  return (
    <div id='currentPageCard_container'>
      <h5>{heading}</h5>
      <p>{subHeading}</p>
    </div>
  )
}

export default CurrentPageCard
