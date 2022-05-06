import React from 'react'
import './CreateButton.css'

function CreateButton({buttonName,onClick}) {
  return (
    <div>
      <button className='generalButton' onClick={()=>onClick()}>{buttonName}</button>
    </div>
  )
}

export default CreateButton
