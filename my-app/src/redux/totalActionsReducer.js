const initialState = {
    count : 0
}

export const totalActionsReducer = (state = initialState,action) => {
   
    switch(action.type)
    {
        case "ADD_ACTION" : 
        return {
            ...state,
            count : state.count + action.payload
        }

        default : return state;
    }
}