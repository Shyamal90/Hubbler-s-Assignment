import {combineReducers} from 'redux'
import { toggleReducer } from './toggleReducer'
import { createFormReducer } from './createFormReducer'
import {totalActionsReducer} from './totalActionsReducer'
import {totalConditionReducer} from './totalConditionReducer'
import {ruleReducer} from './ruleReducer'

export const rootReducer = combineReducers({
    toggleReducer,
    createFormReducer,
    totalActionsReducer,
    totalConditionReducer,
    ruleReducer
}) 