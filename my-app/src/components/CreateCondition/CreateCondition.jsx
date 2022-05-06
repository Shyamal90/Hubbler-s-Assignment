import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function CreateCondition() {
    return (
        <>
            <div className="conditionForm">
                <p className='ruleBox'>Text <span><img src="down-arrow.png" alt="" width="14vw" /></span></p>
                <p className='ruleBox'>Contains <span><img src="down-arrow.png" alt="" width="14vw" /></span></p>
                <p className='ruleBox'>Urgent <span><img src="close.png" alt="" width="10vw" /></span></p>

                <div className="inputForm">
                    <input type="text" placeholder='Type to search or add' style={{ width: "80%" }} id="inputField" />
                    <button className='addRuleBtn'>Add Rule</button>
                </div>

                <IconButton aria-label="delete" size="small" className="deleteButton" sx={{
                    backgroundColor: "#cd853f",
                    color: "white",


                }}>
                    <DeleteIcon  />
                </IconButton>
            </div>
        </>
    )
}

export default CreateCondition
