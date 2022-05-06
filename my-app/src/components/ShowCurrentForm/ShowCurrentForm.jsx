import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateAction from '../CreateAction/CreateAction'
import CreateButton from '../CreateButton/CreateButton'
import CreateCondition from '../CreateCondition/CreateCondition'
import {addCondition} from '../../redux/action'

function ShowCurrentForm({id}) {
  const dispatch = useDispatch();
  const rulesArr = useSelector((state)=>state.ruleReducer.rules)
  const toggleButton = useSelector((state) => state.toggleReducer)

  

  const currentArr = rulesArr.filter((rule)=>{
      return rule.id === id
  })

  

  console.log("current array ",currentArr)
  const conditionRules = new Array(currentArr[0].totalConditions).fill(0)
  const actionRules    = new Array(currentArr[0].totalActions).fill(0)

  const [newCurrentArr,setNewCurrentArr] = useState([...conditionRules]);

  const [buttonName,setButtonName] = useState(currentArr[0].buttonName)


  /*==========================================================
                     Handle Condition
      ========================================================== */
      const handleCondition = () => {
        
        setNewCurrentArr([...newCurrentArr,0])
     }

    //  let conditionRules = new Array(conditionStatus).fill(0);
  return (
    <div>
       <div id='create_form_container'>
            <h3>Default Rule</h3>

            {/* button name */}
            <div className="buttonName">
                <h4>Button Name</h4>
                {
                    toggleButton === false ? <input type="text" id='buttonName' value={buttonName} /> : <input type="text" id='buttonName' value={buttonName} onChange={(event)=>setButtonName(event.target.value)}/>
                }
                
            </div>

            {/* apply condition */}
            <div className="applyConditionContainer">
                <p id="selectAll">If All <span><img src="down-arrow.png" alt="" width="14vw" /></span></p>

                <p>of the following condition are meet:</p>

            </div>


            {/* add new condition */}
            <div className="addNewCondition">
                {
                    newCurrentArr.map((conditionName)=>{
                        return <CreateCondition/>
                    })
                }
                 
                 {
                    newCurrentArr.length < 9 && toggleButton && <CreateButton buttonName={"Add New Condition"} onClick={handleCondition}/>
                 }
                

                <hr style={{ margin: "2em 0", color: "#f2f2f2" }} />
            </div>



            {/* add another action */}
            <div className="addAnotherAction">
                <p>Perform the following </p>

                <div className="actionContainer">
                    
                    {
                        actionRules.map((actionName) => {
                            return <CreateAction />
                        })
                    }
                </div>
            </div>
            <hr style={{ margin: "2em 0", color: "#f2f2f2" }} />


            {/* {
                actionStatus < 5 && <CreateButton buttonName={"Add another action"} onClick={handleActions} />
            } */}
            
        </div>
    </div>
  )
}

export default ShowCurrentForm
