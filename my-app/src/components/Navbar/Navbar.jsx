import React from 'react'
import CurrentPage from './CurrentPage'
import ModifyButton from './ModifyButton'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <CurrentPage/>
      <ModifyButton/>
    </nav>
  )
}

export default Navbar
