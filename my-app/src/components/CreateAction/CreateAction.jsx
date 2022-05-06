import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './CreateAction.css'

function CreateAction() {
  return (
    <div id="createActionContainer">
      <div className="actionBody">
          <div className="leftSection">
              <img src="play.png" alt="" width="18vw"/>
              <p>START NEW APP</p>
          </div>
          <div className="rightSection">
              <p style={{color:"blue"}}>Setup</p>
          </div>
      </div>
      <IconButton aria-label="delete" size="small" className="deleteButton" sx={{
                        backgroundColor:"#cd853f",
                        color:"white",
                        }}>
                        <DeleteIcon fontSize="small" />
        </IconButton>
    </div>
  )
}

export default CreateAction
