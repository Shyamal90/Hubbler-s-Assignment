import React from 'react'
import './Sidebar.css'
import {useDispatch,useSelector} from 'react-redux'
import {createForm} from '../../redux/action'
import RuleContainer from './RuleContainer';

function Sidebar() {
  const dispatch = useDispatch();
  const createFormStatus = useSelector((state)=>state.createFormReducer)
  const rulesArray = useSelector((state)=>state.ruleReducer.rules)
  console.log("RUle ",rulesArray)
  

  return (
    <div id='sideBar_container'>
      {/* go to back tab */}
      <div className="back_stage">
        <h4><img src="left-arrow.png" alt="" width="10vw"/> Back to Stages</h4>
      </div>

      {/* create new rule */}
      <div className="create_rule_container">
        <p id='totalRules'>RULES {rulesArray.length}</p>
        <div className="rules_container">
          <div className="rule_container">
            {
              rulesArray.map((rule)=>{
                return <RuleContainer ruleName={rule.buttonName} id={rule.id}/>
              })
            }
            
          </div>
          {
            rulesArray.length < 5 && <button id='addRule' onClick={()=>dispatch(createForm(true))}>Add New Rule</button>
          }
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar
