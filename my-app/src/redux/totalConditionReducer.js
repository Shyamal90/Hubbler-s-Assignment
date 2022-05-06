const initialState = {
    count : 0
}

export const totalConditionReducer = (state = initialState,action) => {
   
    switch(action.type)
    {
        case "ADD_CONDITION" : 
        return {
            ...state,
            count : state.count + action.payload
        }

        default : return state;
    }
}