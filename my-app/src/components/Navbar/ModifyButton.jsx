import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleButton } from '../../redux/action'

function ModifyButton() {
  const buttonState = useSelector((state) => state.toggleReducer)
  const dispatch = useDispatch();


  //current date and time
  const date = new Date();
  let currentDate = date.toString().slice(0,25)

  //toggle button
  const changeButtton = () => {
    
    dispatch(toggleButton(!buttonState))
  }

  return (
    <div id='modifyButton_container'>
      <p>App saved on {currentDate}</p>
      <button onClick={() =>changeButtton()}>{buttonState === false ? "SAVE" : "EDIT"}</button>
    </div>
  )
}

export default ModifyButton
