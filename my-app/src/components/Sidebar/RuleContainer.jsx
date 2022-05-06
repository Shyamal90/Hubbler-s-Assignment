import React from 'react'
import './Sidebar.css'
import {useDispatch,useSelector} from 'react-redux'
import {deleteRule} from '../../redux/action'

function RuleContainer({ruleName,id}) {
    const dispatch = useDispatch();
    
    const handleDelete = () =>{
      dispatch(deleteRule(id))
    }
  return (
    <div id="ruleContainer">
      <div className="ruleName">
          <img src="dots-menu.png" alt="" width="10vw"/>
          <p>{ruleName}</p>
      </div>
      <img src="profiles.png" alt="" width="16vw"/>
      <button style={{
          border:"none",
          backgroundColor:"transparent",
          cursor:"pointer"
      }} onClick={()=>handleDelete()}><img src="delete.png" alt="" width="22vw"/></button>
    </div>
  )
}

export default RuleContainer
