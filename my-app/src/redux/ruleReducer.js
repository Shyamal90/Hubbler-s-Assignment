const initialState = {
    rules : [
        {
            id:1,
            buttonName:"Default Button",
            timeStamp : "Fri May 06 2022,16:31 PM",
            totalConditions : 3,
            totalActions : 4
        }
    ]
}

export const ruleReducer = (state = initialState, action) => {
     switch(action.type)
     {
         case "ADD_RULE":return {
             ...state,
             rules : [...state.rules, action.payload]
         }

         case "REMOVE_RULE" : 
                const newUpdatedData = state.rules.filter((rule)=>{
                    return rule.id !== action.payload
                })
                return{
                   ...state,
                   rules:[...newUpdatedData]
                }

         default : return state;
     }
}