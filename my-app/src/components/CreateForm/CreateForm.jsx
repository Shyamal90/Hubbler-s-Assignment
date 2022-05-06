import React, { useEffect, useState } from 'react'
import './CreateForm.css'
import CreateButton from '../CreateButton/CreateButton';
import CreateAction from '../CreateAction/CreateAction';
import CreateCondition from '../CreateCondition/CreateCondition'
import { useDispatch, useSelector } from 'react-redux'
import { addAction } from '../../redux/action'
import {addCondition} from '../../redux/action'
import {addRule} from '../../redux/action'
import { v4 as uuidv4 } from 'uuid';

function CreateForm() {
    const dispatch = useDispatch();
    const actionStatus = useSelector((state) => state.totalActionsReducer.count)
    const conditionStatus = useSelector((state)=> state.totalConditionReducer.count)
    const toggleButton = useSelector((state) => state.toggleReducer)
    const rulesArray = useSelector((state)=>state.ruleReducer.rules)
    console.log(toggleButton)

    /*============================================================
                        Handle Action
      ============================================================ */
    const handleActions = () => {

        if (actionStatus < 5) {
            dispatch(addAction(1))
        } else {
            alert("Don't do it")
        }

    }


    let actionRules = new Array(actionStatus).fill(0);
    // console.log(actionRules)

    /*==========================================================
                     Handle Condition
      ========================================================== */
         const handleCondition = () => {
            if (conditionStatus < 9) {
                dispatch(addCondition(1))
            } else {
                alert("Don't do it")
            }
         }

         let conditionRules = new Array(conditionStatus).fill(0);

    /*========================================================
                    Handle Rule
      ======================================================== */
      const [buttonName,setButtonName] = useState("");


      useEffect(()=>{
        if(toggleButton === true && rulesArray.length < 5 && buttonName.length > 3){
            const date = new Date();
  
            const ruleDetails = {
              id:uuidv4(),
              buttonName,
              timeStamp : date.toString().slice(0,25),
              totalConditions : conditionStatus,
              totalActions : actionStatus
            }
            console.log("Rule Details : ",ruleDetails)
            dispatch(addRule(ruleDetails))



        }
      },[toggleButton])
      
   
    return (
        <div id='create_form_container'>
            <h3>Default Rule</h3>

            {/* button name */}
            <div className="buttonName">
                <h4>Button Name</h4>
                <input type="text" id='buttonName' value={buttonName} onChange={(event)=>setButtonName(event.target.value)}/>
            </div>

            {/* apply condition */}
            <div className="applyConditionContainer">
                <p id="selectAll">If All <span><img src="down-arrow.png" alt="" width="14vw" /></span></p>

                <p>of the following condition are meet:</p>

            </div>


            {/* add new condition */}
            <div className="addNewCondition">
                {
                    conditionRules.map((conditionName)=>{
                        return <CreateCondition/>
                    })
                }
                 
                 {
                     conditionStatus < 9 && <CreateButton buttonName={"Add New Condition"} onClick={handleCondition}/>
                 }
                

                <hr style={{ margin: "2em 0", color: "#f2f2f2" }} />
            </div>



            {/* add another action */}
            <div className="addAnotherAction">
                <p>Perform the following action</p>

                <div className="actionContainer">
                    
                    {
                        actionRules.map((actionName) => {
                            return <CreateAction />
                        })
                    }
                </div>
            </div>
            <hr style={{ margin: "2em 0", color: "#f2f2f2" }} />


            {
                actionStatus < 5 && <CreateButton buttonName={"Add another action"} onClick={handleActions} />
            }
            
        </div>
    )
}

export default CreateForm
