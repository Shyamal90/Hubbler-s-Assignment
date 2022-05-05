import React from 'react'
import CurrentPageCard from './CurrentPageCard'

function CurrentPage() {
  return (
    <div id='currentPage_container'>
      <img src="logo.png" alt="" width="26vw"/>
      <CurrentPageCard heading={"Demo Custom App"} subHeading={"APP NAME"}/>
      <img src="arrow.svg" alt="" width="7vw"/>
      <CurrentPageCard heading={"Assessment"} subHeading={"STAGE"}/>
      <img src="arrow.svg" alt="" width="7vw"/>
      <CurrentPageCard heading={"Create PO"} subHeading={"BUTTON"}/>
      <img src="arrow.svg" alt="" width="7vw"/>
      <CurrentPageCard heading={"Button Rules"} subHeading={""} />
    </div>
  )
}

export default CurrentPage
