import React from 'react'
import './Rule.css'
import {useDispatch,useSelector} from 'react-redux'
import CreateForm from '../CreateForm/CreateForm';
import ShowCurrentForm from '../ShowCurrentForm/ShowCurrentForm';

function Rule() {
  const dispatch = useDispatch();
  const createFormStatus = useSelector((state)=>state.createFormReducer)

  return (
    <div id='rulesContainer'>
      {
        createFormStatus === true ? <CreateForm/> : <ShowCurrentForm id={1}/>
      }
    </div>
  )
}

export default Rule
